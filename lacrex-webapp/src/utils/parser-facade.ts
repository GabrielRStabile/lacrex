/* eslint-disable @typescript-eslint/no-explicit-any */
import { CharStreams, CommonTokenStream, Token } from 'antlr4'
import LaCreXLexer from '../antlr/grammars/LaCreXLexer'
import LaCreXParser from '../antlr/grammars/LaCreXParser'
import LaCreXErrorHandler from '../compiler/LaCreXErrorHandler'
import {
  LaCreXError,
  LaCreXErrorStrategy,
  SintaxErrorListener,
} from '../lib/error-agregator'

export function createLexer(input: string) {
  const chars = CharStreams.fromString(input)
  const lexer = new LaCreXLexer(chars)

  return lexer
}
export function getTokens(input: string): Token[] {
  return createLexer(input).getAllTokens()
}

export function createParserFromLexer(lexer: LaCreXLexer) {
  const tokens = new CommonTokenStream(lexer)
  return new LaCreXParser(tokens)
}

export function parseTreeStr(input: string) {
  const lexer = createLexer(input)
  lexer.removeErrorListeners()
  lexer.addErrorListener(new LaCreXErrorHandler())
  const parser = createParserFromLexer(lexer)
  parser.removeErrorListeners()
  parser.addErrorListener(new LaCreXErrorHandler())
  const tree = parser.programa()
  return tree.toStringTree(parser.ruleNames, parser)
}

export function validate(input: string): LaCreXError[] {
  const parsingErrors: LaCreXError[] = []
  const lexerErrors: LaCreXError[] = []

  const lexer = createLexer(input)
  lexer.removeErrorListeners()
  lexer.addErrorListener(new LaCreXErrorHandler(lexerErrors))

  const parser = createParserFromLexer(lexer)
  parser.removeErrorListeners()
  parser.addErrorListener(new SintaxErrorListener(parsingErrors))
  parser._errHandler = new LaCreXErrorStrategy()

  parser.programa()
  return [...parsingErrors, ...lexerErrors]
}
