import {
  DefaultErrorStrategy,
  ErrorListener,
  Parser,
  Recognizer,
  Token,
} from 'antlr4'
import LaCreXParser from '../antlr/grammars/LaCreXParser'

export class LaCreXError {
  startLine: number
  endLine: number
  startCol: number
  endCol: number
  message: string

  constructor(
    startLine: number,
    endLine: number,
    startCol: number,
    endCol: number,
    message: string,
  ) {
    this.startLine = startLine
    this.endLine = endLine
    this.startCol = startCol
    this.endCol = endCol
    this.message = message
  }
}

export class SintaxErrorListener extends ErrorListener<Token> {
  private errors: LaCreXError[] = []

  constructor(errors: LaCreXError[]) {
    super()
    this.errors = errors
  }

  syntaxError(
    _: Recognizer<Token>,
    offendingSymbol: Token,
    line: number,
    column: number,
    msg: string,
  ): void {
    let endColumn = column + 1
    if (offendingSymbol.toString !== null) {
      endColumn = column + offendingSymbol.toString.length
    }
    this.errors.push(new LaCreXError(line, line, column, endColumn, msg))
  }
}

export class LaCreXErrorStrategy extends DefaultErrorStrategy {
  reportUnwantedToken(recognizer: Parser) {
    return super.reportMatch(recognizer)
  }

  singleTokenDeletion(recognizer: Parser) {
    const nextTokenType = recognizer.getTokenStream().LA(2)
    const currentTokenType = recognizer.getTokenStream().LA(1)

    if (currentTokenType === LaCreXParser.WhiteSpace) {
      return null
    }

    const expecting = this.getExpectedTokens(recognizer)

    if (expecting.contains(nextTokenType)) {
      this.reportUnwantedToken(recognizer)
      recognizer.consume()
      const matchedSymbol = recognizer.getCurrentToken()
      this.reportMatch(recognizer)
      return matchedSymbol
    } else {
      return null
    }
  }

  getExpectedTokens(recognizer: Parser) {
    return recognizer.getExpectedTokens()
  }

  reportMatch(recognizer: Parser) {
    this.endErrorCondition(recognizer)
  }
}
