// Generated from antlr/grammars/LaCreXParser.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer,
	DFA,
	DecisionState,
	FailedPredicateException,
	NoViableAltException,
	Parser,
	ParserATNSimulator,
	ParserRuleContext,
	PredictionContextCache,
	RecognitionException,
	TerminalNode,
	Token,
	TokenStream
} from 'antlr4'
import LaCreXParserVisitor from './LaCreXParserVisitor.js'

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number

export default class LaCreXParser extends Parser {
  public static readonly WhiteSpace = 1
  public static readonly VIRGULA = 2
  public static readonly PONTOEVIRGULA = 3
  public static readonly LPAREN = 4
  public static readonly RPAREN = 5
  public static readonly LCURLY = 6
  public static readonly RCURLY = 7
  public static readonly SE = 8
  public static readonly SENAO = 9
  public static readonly FOREACH = 10
  public static readonly WHILE = 11
  public static readonly MAIN = 12
  public static readonly DEFINE_FUNCAO = 13
  public static readonly TIPOS = 14
  public static readonly BOOLEANO = 15
  public static readonly PALAVRA = 16
  public static readonly NOME_VARIAVEL = 17
  public static readonly DIGITO = 18
  public static readonly DECREMENTO_OU_INCREMENTO = 19
  public static readonly NULAVEL = 20
  public static readonly OPERADOR_ATRIBUICAO = 21
  public static readonly OPERADOR_CONDICIONAL = 22
  public static readonly OPERADOR_ARITMETICO = 23
  public static readonly EOF = Token.EOF
  public static readonly RULE_programa = 0
  public static readonly RULE_expressao = 1
  public static readonly RULE_atribuicao = 2
  public static readonly RULE_define_funcao = 3
  public static readonly RULE_main = 4
  public static readonly RULE_lista_argumentos = 5
  public static readonly RULE_argumento = 6
  public static readonly RULE_bloco_then = 7
  public static readonly RULE_condicional_se = 8
  public static readonly RULE_condicional = 9
  public static readonly RULE_foreach = 10
  public static readonly RULE_while = 11
  public static readonly RULE_operador_modificador = 12
  public static readonly RULE_atribuicao_ou_operador_modificador = 13
  public static readonly RULE_valor = 14
  public static readonly RULE_funcao_matematica = 15
  public static readonly literalNames: (string | null)[] = [
    null,
    null,
    "','",
    "';'",
    "'('",
    "')'",
    "'{'",
    "'}'",
    "'elu'",
    "'delu'",
    "'segue o fio'",
    "'comofas'",
    "'o codigo de milhoes'",
    "'qualquer coisa avisa'",
    null,
    null,
    null,
    null,
    null,
    null,
    "'cancelado'",
    "'\\uD83D\uDC8B'",
  ]

  public static readonly symbolicNames: (string | null)[] = [
    null,
    'WhiteSpace',
    'VIRGULA',
    'PONTOEVIRGULA',
    'LPAREN',
    'RPAREN',
    'LCURLY',
    'RCURLY',
    'SE',
    'SENAO',
    'FOREACH',
    'WHILE',
    'MAIN',
    'DEFINE_FUNCAO',
    'TIPOS',
    'BOOLEANO',
    'PALAVRA',
    'NOME_VARIAVEL',
    'DIGITO',
    'DECREMENTO_OU_INCREMENTO',
    'NULAVEL',
    'OPERADOR_ATRIBUICAO',
    'OPERADOR_CONDICIONAL',
    'OPERADOR_ARITMETICO',
  ]

  // tslint:disable:no-trailing-whitespace
  public static readonly ruleNames: string[] = [
    'programa',
    'expressao',
    'atribuicao',
    'define_funcao',
    'main',
    'lista_argumentos',
    'argumento',
    'bloco_then',
    'condicional_se',
    'condicional',
    'foreach',
    'while',
    'operador_modificador',
    'atribuicao_ou_operador_modificador',
    'valor',
    'funcao_matematica',
  ]

  public get grammarFileName(): string {
    return 'LaCreXParser.g4'
  }

  public get literalNames(): (string | null)[] {
    return LaCreXParser.literalNames
  }

  public get symbolicNames(): (string | null)[] {
    return LaCreXParser.symbolicNames
  }

  public get ruleNames(): string[] {
    return LaCreXParser.ruleNames
  }

  public get serializedATN(): number[] {
    return LaCreXParser._serializedATN
  }

  protected createFailedPredicateException(
    predicate?: string,
    message?: string,
  ): FailedPredicateException {
    return new FailedPredicateException(this, predicate, message)
  }

  constructor(input: TokenStream) {
    super(input)
    this._interp = new ParserATNSimulator(
      this,
      LaCreXParser._ATN,
      LaCreXParser.DecisionsToDFA,
      new PredictionContextCache(),
    )
  }

  // @RuleVersion(0)
  public programa(): ProgramaContext {
    const localctx: ProgramaContext = new ProgramaContext(
      this,
      this._ctx,
      this.state,
    )
    this.enterRule(localctx, 0, LaCreXParser.RULE_programa)
    let _la: number
    try {
      this.enterOuterAlt(localctx, 1)
      {
        this.state = 35
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        while (_la === 14) {
          {
            {
              this.state = 32
              this.define_funcao()
            }
          }
          this.state = 37
          this._errHandler.sync(this)
          _la = this._input.LA(1)
        }
        this.state = 38
        this.main()
        this.state = 39
        this.match(LaCreXParser.EOF)
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localctx
  }

  // @RuleVersion(0)
  public expressao(): ExpressaoContext {
    const localctx: ExpressaoContext = new ExpressaoContext(
      this,
      this._ctx,
      this.state,
    )
    this.enterRule(localctx, 2, LaCreXParser.RULE_expressao)
    try {
      this.enterOuterAlt(localctx, 1)
      {
        this.state = 48
        this._errHandler.sync(this)
        switch (this._interp.adaptivePredict(this._input, 1, this._ctx)) {
          case 1:
            {
              this.state = 41
              this.atribuicao()
            }
            break
          case 2:
            {
              this.state = 42
              this.condicional_se()
            }
            break
          case 3:
            {
              this.state = 43
              this.foreach()
            }
            break
          case 4:
            {
              this.state = 44
              this.while_()
            }
            break
          case 5:
            {
              {
                this.state = 45
                this.operador_modificador()
              }
            }
            break
          case 6:
            {
              this.state = 46
              this.funcao_matematica()
            }
            break
          case 7:
            {
              this.state = 47
              this.atribuicao_ou_operador_modificador()
            }
            break
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localctx
  }

  // @RuleVersion(0)
  public atribuicao(): AtribuicaoContext {
    const localctx: AtribuicaoContext = new AtribuicaoContext(
      this,
      this._ctx,
      this.state,
    )
    this.enterRule(localctx, 4, LaCreXParser.RULE_atribuicao)
    let _la: number
    try {
      this.enterOuterAlt(localctx, 1)
      {
        this.state = 51
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        if (_la === 14) {
          {
            this.state = 50
            this.match(LaCreXParser.TIPOS)
          }
        }

        this.state = 53
        this.match(LaCreXParser.NOME_VARIAVEL)
        this.state = 58
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        while (_la === 2) {
          {
            {
              this.state = 54
              this.match(LaCreXParser.VIRGULA)
              this.state = 55
              this.match(LaCreXParser.NOME_VARIAVEL)
            }
          }
          this.state = 60
          this._errHandler.sync(this)
          _la = this._input.LA(1)
        }
        this.state = 72
        this._errHandler.sync(this)
        switch (this._interp.adaptivePredict(this._input, 4, this._ctx)) {
          case 1:
            {
              this.state = 61
              this.match(LaCreXParser.OPERADOR_ATRIBUICAO)
              this.state = 62
              this.valor()
            }
            break
          case 2:
            {
              this.state = 63
              this.match(LaCreXParser.OPERADOR_CONDICIONAL)
              this.state = 64
              this.match(LaCreXParser.NOME_VARIAVEL)
            }
            break
          case 3:
            {
              this.state = 65
              this.match(LaCreXParser.OPERADOR_ATRIBUICAO)
              this.state = 66
              this.valor()
            }
            break
          case 4:
            {
              this.state = 67
              this.match(LaCreXParser.OPERADOR_CONDICIONAL)
            }
            break
          case 5:
            {
              this.state = 68
              this.match(LaCreXParser.NOME_VARIAVEL)
            }
            break
          case 6:
            {
              this.state = 69
              this.match(LaCreXParser.OPERADOR_ATRIBUICAO)
              this.state = 70
              this.valor()
            }
            break
          case 7:
            {
              this.state = 71
              this.match(LaCreXParser.NOME_VARIAVEL)
            }
            break
        }
        {
          this.state = 74
          this.match(LaCreXParser.PONTOEVIRGULA)
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localctx
  }

  // @RuleVersion(0)
  public define_funcao(): Define_funcaoContext {
    const localctx: Define_funcaoContext = new Define_funcaoContext(
      this,
      this._ctx,
      this.state,
    )
    this.enterRule(localctx, 6, LaCreXParser.RULE_define_funcao)
    let _la: number
    try {
      this.enterOuterAlt(localctx, 1)
      {
        this.state = 76
        this.match(LaCreXParser.TIPOS)
        this.state = 77
        this.match(LaCreXParser.DEFINE_FUNCAO)
        this.state = 78
        this.match(LaCreXParser.NOME_VARIAVEL)
        this.state = 79
        this.match(LaCreXParser.LPAREN)
        this.state = 81
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        if (_la === 14) {
          {
            this.state = 80
            this.lista_argumentos()
          }
        }

        this.state = 83
        this.match(LaCreXParser.RPAREN)
        this.state = 84
        this.bloco_then()
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localctx
  }

  // @RuleVersion(0)
  public main(): MainContext {
    const localctx: MainContext = new MainContext(this, this._ctx, this.state)
    this.enterRule(localctx, 8, LaCreXParser.RULE_main)
    try {
      this.enterOuterAlt(localctx, 1)
      {
        this.state = 86
        this.match(LaCreXParser.MAIN)
        this.state = 87
        this.match(LaCreXParser.LPAREN)
        this.state = 88
        this.match(LaCreXParser.RPAREN)
        this.state = 89
        this.bloco_then()
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localctx
  }

  // @RuleVersion(0)
  public lista_argumentos(): Lista_argumentosContext {
    const localctx: Lista_argumentosContext = new Lista_argumentosContext(
      this,
      this._ctx,
      this.state,
    )
    this.enterRule(localctx, 10, LaCreXParser.RULE_lista_argumentos)
    let _la: number
    try {
      this.enterOuterAlt(localctx, 1)
      {
        this.state = 91
        this.argumento()
        this.state = 96
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        while (_la === 3) {
          {
            {
              this.state = 92
              this.match(LaCreXParser.PONTOEVIRGULA)
              this.state = 93
              this.argumento()
            }
          }
          this.state = 98
          this._errHandler.sync(this)
          _la = this._input.LA(1)
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localctx
  }

  // @RuleVersion(0)
  public argumento(): ArgumentoContext {
    const localctx: ArgumentoContext = new ArgumentoContext(
      this,
      this._ctx,
      this.state,
    )
    this.enterRule(localctx, 12, LaCreXParser.RULE_argumento)
    try {
      this.enterOuterAlt(localctx, 1)
      {
        this.state = 99
        this.match(LaCreXParser.TIPOS)
        this.state = 100
        this.match(LaCreXParser.NOME_VARIAVEL)
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localctx
  }

  // @RuleVersion(0)
  public bloco_then(): Bloco_thenContext {
    const localctx: Bloco_thenContext = new Bloco_thenContext(
      this,
      this._ctx,
      this.state,
    )
    this.enterRule(localctx, 14, LaCreXParser.RULE_bloco_then)
    let _la: number
    try {
      this.enterOuterAlt(localctx, 1)
      {
        this.state = 102
        this.match(LaCreXParser.LCURLY)
        this.state = 106
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        while ((_la & ~0x1f) === 0 && ((1 << _la) & 8801536) !== 0) {
          {
            {
              this.state = 103
              this.expressao()
            }
          }
          this.state = 108
          this._errHandler.sync(this)
          _la = this._input.LA(1)
        }
        this.state = 109
        this.match(LaCreXParser.RCURLY)
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localctx
  }

  // @RuleVersion(0)
  public condicional_se(): Condicional_seContext {
    const localctx: Condicional_seContext = new Condicional_seContext(
      this,
      this._ctx,
      this.state,
    )
    this.enterRule(localctx, 16, LaCreXParser.RULE_condicional_se)
    let _la: number
    try {
      this.enterOuterAlt(localctx, 1)
      {
        this.state = 111
        this.match(LaCreXParser.SE)
        this.state = 112
        this.match(LaCreXParser.LPAREN)
        this.state = 113
        this.condicional()
        this.state = 114
        this.match(LaCreXParser.RPAREN)
        this.state = 115
        this.bloco_then()
        this.state = 125
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        if (_la === 9) {
          {
            this.state = 116
            this.match(LaCreXParser.SENAO)
            this.state = 123
            this._errHandler.sync(this)
            switch (this._input.LA(1)) {
              case 4:
                {
                  this.state = 117
                  this.match(LaCreXParser.LPAREN)
                  this.state = 118
                  this.condicional()
                  this.state = 119
                  this.match(LaCreXParser.RPAREN)
                  this.state = 120
                  this.bloco_then()
                }
                break
              case 6:
                {
                  this.state = 122
                  this.bloco_then()
                }
                break
              default:
                throw new NoViableAltException(this)
            }
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localctx
  }

  // @RuleVersion(0)
  public condicional(): CondicionalContext {
    const localctx: CondicionalContext = new CondicionalContext(
      this,
      this._ctx,
      this.state,
    )
    this.enterRule(localctx, 18, LaCreXParser.RULE_condicional)
    let _la: number
    try {
      this.enterOuterAlt(localctx, 1)
      {
        this.state = 135
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        do {
          {
            this.state = 135
            this._errHandler.sync(this)
            switch (this._interp.adaptivePredict(this._input, 10, this._ctx)) {
              case 1:
                {
                  this.state = 127
                  this.match(LaCreXParser.NOME_VARIAVEL)
                }
                break
              case 2:
                {
                  this.state = 128
                  this.match(LaCreXParser.OPERADOR_CONDICIONAL)
                }
                break
              case 3:
                {
                  this.state = 129
                  this.match(LaCreXParser.OPERADOR_ATRIBUICAO)
                  this.state = 130
                  this.match(LaCreXParser.NOME_VARIAVEL)
                }
                break
              case 4:
                {
                  this.state = 131
                  this.match(LaCreXParser.DIGITO)
                  this.state = 132
                  this.match(LaCreXParser.OPERADOR_CONDICIONAL)
                  this.state = 133
                  this.match(LaCreXParser.NOME_VARIAVEL)
                }
                break
              case 5:
                {
                  this.state = 134
                  this.match(LaCreXParser.DIGITO)
                }
                break
            }
          }
          this.state = 137
          this._errHandler.sync(this)
          _la = this._input.LA(1)
        } while ((_la & ~0x1f) === 0 && ((1 << _la) & 6684672) !== 0)
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localctx
  }

  // @RuleVersion(0)
  public foreach(): ForeachContext {
    const localctx: ForeachContext = new ForeachContext(
      this,
      this._ctx,
      this.state,
    )
    this.enterRule(localctx, 20, LaCreXParser.RULE_foreach)
    try {
      this.enterOuterAlt(localctx, 1)
      {
        this.state = 139
        this.match(LaCreXParser.FOREACH)
        this.state = 140
        this.match(LaCreXParser.LPAREN)
        this.state = 142
        this._errHandler.sync(this)
        switch (this._interp.adaptivePredict(this._input, 12, this._ctx)) {
          case 1:
            {
              this.state = 141
              this.atribuicao()
            }
            break
        }
        this.state = 144
        this.condicional()
        this.state = 145
        this.match(LaCreXParser.PONTOEVIRGULA)
        this.state = 146
        this.operador_modificador()
        this.state = 147
        this.match(LaCreXParser.RPAREN)
        this.state = 148
        this.bloco_then()
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localctx
  }

  // @RuleVersion(0)
  public while_(): WhileContext {
    const localctx: WhileContext = new WhileContext(this, this._ctx, this.state)
    this.enterRule(localctx, 22, LaCreXParser.RULE_while)
    try {
      this.enterOuterAlt(localctx, 1)
      {
        this.state = 150
        this.match(LaCreXParser.WHILE)
        this.state = 151
        this.match(LaCreXParser.LPAREN)
        this.state = 152
        this.condicional()
        this.state = 153
        this.match(LaCreXParser.RPAREN)
        this.state = 154
        this.bloco_then()
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localctx
  }

  // @RuleVersion(0)
  public operador_modificador(): Operador_modificadorContext {
    const localctx: Operador_modificadorContext =
      new Operador_modificadorContext(this, this._ctx, this.state)
    this.enterRule(localctx, 24, LaCreXParser.RULE_operador_modificador)
    try {
      this.enterOuterAlt(localctx, 1)
      {
        this.state = 156
        this.match(LaCreXParser.NOME_VARIAVEL)
        this.state = 157
        this.match(LaCreXParser.DECREMENTO_OU_INCREMENTO)
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localctx
  }

  // @RuleVersion(0)
  public atribuicao_ou_operador_modificador(): Atribuicao_ou_operador_modificadorContext {
    const localctx: Atribuicao_ou_operador_modificadorContext =
      new Atribuicao_ou_operador_modificadorContext(this, this._ctx, this.state)
    this.enterRule(
      localctx,
      26,
      LaCreXParser.RULE_atribuicao_ou_operador_modificador,
    )
    try {
      this.state = 161
      this._errHandler.sync(this)
      switch (this._interp.adaptivePredict(this._input, 13, this._ctx)) {
        case 1:
          this.enterOuterAlt(localctx, 1)
          {
            this.state = 159
            this.atribuicao()
          }
          break
        case 2:
          this.enterOuterAlt(localctx, 2)
          {
            this.state = 160
            this.operador_modificador()
          }
          break
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localctx
  }

  // @RuleVersion(0)
  public valor(): ValorContext {
    const localctx: ValorContext = new ValorContext(this, this._ctx, this.state)
    this.enterRule(localctx, 28, LaCreXParser.RULE_valor)
    let _la: number
    try {
      this.enterOuterAlt(localctx, 1)
      {
        this.state = 178
        this._errHandler.sync(this)
        switch (this._interp.adaptivePredict(this._input, 16, this._ctx)) {
          case 1:
            {
              this.state = 166
              this._errHandler.sync(this)
              _la = this._input.LA(1)
              while (_la === 18) {
                {
                  {
                    this.state = 163
                    this.match(LaCreXParser.DIGITO)
                  }
                }
                this.state = 168
                this._errHandler.sync(this)
                _la = this._input.LA(1)
              }
            }
            break
          case 2:
            {
              this.state = 169
              this.match(LaCreXParser.NULAVEL)
            }
            break
          case 3:
            {
              this.state = 170
              this.match(LaCreXParser.BOOLEANO)
            }
            break
          case 4:
            {
              this.state = 171
              this.match(LaCreXParser.PALAVRA)
            }
            break
          case 5:
            {
              this.state = 175
              this._errHandler.sync(this)
              _la = this._input.LA(1)
              while (_la === 17) {
                {
                  {
                    this.state = 172
                    this.match(LaCreXParser.NOME_VARIAVEL)
                  }
                }
                this.state = 177
                this._errHandler.sync(this)
                _la = this._input.LA(1)
              }
            }
            break
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localctx
  }

  // @RuleVersion(0)
  public funcao_matematica(): Funcao_matematicaContext {
    const localctx: Funcao_matematicaContext = new Funcao_matematicaContext(
      this,
      this._ctx,
      this.state,
    )
    this.enterRule(localctx, 30, LaCreXParser.RULE_funcao_matematica)
    let _la: number
    try {
      let _alt: number
      this.enterOuterAlt(localctx, 1)
      {
        this.state = 183
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        while (_la === 18) {
          {
            {
              this.state = 180
              this.match(LaCreXParser.DIGITO)
            }
          }
          this.state = 185
          this._errHandler.sync(this)
          _la = this._input.LA(1)
        }
        this.state = 186
        this.match(LaCreXParser.OPERADOR_ARITMETICO)
        this.state = 190
        this._errHandler.sync(this)
        _alt = this._interp.adaptivePredict(this._input, 18, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 187
                this.match(LaCreXParser.DIGITO)
              }
            }
          }
          this.state = 192
          this._errHandler.sync(this)
          _alt = this._interp.adaptivePredict(this._input, 18, this._ctx)
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return localctx
  }

  public static readonly _serializedATN: number[] = [
    4, 1, 23, 194, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4,
    2, 5, 7, 5, 2, 6, 7, 6, 2, 7, 7, 7, 2, 8, 7, 8, 2, 9, 7, 9, 2, 10, 7, 10, 2,
    11, 7, 11, 2, 12, 7, 12, 2, 13, 7, 13, 2, 14, 7, 14, 2, 15, 7, 15, 1, 0, 5,
    0, 34, 8, 0, 10, 0, 12, 0, 37, 9, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 3, 1, 49, 8, 1, 1, 2, 3, 2, 52, 8, 2, 1, 2, 1, 2, 1, 2,
    5, 2, 57, 8, 2, 10, 2, 12, 2, 60, 9, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2,
    1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 3, 2, 73, 8, 2, 1, 2, 1, 2, 1, 3, 1, 3, 1, 3,
    1, 3, 1, 3, 3, 3, 82, 8, 3, 1, 3, 1, 3, 1, 3, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4,
    1, 5, 1, 5, 1, 5, 5, 5, 95, 8, 5, 10, 5, 12, 5, 98, 9, 5, 1, 6, 1, 6, 1, 6,
    1, 7, 1, 7, 5, 7, 105, 8, 7, 10, 7, 12, 7, 108, 9, 7, 1, 7, 1, 7, 1, 8, 1,
    8, 1, 8, 1, 8, 1, 8, 1, 8, 1, 8, 1, 8, 1, 8, 1, 8, 1, 8, 1, 8, 3, 8, 124, 8,
    8, 3, 8, 126, 8, 8, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 4, 9,
    136, 8, 9, 11, 9, 12, 9, 137, 1, 10, 1, 10, 1, 10, 3, 10, 143, 8, 10, 1, 10,
    1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11,
    1, 12, 1, 12, 1, 12, 1, 13, 1, 13, 3, 13, 162, 8, 13, 1, 14, 5, 14, 165, 8,
    14, 10, 14, 12, 14, 168, 9, 14, 1, 14, 1, 14, 1, 14, 1, 14, 5, 14, 174, 8,
    14, 10, 14, 12, 14, 177, 9, 14, 3, 14, 179, 8, 14, 1, 15, 5, 15, 182, 8, 15,
    10, 15, 12, 15, 185, 9, 15, 1, 15, 1, 15, 5, 15, 189, 8, 15, 10, 15, 12, 15,
    192, 9, 15, 1, 15, 0, 0, 16, 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24,
    26, 28, 30, 0, 0, 213, 0, 35, 1, 0, 0, 0, 2, 48, 1, 0, 0, 0, 4, 51, 1, 0, 0,
    0, 6, 76, 1, 0, 0, 0, 8, 86, 1, 0, 0, 0, 10, 91, 1, 0, 0, 0, 12, 99, 1, 0,
    0, 0, 14, 102, 1, 0, 0, 0, 16, 111, 1, 0, 0, 0, 18, 135, 1, 0, 0, 0, 20,
    139, 1, 0, 0, 0, 22, 150, 1, 0, 0, 0, 24, 156, 1, 0, 0, 0, 26, 161, 1, 0, 0,
    0, 28, 178, 1, 0, 0, 0, 30, 183, 1, 0, 0, 0, 32, 34, 3, 6, 3, 0, 33, 32, 1,
    0, 0, 0, 34, 37, 1, 0, 0, 0, 35, 33, 1, 0, 0, 0, 35, 36, 1, 0, 0, 0, 36, 38,
    1, 0, 0, 0, 37, 35, 1, 0, 0, 0, 38, 39, 3, 8, 4, 0, 39, 40, 5, 0, 0, 1, 40,
    1, 1, 0, 0, 0, 41, 49, 3, 4, 2, 0, 42, 49, 3, 16, 8, 0, 43, 49, 3, 20, 10,
    0, 44, 49, 3, 22, 11, 0, 45, 49, 3, 24, 12, 0, 46, 49, 3, 30, 15, 0, 47, 49,
    3, 26, 13, 0, 48, 41, 1, 0, 0, 0, 48, 42, 1, 0, 0, 0, 48, 43, 1, 0, 0, 0,
    48, 44, 1, 0, 0, 0, 48, 45, 1, 0, 0, 0, 48, 46, 1, 0, 0, 0, 48, 47, 1, 0, 0,
    0, 49, 3, 1, 0, 0, 0, 50, 52, 5, 14, 0, 0, 51, 50, 1, 0, 0, 0, 51, 52, 1, 0,
    0, 0, 52, 53, 1, 0, 0, 0, 53, 58, 5, 17, 0, 0, 54, 55, 5, 2, 0, 0, 55, 57,
    5, 17, 0, 0, 56, 54, 1, 0, 0, 0, 57, 60, 1, 0, 0, 0, 58, 56, 1, 0, 0, 0, 58,
    59, 1, 0, 0, 0, 59, 72, 1, 0, 0, 0, 60, 58, 1, 0, 0, 0, 61, 62, 5, 21, 0, 0,
    62, 73, 3, 28, 14, 0, 63, 64, 5, 22, 0, 0, 64, 73, 5, 17, 0, 0, 65, 66, 5,
    21, 0, 0, 66, 73, 3, 28, 14, 0, 67, 73, 5, 22, 0, 0, 68, 73, 5, 17, 0, 0,
    69, 70, 5, 21, 0, 0, 70, 73, 3, 28, 14, 0, 71, 73, 5, 17, 0, 0, 72, 61, 1,
    0, 0, 0, 72, 63, 1, 0, 0, 0, 72, 65, 1, 0, 0, 0, 72, 67, 1, 0, 0, 0, 72, 68,
    1, 0, 0, 0, 72, 69, 1, 0, 0, 0, 72, 71, 1, 0, 0, 0, 72, 73, 1, 0, 0, 0, 73,
    74, 1, 0, 0, 0, 74, 75, 5, 3, 0, 0, 75, 5, 1, 0, 0, 0, 76, 77, 5, 14, 0, 0,
    77, 78, 5, 13, 0, 0, 78, 79, 5, 17, 0, 0, 79, 81, 5, 4, 0, 0, 80, 82, 3, 10,
    5, 0, 81, 80, 1, 0, 0, 0, 81, 82, 1, 0, 0, 0, 82, 83, 1, 0, 0, 0, 83, 84, 5,
    5, 0, 0, 84, 85, 3, 14, 7, 0, 85, 7, 1, 0, 0, 0, 86, 87, 5, 12, 0, 0, 87,
    88, 5, 4, 0, 0, 88, 89, 5, 5, 0, 0, 89, 90, 3, 14, 7, 0, 90, 9, 1, 0, 0, 0,
    91, 96, 3, 12, 6, 0, 92, 93, 5, 3, 0, 0, 93, 95, 3, 12, 6, 0, 94, 92, 1, 0,
    0, 0, 95, 98, 1, 0, 0, 0, 96, 94, 1, 0, 0, 0, 96, 97, 1, 0, 0, 0, 97, 11, 1,
    0, 0, 0, 98, 96, 1, 0, 0, 0, 99, 100, 5, 14, 0, 0, 100, 101, 5, 17, 0, 0,
    101, 13, 1, 0, 0, 0, 102, 106, 5, 6, 0, 0, 103, 105, 3, 2, 1, 0, 104, 103,
    1, 0, 0, 0, 105, 108, 1, 0, 0, 0, 106, 104, 1, 0, 0, 0, 106, 107, 1, 0, 0,
    0, 107, 109, 1, 0, 0, 0, 108, 106, 1, 0, 0, 0, 109, 110, 5, 7, 0, 0, 110,
    15, 1, 0, 0, 0, 111, 112, 5, 8, 0, 0, 112, 113, 5, 4, 0, 0, 113, 114, 3, 18,
    9, 0, 114, 115, 5, 5, 0, 0, 115, 125, 3, 14, 7, 0, 116, 123, 5, 9, 0, 0,
    117, 118, 5, 4, 0, 0, 118, 119, 3, 18, 9, 0, 119, 120, 5, 5, 0, 0, 120, 121,
    3, 14, 7, 0, 121, 124, 1, 0, 0, 0, 122, 124, 3, 14, 7, 0, 123, 117, 1, 0, 0,
    0, 123, 122, 1, 0, 0, 0, 124, 126, 1, 0, 0, 0, 125, 116, 1, 0, 0, 0, 125,
    126, 1, 0, 0, 0, 126, 17, 1, 0, 0, 0, 127, 136, 5, 17, 0, 0, 128, 136, 5,
    22, 0, 0, 129, 130, 5, 21, 0, 0, 130, 136, 5, 17, 0, 0, 131, 132, 5, 18, 0,
    0, 132, 133, 5, 22, 0, 0, 133, 136, 5, 17, 0, 0, 134, 136, 5, 18, 0, 0, 135,
    127, 1, 0, 0, 0, 135, 128, 1, 0, 0, 0, 135, 129, 1, 0, 0, 0, 135, 131, 1, 0,
    0, 0, 135, 134, 1, 0, 0, 0, 136, 137, 1, 0, 0, 0, 137, 135, 1, 0, 0, 0, 137,
    138, 1, 0, 0, 0, 138, 19, 1, 0, 0, 0, 139, 140, 5, 10, 0, 0, 140, 142, 5, 4,
    0, 0, 141, 143, 3, 4, 2, 0, 142, 141, 1, 0, 0, 0, 142, 143, 1, 0, 0, 0, 143,
    144, 1, 0, 0, 0, 144, 145, 3, 18, 9, 0, 145, 146, 5, 3, 0, 0, 146, 147, 3,
    24, 12, 0, 147, 148, 5, 5, 0, 0, 148, 149, 3, 14, 7, 0, 149, 21, 1, 0, 0, 0,
    150, 151, 5, 11, 0, 0, 151, 152, 5, 4, 0, 0, 152, 153, 3, 18, 9, 0, 153,
    154, 5, 5, 0, 0, 154, 155, 3, 14, 7, 0, 155, 23, 1, 0, 0, 0, 156, 157, 5,
    17, 0, 0, 157, 158, 5, 19, 0, 0, 158, 25, 1, 0, 0, 0, 159, 162, 3, 4, 2, 0,
    160, 162, 3, 24, 12, 0, 161, 159, 1, 0, 0, 0, 161, 160, 1, 0, 0, 0, 162, 27,
    1, 0, 0, 0, 163, 165, 5, 18, 0, 0, 164, 163, 1, 0, 0, 0, 165, 168, 1, 0, 0,
    0, 166, 164, 1, 0, 0, 0, 166, 167, 1, 0, 0, 0, 167, 179, 1, 0, 0, 0, 168,
    166, 1, 0, 0, 0, 169, 179, 5, 20, 0, 0, 170, 179, 5, 15, 0, 0, 171, 179, 5,
    16, 0, 0, 172, 174, 5, 17, 0, 0, 173, 172, 1, 0, 0, 0, 174, 177, 1, 0, 0, 0,
    175, 173, 1, 0, 0, 0, 175, 176, 1, 0, 0, 0, 176, 179, 1, 0, 0, 0, 177, 175,
    1, 0, 0, 0, 178, 166, 1, 0, 0, 0, 178, 169, 1, 0, 0, 0, 178, 170, 1, 0, 0,
    0, 178, 171, 1, 0, 0, 0, 178, 175, 1, 0, 0, 0, 179, 29, 1, 0, 0, 0, 180,
    182, 5, 18, 0, 0, 181, 180, 1, 0, 0, 0, 182, 185, 1, 0, 0, 0, 183, 181, 1,
    0, 0, 0, 183, 184, 1, 0, 0, 0, 184, 186, 1, 0, 0, 0, 185, 183, 1, 0, 0, 0,
    186, 190, 5, 23, 0, 0, 187, 189, 5, 18, 0, 0, 188, 187, 1, 0, 0, 0, 189,
    192, 1, 0, 0, 0, 190, 188, 1, 0, 0, 0, 190, 191, 1, 0, 0, 0, 191, 31, 1, 0,
    0, 0, 192, 190, 1, 0, 0, 0, 19, 35, 48, 51, 58, 72, 81, 96, 106, 123, 125,
    135, 137, 142, 161, 166, 175, 178, 183, 190,
  ]

  private static __ATN: ATN
  public static get _ATN(): ATN {
    if (!LaCreXParser.__ATN) {
      LaCreXParser.__ATN = new ATNDeserializer().deserialize(
        LaCreXParser._serializedATN,
      )
    }

    return LaCreXParser.__ATN
  }

  static DecisionsToDFA = LaCreXParser._ATN.decisionToState.map(
    (ds: DecisionState, index: number) => new DFA(ds, index),
  )
}

export class ProgramaContext extends ParserRuleContext {
  constructor(
    parser?: LaCreXParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState)
    this.parser = parser
  }

  public main(): MainContext {
    return this.getTypedRuleContext(MainContext, 0) as MainContext
  }

  public EOF(): TerminalNode {
    return this.getToken(LaCreXParser.EOF, 0)
  }

  public define_funcao_list(): Define_funcaoContext[] {
    return this.getTypedRuleContexts(
      Define_funcaoContext,
    ) as Define_funcaoContext[]
  }

  public define_funcao(i: number): Define_funcaoContext {
    return this.getTypedRuleContext(
      Define_funcaoContext,
      i,
    ) as Define_funcaoContext
  }

  public get ruleIndex(): number {
    return LaCreXParser.RULE_programa
  }

  // @Override
  public accept<Result>(visitor: LaCreXParserVisitor<Result>): Result {
    if (visitor.visitPrograma) {
      return visitor.visitPrograma(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ExpressaoContext extends ParserRuleContext {
  constructor(
    parser?: LaCreXParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState)
    this.parser = parser
  }

  public atribuicao(): AtribuicaoContext {
    return this.getTypedRuleContext(AtribuicaoContext, 0) as AtribuicaoContext
  }

  public condicional_se(): Condicional_seContext {
    return this.getTypedRuleContext(
      Condicional_seContext,
      0,
    ) as Condicional_seContext
  }

  public foreach(): ForeachContext {
    return this.getTypedRuleContext(ForeachContext, 0) as ForeachContext
  }

  public while_(): WhileContext {
    return this.getTypedRuleContext(WhileContext, 0) as WhileContext
  }

  public funcao_matematica(): Funcao_matematicaContext {
    return this.getTypedRuleContext(
      Funcao_matematicaContext,
      0,
    ) as Funcao_matematicaContext
  }

  public atribuicao_ou_operador_modificador(): Atribuicao_ou_operador_modificadorContext {
    return this.getTypedRuleContext(
      Atribuicao_ou_operador_modificadorContext,
      0,
    ) as Atribuicao_ou_operador_modificadorContext
  }

  public operador_modificador(): Operador_modificadorContext {
    return this.getTypedRuleContext(
      Operador_modificadorContext,
      0,
    ) as Operador_modificadorContext
  }

  public get ruleIndex(): number {
    return LaCreXParser.RULE_expressao
  }

  // @Override
  public accept<Result>(visitor: LaCreXParserVisitor<Result>): Result {
    if (visitor.visitExpressao) {
      return visitor.visitExpressao(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class AtribuicaoContext extends ParserRuleContext {
  constructor(
    parser?: LaCreXParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState)
    this.parser = parser
  }

  public NOME_VARIAVEL_list(): TerminalNode[] {
    return this.getTokens(LaCreXParser.NOME_VARIAVEL)
  }

  public NOME_VARIAVEL(i: number): TerminalNode {
    return this.getToken(LaCreXParser.NOME_VARIAVEL, i)
  }

  public PONTOEVIRGULA(): TerminalNode {
    return this.getToken(LaCreXParser.PONTOEVIRGULA, 0)
  }

  public TIPOS(): TerminalNode {
    return this.getToken(LaCreXParser.TIPOS, 0)
  }

  public VIRGULA_list(): TerminalNode[] {
    return this.getTokens(LaCreXParser.VIRGULA)
  }

  public VIRGULA(i: number): TerminalNode {
    return this.getToken(LaCreXParser.VIRGULA, i)
  }

  public OPERADOR_ATRIBUICAO(): TerminalNode {
    return this.getToken(LaCreXParser.OPERADOR_ATRIBUICAO, 0)
  }

  public valor(): ValorContext {
    return this.getTypedRuleContext(ValorContext, 0) as ValorContext
  }

  public OPERADOR_CONDICIONAL(): TerminalNode {
    return this.getToken(LaCreXParser.OPERADOR_CONDICIONAL, 0)
  }

  public get ruleIndex(): number {
    return LaCreXParser.RULE_atribuicao
  }

  // @Override
  public accept<Result>(visitor: LaCreXParserVisitor<Result>): Result {
    if (visitor.visitAtribuicao) {
      return visitor.visitAtribuicao(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Define_funcaoContext extends ParserRuleContext {
  constructor(
    parser?: LaCreXParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState)
    this.parser = parser
  }

  public TIPOS(): TerminalNode {
    return this.getToken(LaCreXParser.TIPOS, 0)
  }

  public DEFINE_FUNCAO(): TerminalNode {
    return this.getToken(LaCreXParser.DEFINE_FUNCAO, 0)
  }

  public NOME_VARIAVEL(): TerminalNode {
    return this.getToken(LaCreXParser.NOME_VARIAVEL, 0)
  }

  public LPAREN(): TerminalNode {
    return this.getToken(LaCreXParser.LPAREN, 0)
  }

  public RPAREN(): TerminalNode {
    return this.getToken(LaCreXParser.RPAREN, 0)
  }

  public bloco_then(): Bloco_thenContext {
    return this.getTypedRuleContext(Bloco_thenContext, 0) as Bloco_thenContext
  }

  public lista_argumentos(): Lista_argumentosContext {
    return this.getTypedRuleContext(
      Lista_argumentosContext,
      0,
    ) as Lista_argumentosContext
  }

  public get ruleIndex(): number {
    return LaCreXParser.RULE_define_funcao
  }

  // @Override
  public accept<Result>(visitor: LaCreXParserVisitor<Result>): Result {
    if (visitor.visitDefine_funcao) {
      return visitor.visitDefine_funcao(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class MainContext extends ParserRuleContext {
  constructor(
    parser?: LaCreXParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState)
    this.parser = parser
  }

  public MAIN(): TerminalNode {
    return this.getToken(LaCreXParser.MAIN, 0)
  }

  public LPAREN(): TerminalNode {
    return this.getToken(LaCreXParser.LPAREN, 0)
  }

  public RPAREN(): TerminalNode {
    return this.getToken(LaCreXParser.RPAREN, 0)
  }

  public bloco_then(): Bloco_thenContext {
    return this.getTypedRuleContext(Bloco_thenContext, 0) as Bloco_thenContext
  }

  public get ruleIndex(): number {
    return LaCreXParser.RULE_main
  }

  // @Override
  public accept<Result>(visitor: LaCreXParserVisitor<Result>): Result {
    if (visitor.visitMain) {
      return visitor.visitMain(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Lista_argumentosContext extends ParserRuleContext {
  constructor(
    parser?: LaCreXParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState)
    this.parser = parser
  }

  public argumento_list(): ArgumentoContext[] {
    return this.getTypedRuleContexts(ArgumentoContext) as ArgumentoContext[]
  }

  public argumento(i: number): ArgumentoContext {
    return this.getTypedRuleContext(ArgumentoContext, i) as ArgumentoContext
  }

  public PONTOEVIRGULA_list(): TerminalNode[] {
    return this.getTokens(LaCreXParser.PONTOEVIRGULA)
  }

  public PONTOEVIRGULA(i: number): TerminalNode {
    return this.getToken(LaCreXParser.PONTOEVIRGULA, i)
  }

  public get ruleIndex(): number {
    return LaCreXParser.RULE_lista_argumentos
  }

  // @Override
  public accept<Result>(visitor: LaCreXParserVisitor<Result>): Result {
    if (visitor.visitLista_argumentos) {
      return visitor.visitLista_argumentos(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ArgumentoContext extends ParserRuleContext {
  constructor(
    parser?: LaCreXParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState)
    this.parser = parser
  }

  public TIPOS(): TerminalNode {
    return this.getToken(LaCreXParser.TIPOS, 0)
  }

  public NOME_VARIAVEL(): TerminalNode {
    return this.getToken(LaCreXParser.NOME_VARIAVEL, 0)
  }

  public get ruleIndex(): number {
    return LaCreXParser.RULE_argumento
  }

  // @Override
  public accept<Result>(visitor: LaCreXParserVisitor<Result>): Result {
    if (visitor.visitArgumento) {
      return visitor.visitArgumento(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Bloco_thenContext extends ParserRuleContext {
  constructor(
    parser?: LaCreXParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState)
    this.parser = parser
  }

  public LCURLY(): TerminalNode {
    return this.getToken(LaCreXParser.LCURLY, 0)
  }

  public RCURLY(): TerminalNode {
    return this.getToken(LaCreXParser.RCURLY, 0)
  }

  public expressao_list(): ExpressaoContext[] {
    return this.getTypedRuleContexts(ExpressaoContext) as ExpressaoContext[]
  }

  public expressao(i: number): ExpressaoContext {
    return this.getTypedRuleContext(ExpressaoContext, i) as ExpressaoContext
  }

  public get ruleIndex(): number {
    return LaCreXParser.RULE_bloco_then
  }

  // @Override
  public accept<Result>(visitor: LaCreXParserVisitor<Result>): Result {
    if (visitor.visitBloco_then) {
      return visitor.visitBloco_then(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Condicional_seContext extends ParserRuleContext {
  constructor(
    parser?: LaCreXParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState)
    this.parser = parser
  }

  public SE(): TerminalNode {
    return this.getToken(LaCreXParser.SE, 0)
  }

  public LPAREN_list(): TerminalNode[] {
    return this.getTokens(LaCreXParser.LPAREN)
  }

  public LPAREN(i: number): TerminalNode {
    return this.getToken(LaCreXParser.LPAREN, i)
  }

  public condicional_list(): CondicionalContext[] {
    return this.getTypedRuleContexts(CondicionalContext) as CondicionalContext[]
  }

  public condicional(i: number): CondicionalContext {
    return this.getTypedRuleContext(CondicionalContext, i) as CondicionalContext
  }

  public RPAREN_list(): TerminalNode[] {
    return this.getTokens(LaCreXParser.RPAREN)
  }

  public RPAREN(i: number): TerminalNode {
    return this.getToken(LaCreXParser.RPAREN, i)
  }

  public bloco_then_list(): Bloco_thenContext[] {
    return this.getTypedRuleContexts(Bloco_thenContext) as Bloco_thenContext[]
  }

  public bloco_then(i: number): Bloco_thenContext {
    return this.getTypedRuleContext(Bloco_thenContext, i) as Bloco_thenContext
  }

  public SENAO(): TerminalNode {
    return this.getToken(LaCreXParser.SENAO, 0)
  }

  public get ruleIndex(): number {
    return LaCreXParser.RULE_condicional_se
  }

  // @Override
  public accept<Result>(visitor: LaCreXParserVisitor<Result>): Result {
    if (visitor.visitCondicional_se) {
      return visitor.visitCondicional_se(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class CondicionalContext extends ParserRuleContext {
  constructor(
    parser?: LaCreXParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState)
    this.parser = parser
  }

  public NOME_VARIAVEL_list(): TerminalNode[] {
    return this.getTokens(LaCreXParser.NOME_VARIAVEL)
  }

  public NOME_VARIAVEL(i: number): TerminalNode {
    return this.getToken(LaCreXParser.NOME_VARIAVEL, i)
  }

  public OPERADOR_CONDICIONAL_list(): TerminalNode[] {
    return this.getTokens(LaCreXParser.OPERADOR_CONDICIONAL)
  }

  public OPERADOR_CONDICIONAL(i: number): TerminalNode {
    return this.getToken(LaCreXParser.OPERADOR_CONDICIONAL, i)
  }

  public OPERADOR_ATRIBUICAO_list(): TerminalNode[] {
    return this.getTokens(LaCreXParser.OPERADOR_ATRIBUICAO)
  }

  public OPERADOR_ATRIBUICAO(i: number): TerminalNode {
    return this.getToken(LaCreXParser.OPERADOR_ATRIBUICAO, i)
  }

  public DIGITO_list(): TerminalNode[] {
    return this.getTokens(LaCreXParser.DIGITO)
  }

  public DIGITO(i: number): TerminalNode {
    return this.getToken(LaCreXParser.DIGITO, i)
  }

  public get ruleIndex(): number {
    return LaCreXParser.RULE_condicional
  }

  // @Override
  public accept<Result>(visitor: LaCreXParserVisitor<Result>): Result {
    if (visitor.visitCondicional) {
      return visitor.visitCondicional(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ForeachContext extends ParserRuleContext {
  constructor(
    parser?: LaCreXParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState)
    this.parser = parser
  }

  public FOREACH(): TerminalNode {
    return this.getToken(LaCreXParser.FOREACH, 0)
  }

  public LPAREN(): TerminalNode {
    return this.getToken(LaCreXParser.LPAREN, 0)
  }

  public condicional(): CondicionalContext {
    return this.getTypedRuleContext(CondicionalContext, 0) as CondicionalContext
  }

  public PONTOEVIRGULA(): TerminalNode {
    return this.getToken(LaCreXParser.PONTOEVIRGULA, 0)
  }

  public operador_modificador(): Operador_modificadorContext {
    return this.getTypedRuleContext(
      Operador_modificadorContext,
      0,
    ) as Operador_modificadorContext
  }

  public RPAREN(): TerminalNode {
    return this.getToken(LaCreXParser.RPAREN, 0)
  }

  public bloco_then(): Bloco_thenContext {
    return this.getTypedRuleContext(Bloco_thenContext, 0) as Bloco_thenContext
  }

  public atribuicao(): AtribuicaoContext {
    return this.getTypedRuleContext(AtribuicaoContext, 0) as AtribuicaoContext
  }

  public get ruleIndex(): number {
    return LaCreXParser.RULE_foreach
  }

  // @Override
  public accept<Result>(visitor: LaCreXParserVisitor<Result>): Result {
    if (visitor.visitForeach) {
      return visitor.visitForeach(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class WhileContext extends ParserRuleContext {
  constructor(
    parser?: LaCreXParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState)
    this.parser = parser
  }

  public WHILE(): TerminalNode {
    return this.getToken(LaCreXParser.WHILE, 0)
  }

  public LPAREN(): TerminalNode {
    return this.getToken(LaCreXParser.LPAREN, 0)
  }

  public condicional(): CondicionalContext {
    return this.getTypedRuleContext(CondicionalContext, 0) as CondicionalContext
  }

  public RPAREN(): TerminalNode {
    return this.getToken(LaCreXParser.RPAREN, 0)
  }

  public bloco_then(): Bloco_thenContext {
    return this.getTypedRuleContext(Bloco_thenContext, 0) as Bloco_thenContext
  }

  public get ruleIndex(): number {
    return LaCreXParser.RULE_while
  }

  // @Override
  public accept<Result>(visitor: LaCreXParserVisitor<Result>): Result {
    if (visitor.visitWhile) {
      return visitor.visitWhile(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Operador_modificadorContext extends ParserRuleContext {
  constructor(
    parser?: LaCreXParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState)
    this.parser = parser
  }

  public NOME_VARIAVEL(): TerminalNode {
    return this.getToken(LaCreXParser.NOME_VARIAVEL, 0)
  }

  public DECREMENTO_OU_INCREMENTO(): TerminalNode {
    return this.getToken(LaCreXParser.DECREMENTO_OU_INCREMENTO, 0)
  }

  public get ruleIndex(): number {
    return LaCreXParser.RULE_operador_modificador
  }

  // @Override
  public accept<Result>(visitor: LaCreXParserVisitor<Result>): Result {
    if (visitor.visitOperador_modificador) {
      return visitor.visitOperador_modificador(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Atribuicao_ou_operador_modificadorContext extends ParserRuleContext {
  constructor(
    parser?: LaCreXParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState)
    this.parser = parser
  }

  public atribuicao(): AtribuicaoContext {
    return this.getTypedRuleContext(AtribuicaoContext, 0) as AtribuicaoContext
  }

  public operador_modificador(): Operador_modificadorContext {
    return this.getTypedRuleContext(
      Operador_modificadorContext,
      0,
    ) as Operador_modificadorContext
  }

  public get ruleIndex(): number {
    return LaCreXParser.RULE_atribuicao_ou_operador_modificador
  }

  // @Override
  public accept<Result>(visitor: LaCreXParserVisitor<Result>): Result {
    if (visitor.visitAtribuicao_ou_operador_modificador) {
      return visitor.visitAtribuicao_ou_operador_modificador(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ValorContext extends ParserRuleContext {
  constructor(
    parser?: LaCreXParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState)
    this.parser = parser
  }

  public NULAVEL(): TerminalNode {
    return this.getToken(LaCreXParser.NULAVEL, 0)
  }

  public BOOLEANO(): TerminalNode {
    return this.getToken(LaCreXParser.BOOLEANO, 0)
  }

  public PALAVRA(): TerminalNode {
    return this.getToken(LaCreXParser.PALAVRA, 0)
  }

  public DIGITO_list(): TerminalNode[] {
    return this.getTokens(LaCreXParser.DIGITO)
  }

  public DIGITO(i: number): TerminalNode {
    return this.getToken(LaCreXParser.DIGITO, i)
  }

  public NOME_VARIAVEL_list(): TerminalNode[] {
    return this.getTokens(LaCreXParser.NOME_VARIAVEL)
  }

  public NOME_VARIAVEL(i: number): TerminalNode {
    return this.getToken(LaCreXParser.NOME_VARIAVEL, i)
  }

  public get ruleIndex(): number {
    return LaCreXParser.RULE_valor
  }

  // @Override
  public accept<Result>(visitor: LaCreXParserVisitor<Result>): Result {
    if (visitor.visitValor) {
      return visitor.visitValor(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Funcao_matematicaContext extends ParserRuleContext {
  constructor(
    parser?: LaCreXParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState)
    this.parser = parser
  }

  public OPERADOR_ARITMETICO(): TerminalNode {
    return this.getToken(LaCreXParser.OPERADOR_ARITMETICO, 0)
  }

  public DIGITO_list(): TerminalNode[] {
    return this.getTokens(LaCreXParser.DIGITO)
  }

  public DIGITO(i: number): TerminalNode {
    return this.getToken(LaCreXParser.DIGITO, i)
  }

  public get ruleIndex(): number {
    return LaCreXParser.RULE_funcao_matematica
  }

  // @Override
  public accept<Result>(visitor: LaCreXParserVisitor<Result>): Result {
    if (visitor.visitFuncao_matematica) {
      return visitor.visitFuncao_matematica(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
