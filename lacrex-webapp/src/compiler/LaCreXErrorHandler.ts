/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { ErrorListener, RecognitionException, Recognizer } from 'antlr4'
import { LaCreXError } from '../lib/error-agregator'

export default class LaCreXErrorHandler extends ErrorListener<any> {
  private errors: LaCreXError[] = []

  constructor(errors?: LaCreXError[]) {
    super()
    if (errors) {
      this.errors = errors
    }
  }

  syntaxError(
    _: Recognizer<any>,
    offendingSymbol: any | undefined,
    line: number,
    column: number,
    msg: string,
    __: RecognitionException | undefined,
  ): void {
    let endColumn = column + 1
    if (offendingSymbol?.toString() !== null) {
      endColumn = column + offendingSymbol?.toString().length
    }
    this.errors.push(new LaCreXError(line, line, column, endColumn, msg))
  }
}
