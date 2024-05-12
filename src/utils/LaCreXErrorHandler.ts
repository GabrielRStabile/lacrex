/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { ANTLRErrorListener, RecognitionException, Recognizer } from 'antlr4ts'

export default class LaCreXErrorHandler implements ANTLRErrorListener<any> {
  syntaxError(
    recognizer: Recognizer<any, any>,
    offendingSymbol: any,
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
