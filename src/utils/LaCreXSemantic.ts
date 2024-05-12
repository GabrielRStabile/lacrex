import {
  AtribuicaoContext,
  ExpressaoContext,
  ProgramaContext,
  ValorContext,
} from '../compiler/antlr/grammars/LaCreXParser'

interface SymbolTableEntry {
  name: string
  type: string
}

export default class LaCrexSemantic {
  private static symbolTable: SymbolTableEntry[] = []

  private static typeMap: { [key: string]: string } = {
    hetero: 'int',
    mona: 'string',
    'old que': 'bool',
  }

  private static addVariableToSymbolTable(name: string, type: string): void {
    this.symbolTable.push({ name, type })
  }

  private static isVariableDeclared(name: string): boolean {
    return this.symbolTable.some((entry) => entry.name === name)
  }

  private static getVariableType(name: string): string | undefined {
    const entry = this.symbolTable.find((entry) => entry.name === name)
    return entry ? entry.type : undefined
  }

  private static verifyAtribuicao(atribuicao: AtribuicaoContext): void {
    const variableNameNode = atribuicao.children?.[1]
    if (!variableNameNode) {
      console.error(
        'Erro semântico: Não foi possível encontrar o nome da variável na atribuição.',
      )
      return
    }

    const variableName = variableNameNode.text
    const variableTypeToken = atribuicao.children?.[0]
    const variableType = variableTypeToken ? variableTypeToken.text : null

    if (variableType && this.typeMap.hasOwnProperty(variableType)) {
      this.addVariableToSymbolTable(variableName, variableType)
    } else {
      console.error(
        `Erro semântico: Tipo da variável '${variableName}' não reconhecido ou indefinido.`,
      )
    }

    if (!this.isVariableDeclared(variableName)) {
      if (variableType) {
        this.addVariableToSymbolTable(variableName, variableType)
      } else {
        console.error(
          `Erro semântico: Identificador '${variableName}' utilizado antes da declaração.`,
        )
        return
      }
    }

    const valor = atribuicao.children?.[3] as ValorContext
    const declaredType = this.getVariableType(variableName)
    let valorType: string = ''

    if (!declaredType || !(declaredType in this.typeMap)) {
      console.error(
        `Erro semântico: O tipo de '${variableName}' não foi declarado ou é desconhecido.`,
      )
      return
    }

    if (valor.text.match(/^\d+$/)) {
      valorType = 'int'
    } else if (valor.text.startsWith('"') && valor.text.endsWith('"')) {
      valorType = 'string'
    } else if (valor.text === 'true' || valor.text === 'false') {
      valorType = 'bool'
    }

    if (this.typeMap[declaredType] !== valorType) {
      console.error(
        `Erro semântico: O tipo do valor atribuído a '${variableName}' (${valorType}) não condiz com o tipo da variável (${this.typeMap[declaredType]}).`,
      )
    }
  }

  private static verifyExpressao(expressao: ExpressaoContext): void {
    if (expressao.children?.[0] instanceof AtribuicaoContext) {
      this.verifyAtribuicao(expressao.children?.[0])
    }
    console.log('Expressao:', expressao.text)
  }

  public static verify(programa: ProgramaContext): void {
    this.symbolTable = []
    programa.children?.forEach((child) => {
      if (child instanceof ExpressaoContext) {
        this.verifyExpressao(child)
      }
    })
  }
}
