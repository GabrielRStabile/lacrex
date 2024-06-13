import { CharStreams, CommonTokenStream } from 'antlr4'
import { readFileSync } from 'fs'
import { join } from 'path'
import LaCreXLexer from './compiler/antlr/grammars/LaCreXLexer'
import LaCreXParser from './compiler/antlr/grammars/LaCreXParser'
import {
    LaCreXLexerErrorHandler,
    LaCreXSintaxErrorHandler,
} from './utils/LaCreXErrorHandler'
import LaCrexSemantic from './utils/LaCreXSemantic'

const input = readFileSync(join(__dirname, 'debug.lacre'), 'utf8')

const chars = CharStreams.fromString(input)
const lexer = new LaCreXLexer(chars)
const tokens = new CommonTokenStream(lexer)
const parser = new LaCreXParser(tokens)

/*
 * Remove the default error listeners and add a custom one
 * to handle the errors
 */
parser.removeErrorListeners()
parser.addErrorListener(new LaCreXSintaxErrorHandler())
lexer.removeErrorListeners()
lexer.addErrorListener(new LaCreXLexerErrorHandler())

const sintaxTree = parser.programa()

LaCrexSemantic.verify(sintaxTree)

console.log(sintaxTree.toStringTree(parser.ruleNames, parser))
