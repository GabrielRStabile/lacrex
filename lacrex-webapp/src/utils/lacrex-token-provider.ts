/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorListener } from 'antlr4'
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api'
import { createLexer } from './parser-facade'

export class LaCreXState implements monaco.languages.IState {
  clone(): monaco.languages.IState {
    return new LaCreXState()
  }

  equals(): boolean {
    return true
  }
}

export class LaCreXTokensProvider implements monaco.languages.TokensProvider {
  getInitialState(): monaco.languages.IState {
    return new LaCreXState()
  }

  tokenize(line: string): monaco.languages.ILineTokens {
    return tokensForLine(line)
  }
}

const EOF = -1

class LaCreXToken implements monaco.languages.IToken {
  scopes: string
  startIndex: number

  constructor(ruleName: string, startIndex: number) {
    this.scopes = ruleName.toLowerCase() + '.lacre'
    this.startIndex = startIndex
  }
}

class LaCreXLineTokens implements monaco.languages.ILineTokens {
  endState: monaco.languages.IState
  tokens: monaco.languages.IToken[]

  constructor(tokens: monaco.languages.IToken[]) {
    this.endState = new LaCreXState()
    this.tokens = tokens
  }
}

export function tokensForLine(input: string): monaco.languages.ILineTokens {
  const errorStartingPoints: number[] = []

  class ErrorCollectorListener implements ErrorListener<any> {
    syntaxError(
      _recognizer: any,
      _offendingSymbol: any | undefined,
      _line: number,
      column: number,
      _msg: string,
      _e: any,
    ): void {
      errorStartingPoints.push(column)
    }
  }

  const lexer = createLexer(input)
  lexer.removeErrorListeners()
  const errorListener = new ErrorCollectorListener()
  lexer.addErrorListener(errorListener)
  let done = false
  const myTokens: monaco.languages.IToken[] = []

  do {
    const token = lexer.nextToken()
    if (token == null) {
      done = true
    } else {
      if (token.type === EOF) {
        done = true
      } else {
        const tokenTypeName = lexer.ruleNames[token.type - 1]
        const myToken = new LaCreXToken(tokenTypeName, token.column)
        myTokens.push(myToken)
      }
    }
  } while (!done)

  for (const e of errorStartingPoints) {
    myTokens.push(new LaCreXToken('error.lacrex', e))
  }
  myTokens.sort((a, b) => (a.startIndex > b.startIndex ? 1 : -1))

  return new LaCreXLineTokens(myTokens)
}
