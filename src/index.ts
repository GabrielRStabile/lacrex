import { CharStreams, CommonTokenStream } from 'antlr4ts'
import { readFileSync } from 'fs'
import { join } from 'path'
import { LaCreXLexer } from './compiler/antlr/grammars/LaCreXLexer'
import { LaCreXParser } from './compiler/antlr/grammars/LaCreXParser'
import LaCreXErrorHandler from './utils/LaCreXErrorHandler'
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
parser.addErrorListener(new LaCreXErrorHandler())
lexer.removeErrorListeners()
lexer.addErrorListener(new LaCreXErrorHandler())

const sintaxTree = parser.programa()

LaCrexSemantic.verify(sintaxTree)

console.log(sintaxTree.toStringTree(parser.ruleNames))
