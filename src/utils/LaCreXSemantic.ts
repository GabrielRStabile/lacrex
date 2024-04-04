import {
  ExpressaoContext,
  ProgramaContext,
} from '../compiler/antlr/grammars/LaCreXParser'

export default class LaCrexSemantic {
  private static verifyExpressao(expressao: ExpressaoContext): void {
    // Do something
    console.log('Expressao:', expressao.text)
  }

  public static verify(programa: ProgramaContext): void {
    programa.children?.forEach((child) => {
      if (child instanceof ExpressaoContext) {
        LaCrexSemantic.verifyExpressao(child)
      }
    })
  }
}
