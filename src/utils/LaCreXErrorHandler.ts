/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { ErrorListener, RecognitionException, Recognizer, Token } from "antlr4"

export  class LaCreXSintaxErrorHandler implements ErrorListener<Token> {
  syntaxError(
    recognizer: Recognizer<Token>,
    offendingSymbol: Token | undefined,
    line: number,
    charPositionInLine: number,
    msg: string,
    e: RecognitionException | undefined,
  ): void {
    let errorMessage = `Erro na linha ${line}:${charPositionInLine}`
    if (offendingSymbol) {
      errorMessage += ` (Símbolo: ${offendingSymbol.text})`
    }
    errorMessage += ` - ${msg}`

    console.error(
      'LaCreX: ' +
        errorMessage.replace('missing', 'faltando').replace('at', 'antes de'),
    )
  }
}


export  class LaCreXLexerErrorHandler implements ErrorListener<number> {
  syntaxError(
    recognizer: Recognizer<number>,
    offendingSymbol: number | undefined,
    line: number,
    charPositionInLine: number,
    msg: string,
    e: RecognitionException | undefined,
  ): void {
    let errorMessage = `Erro na linha ${line}:${charPositionInLine}`
    if (offendingSymbol) {
      errorMessage += ` (Símbolo: ${offendingSymbol})`
    }
    errorMessage += ` - ${msg}`

    console.error(
      'LaCreX: ' +
        errorMessage.replace('missing', 'faltando').replace('at', 'antes de'),
    )
  }
}
