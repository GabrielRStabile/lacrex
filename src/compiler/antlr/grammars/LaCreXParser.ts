// Generated from antlr/grammars/LaCreXParser.g4 by ANTLR 4.9.0-SNAPSHOT

import { FailedPredicateException } from 'antlr4ts/FailedPredicateException'
import { NoViableAltException } from 'antlr4ts/NoViableAltException'
import { Parser } from 'antlr4ts/Parser'
import { ParserRuleContext } from 'antlr4ts/ParserRuleContext'
import { RecognitionException } from 'antlr4ts/RecognitionException'
import { ATN } from 'antlr4ts/atn/ATN'
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer'
import { ParserATNSimulator } from 'antlr4ts/atn/ParserATNSimulator'
// import { RuleVersion } from "antlr4ts/RuleVersion";
import { TokenStream } from 'antlr4ts/TokenStream'
import { Vocabulary } from 'antlr4ts/Vocabulary'
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl'
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'

import * as Utils from 'antlr4ts/misc/Utils'

import { LaCreXParserVisitor } from './LaCreXParserVisitor'

export class LaCreXParser extends Parser {
  public static readonly WhiteSpace = 1
  public static readonly VIRGULA = 2
  public static readonly PONTOEVIRGULA = 3
  public static readonly LPAREN = 4
  public static readonly RPAREN = 5
  public static readonly LCURLY = 6
  public static readonly RCURLY = 7
  public static readonly OPERADOR_ATRIBUICAO = 8
  public static readonly OPERADOR_CONDICIONAL = 9
  public static readonly SE = 10
  public static readonly SENAO = 11
  public static readonly FOREACH = 12
  public static readonly WHILE = 13
  public static readonly MAIN = 14
  public static readonly DEFINE_FUNCAO = 15
  public static readonly BOOLEANO = 16
  public static readonly PALAVRA = 17
  public static readonly NOME_VARIAVEL = 18
  public static readonly LETRA = 19
  public static readonly DIGITO = 20
  public static readonly DECREMENTO_OU_INCREMENTO = 21
  public static readonly TIPOS = 22
  public static readonly TIPAGEM = 23
  public static readonly NULAVEL = 24
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
  public static readonly RULE_valor = 13
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
    'valor',
  ]

  private static readonly _LITERAL_NAMES: Array<string | undefined> = [
    undefined,
    undefined,
    "','",
    "';'",
    "'('",
    "')'",
    "'{'",
    "'}'",
    "'\uD83D\uDC8B'",
    undefined,
    "'elu'",
    "'delu'",
    "'segue o fio'",
    "'comofas'",
    "'o codigo de milhoes'",
    "'qualquer coisa avisa'",
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    "'cancelado'",
  ]

  private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
    undefined,
    'WhiteSpace',
    'VIRGULA',
    'PONTOEVIRGULA',
    'LPAREN',
    'RPAREN',
    'LCURLY',
    'RCURLY',
    'OPERADOR_ATRIBUICAO',
    'OPERADOR_CONDICIONAL',
    'SE',
    'SENAO',
    'FOREACH',
    'WHILE',
    'MAIN',
    'DEFINE_FUNCAO',
    'BOOLEANO',
    'PALAVRA',
    'NOME_VARIAVEL',
    'LETRA',
    'DIGITO',
    'DECREMENTO_OU_INCREMENTO',
    'TIPOS',
    'TIPAGEM',
    'NULAVEL',
  ]

  public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(
    LaCreXParser._LITERAL_NAMES,
    LaCreXParser._SYMBOLIC_NAMES,
    [],
  )

  // @Override
  // @NotNull
  public get vocabulary(): Vocabulary {
    return LaCreXParser.VOCABULARY
  }
  // tslint:enable:no-trailing-whitespace

  // @Override
  public get grammarFileName(): string {
    return 'LaCreXParser.g4'
  }

  // @Override
  public get ruleNames(): string[] {
    return LaCreXParser.ruleNames
  }

  // @Override
  public get serializedATN(): string {
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
    this._interp = new ParserATNSimulator(LaCreXParser._ATN, this)
  }

  // @RuleVersion(0)
  public programa(): ProgramaContext {
    const _localctx: ProgramaContext = new ProgramaContext(
      this._ctx,
      this.state,
    )
    this.enterRule(_localctx, 0, LaCreXParser.RULE_programa)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)

      this.state = 31
      this._errHandler.sync(this)
      _la = this._input.LA(1)
      while (_la === LaCreXParser.TIPAGEM) {
        this.state = 28
        this.define_funcao()
        this.state = 33
        this._errHandler.sync(this)
        _la = this._input.LA(1)
      }
      this.state = 34
      this.main()
      this.state = 35
      this.match(LaCreXParser.EOF)
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }

  // @RuleVersion(0)
  public expressao(): ExpressaoContext {
    const _localctx: ExpressaoContext = new ExpressaoContext(
      this._ctx,
      this.state,
    )
    this.enterRule(_localctx, 2, LaCreXParser.RULE_expressao)
    try {
      this.enterOuterAlt(_localctx, 1)

      this.state = 45
      this._errHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this._input, 1, this._ctx)) {
        case 1:
          this.state = 37
          this.atribuicao()

          break

        case 2:
          this.state = 38
          this.condicional_se()

          break

        case 3:
          this.state = 39
          this.foreach()

          break

        case 4:
          this.state = 40
          this.define_funcao()

          break

        case 5:
          this.state = 41
          this.while()

          break

        case 6:
          this.state = 42
          this.operador_modificador()
          this.state = 43
          this.match(LaCreXParser.PONTOEVIRGULA)

          break
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }

  // @RuleVersion(0)
  public atribuicao(): AtribuicaoContext {
    const _localctx: AtribuicaoContext = new AtribuicaoContext(
      this._ctx,
      this.state,
    )
    this.enterRule(_localctx, 4, LaCreXParser.RULE_atribuicao)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)

      this.state = 47
      this.match(LaCreXParser.TIPAGEM)
      this.state = 48
      this.match(LaCreXParser.NOME_VARIAVEL)
      this.state = 53
      this._errHandler.sync(this)
      _la = this._input.LA(1)
      while (_la === LaCreXParser.VIRGULA) {
        this.state = 49
        this.match(LaCreXParser.VIRGULA)
        this.state = 50
        this.match(LaCreXParser.NOME_VARIAVEL)

        this.state = 55
        this._errHandler.sync(this)
        _la = this._input.LA(1)
      }
      this.state = 58
      this._errHandler.sync(this)
      _la = this._input.LA(1)
      if (_la === LaCreXParser.OPERADOR_ATRIBUICAO) {
        this.state = 56
        this.match(LaCreXParser.OPERADOR_ATRIBUICAO)
        this.state = 57
        this.valor()
      }

      this.state = 60
      this.match(LaCreXParser.PONTOEVIRGULA)
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }

  // @RuleVersion(0)
  public define_funcao(): Define_funcaoContext {
    const _localctx: Define_funcaoContext = new Define_funcaoContext(
      this._ctx,
      this.state,
    )
    this.enterRule(_localctx, 6, LaCreXParser.RULE_define_funcao)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 62
        this.match(LaCreXParser.TIPAGEM)
        this.state = 63
        this.match(LaCreXParser.DEFINE_FUNCAO)
        this.state = 64
        this.match(LaCreXParser.NOME_VARIAVEL)
        this.state = 65
        this.match(LaCreXParser.LPAREN)
        this.state = 67
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        if (_la === LaCreXParser.TIPAGEM) {
          {
            this.state = 66
            this.lista_argumentos()
          }
        }

        this.state = 69
        this.match(LaCreXParser.RPAREN)
        this.state = 70
        this.bloco_then()
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }

  // @RuleVersion(0)
  public main(): MainContext {
    const _localctx: MainContext = new MainContext(this._ctx, this.state)
    this.enterRule(_localctx, 8, LaCreXParser.RULE_main)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 72
        this.match(LaCreXParser.MAIN)
        this.state = 73
        this.match(LaCreXParser.LPAREN)
        this.state = 74
        this.match(LaCreXParser.RPAREN)
        this.state = 75
        this.bloco_then()
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }

  // @RuleVersion(0)
  public lista_argumentos(): Lista_argumentosContext {
    const _localctx: Lista_argumentosContext = new Lista_argumentosContext(
      this._ctx,
      this.state,
    )
    this.enterRule(_localctx, 10, LaCreXParser.RULE_lista_argumentos)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 77
        this.argumento()
        this.state = 82
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        while (_la === LaCreXParser.VIRGULA) {
          {
            {
              this.state = 78
              this.match(LaCreXParser.VIRGULA)
              this.state = 79
              this.argumento()
            }
          }
          this.state = 84
          this._errHandler.sync(this)
          _la = this._input.LA(1)
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }

  // @RuleVersion(0)
  public argumento(): ArgumentoContext {
    const _localctx: ArgumentoContext = new ArgumentoContext(
      this._ctx,
      this.state,
    )
    this.enterRule(_localctx, 12, LaCreXParser.RULE_argumento)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 85
        this.match(LaCreXParser.TIPAGEM)
        this.state = 86
        this.match(LaCreXParser.NOME_VARIAVEL)
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }

  // @RuleVersion(0)
  public bloco_then(): Bloco_thenContext {
    const _localctx: Bloco_thenContext = new Bloco_thenContext(
      this._ctx,
      this.state,
    )
    this.enterRule(_localctx, 14, LaCreXParser.RULE_bloco_then)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 88
        this.match(LaCreXParser.LCURLY)
        this.state = 92
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        while (
          (_la & ~0x1f) === 0 &&
          ((1 << _la) &
            ((1 << LaCreXParser.SE) |
              (1 << LaCreXParser.FOREACH) |
              (1 << LaCreXParser.WHILE) |
              (1 << LaCreXParser.NOME_VARIAVEL) |
              (1 << LaCreXParser.TIPAGEM))) !==
            0
        ) {
          {
            {
              this.state = 89
              this.expressao()
            }
          }
          this.state = 94
          this._errHandler.sync(this)
          _la = this._input.LA(1)
        }
        this.state = 95
        this.match(LaCreXParser.RCURLY)
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }

  // @RuleVersion(0)
  public condicional_se(): Condicional_seContext {
    const _localctx: Condicional_seContext = new Condicional_seContext(
      this._ctx,
      this.state,
    )
    this.enterRule(_localctx, 16, LaCreXParser.RULE_condicional_se)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 97
        this.match(LaCreXParser.SE)
        this.state = 98
        this.match(LaCreXParser.LPAREN)
        this.state = 99
        this.condicional()
        this.state = 100
        this.match(LaCreXParser.RPAREN)
        this.state = 101
        this.bloco_then()
        this.state = 117
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        if (_la === LaCreXParser.SENAO) {
          {
            this.state = 102
            this.match(LaCreXParser.SENAO)
            this.state = 107
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            if (_la === LaCreXParser.LPAREN) {
              {
                this.state = 103
                this.match(LaCreXParser.LPAREN)
                this.state = 104
                this.condicional()
                this.state = 105
                this.match(LaCreXParser.RPAREN)
              }
            }

            this.state = 109
            this.match(LaCreXParser.LCURLY)
            this.state = 113
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            while (
              (_la & ~0x1f) === 0 &&
              ((1 << _la) &
                ((1 << LaCreXParser.SE) |
                  (1 << LaCreXParser.FOREACH) |
                  (1 << LaCreXParser.WHILE) |
                  (1 << LaCreXParser.NOME_VARIAVEL) |
                  (1 << LaCreXParser.TIPAGEM))) !==
                0
            ) {
              {
                {
                  this.state = 110
                  this.expressao()
                }
              }
              this.state = 115
              this._errHandler.sync(this)
              _la = this._input.LA(1)
            }
            this.state = 116
            this.match(LaCreXParser.RCURLY)
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }

  // @RuleVersion(0)
  public condicional(): CondicionalContext {
    const _localctx: CondicionalContext = new CondicionalContext(
      this._ctx,
      this.state,
    )
    this.enterRule(_localctx, 18, LaCreXParser.RULE_condicional)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 119
        this.match(LaCreXParser.NOME_VARIAVEL)
        this.state = 120
        this.match(LaCreXParser.OPERADOR_CONDICIONAL)
        this.state = 121
        this.valor()
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }

  // @RuleVersion(0)
  public foreach(): ForeachContext {
    const _localctx: ForeachContext = new ForeachContext(this._ctx, this.state)
    this.enterRule(_localctx, 20, LaCreXParser.RULE_foreach)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 123
        this.match(LaCreXParser.FOREACH)
        this.state = 124
        this.match(LaCreXParser.LPAREN)
        this.state = 126
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        if (_la === LaCreXParser.TIPAGEM) {
          {
            this.state = 125
            this.atribuicao()
          }
        }

        this.state = 128
        this.condicional()
        this.state = 129
        this.match(LaCreXParser.PONTOEVIRGULA)
        this.state = 130
        this.operador_modificador()
        this.state = 131
        this.match(LaCreXParser.RPAREN)
        this.state = 132
        this.bloco_then()
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }

  // @RuleVersion(0)
  public while(): WhileContext {
    const _localctx: WhileContext = new WhileContext(this._ctx, this.state)
    this.enterRule(_localctx, 22, LaCreXParser.RULE_while)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 134
        this.match(LaCreXParser.WHILE)
        this.state = 135
        this.match(LaCreXParser.LPAREN)
        this.state = 136
        this.condicional()
        this.state = 137
        this.match(LaCreXParser.RPAREN)
        this.state = 138
        this.bloco_then()
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }

  // @RuleVersion(0)
  public operador_modificador(): Operador_modificadorContext {
    const _localctx: Operador_modificadorContext =
      new Operador_modificadorContext(this._ctx, this.state)
    this.enterRule(_localctx, 24, LaCreXParser.RULE_operador_modificador)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 140
        this.match(LaCreXParser.NOME_VARIAVEL)
        this.state = 141
        this.match(LaCreXParser.DECREMENTO_OU_INCREMENTO)
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }

  // @RuleVersion(0)
  public valor(): ValorContext {
    const _localctx: ValorContext = new ValorContext(this._ctx, this.state)
    this.enterRule(_localctx, 26, LaCreXParser.RULE_valor)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 152
        this._errHandler.sync(this)
        switch (this._input.LA(1)) {
          case LaCreXParser.PONTOEVIRGULA:
          case LaCreXParser.RPAREN:
          case LaCreXParser.DIGITO:
            {
              this.state = 146
              this._errHandler.sync(this)
              _la = this._input.LA(1)
              while (_la === LaCreXParser.DIGITO) {
                {
                  {
                    this.state = 143
                    this.match(LaCreXParser.DIGITO)
                  }
                }
                this.state = 148
                this._errHandler.sync(this)
                _la = this._input.LA(1)
              }
            }
            break
          case LaCreXParser.NULAVEL:
            {
              this.state = 149
              this.match(LaCreXParser.NULAVEL)
            }
            break
          case LaCreXParser.BOOLEANO:
            {
              this.state = 150
              this.match(LaCreXParser.BOOLEANO)
            }
            break
          case LaCreXParser.PALAVRA:
            {
              this.state = 151
              this.match(LaCreXParser.PALAVRA)
            }
            break
          default:
            throw new NoViableAltException(this)
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }

  public static readonly _serializedATN: string =
    '\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x1A\x9D\x04\x02' +
    '\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07' +
    '\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04' +
    '\x0E\t\x0E\x04\x0F\t\x0F\x03\x02\x07\x02 \n\x02\f\x02\x0E\x02#\v\x02\x03' +
    '\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03' +
    '\x03\x03\x03\x05\x030\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x07\x046\n' +
    '\x04\f\x04\x0E\x049\v\x04\x03\x04\x03\x04\x05\x04=\n\x04\x03\x04\x03\x04' +
    '\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05F\n\x05\x03\x05\x03\x05' +
    '\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07' +
    '\x07\x07S\n\x07\f\x07\x0E\x07V\v\x07\x03\b\x03\b\x03\b\x03\t\x03\t\x07' +
    '\t]\n\t\f\t\x0E\t`\v\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n' +
    '\x03\n\x03\n\x03\n\x03\n\x05\nn\n\n\x03\n\x03\n\x07\nr\n\n\f\n\x0E\nu' +
    '\v\n\x03\n\x05\nx\n\n\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x05\f' +
    '\x81\n\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03' +
    '\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x07\x0F\x93\n\x0F\f\x0F\x0E\x0F' +
    '\x96\v\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\x9B\n\x0F\x03\x0F\x02\x02\x02' +
    '\x10\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02' +
    '\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x02\x02\x02\xA1\x02!\x03\x02' +
    '\x02\x02\x04/\x03\x02\x02\x02\x061\x03\x02\x02\x02\b@\x03\x02\x02\x02' +
    '\nJ\x03\x02\x02\x02\fO\x03\x02\x02\x02\x0EW\x03\x02\x02\x02\x10Z\x03\x02' +
    '\x02\x02\x12c\x03\x02\x02\x02\x14y\x03\x02\x02\x02\x16}\x03\x02\x02\x02' +
    '\x18\x88\x03\x02\x02\x02\x1A\x8E\x03\x02\x02\x02\x1C\x9A\x03\x02\x02\x02' +
    '\x1E \x05\b\x05\x02\x1F\x1E\x03\x02\x02\x02 #\x03\x02\x02\x02!\x1F\x03' +
    '\x02\x02\x02!"\x03\x02\x02\x02"$\x03\x02\x02\x02#!\x03\x02\x02\x02$' +
    "%\x05\n\x06\x02%&\x07\x02\x02\x03&\x03\x03\x02\x02\x02'0\x05\x06\x04" +
    '\x02(0\x05\x12\n\x02)0\x05\x16\f\x02*0\x05\b\x05\x02+0\x05\x18\r\x02,' +
    "-\x05\x1A\x0E\x02-.\x07\x05\x02\x02.0\x03\x02\x02\x02/'\x03\x02\x02\x02" +
    '/(\x03\x02\x02\x02/)\x03\x02\x02\x02/*\x03\x02\x02\x02/+\x03\x02\x02\x02' +
    '/,\x03\x02\x02\x020\x05\x03\x02\x02\x0212\x07\x19\x02\x0227\x07\x14\x02' +
    '\x0234\x07\x04\x02\x0246\x07\x14\x02\x0253\x03\x02\x02\x0269\x03\x02\x02' +
    '\x0275\x03\x02\x02\x0278\x03\x02\x02\x028<\x03\x02\x02\x0297\x03\x02\x02' +
    '\x02:;\x07\n\x02\x02;=\x05\x1C\x0F\x02<:\x03\x02\x02\x02<=\x03\x02\x02' +
    '\x02=>\x03\x02\x02\x02>?\x07\x05\x02\x02?\x07\x03\x02\x02\x02@A\x07\x19' +
    '\x02\x02AB\x07\x11\x02\x02BC\x07\x14\x02\x02CE\x07\x06\x02\x02DF\x05\f' +
    '\x07\x02ED\x03\x02\x02\x02EF\x03\x02\x02\x02FG\x03\x02\x02\x02GH\x07\x07' +
    '\x02\x02HI\x05\x10\t\x02I\t\x03\x02\x02\x02JK\x07\x10\x02\x02KL\x07\x06' +
    '\x02\x02LM\x07\x07\x02\x02MN\x05\x10\t\x02N\v\x03\x02\x02\x02OT\x05\x0E' +
    '\b\x02PQ\x07\x04\x02\x02QS\x05\x0E\b\x02RP\x03\x02\x02\x02SV\x03\x02\x02' +
    '\x02TR\x03\x02\x02\x02TU\x03\x02\x02\x02U\r\x03\x02\x02\x02VT\x03\x02' +
    '\x02\x02WX\x07\x19\x02\x02XY\x07\x14\x02\x02Y\x0F\x03\x02\x02\x02Z^\x07' +
    '\b\x02\x02[]\x05\x04\x03\x02\\[\x03\x02\x02\x02]`\x03\x02\x02\x02^\\\x03' +
    '\x02\x02\x02^_\x03\x02\x02\x02_a\x03\x02\x02\x02`^\x03\x02\x02\x02ab\x07' +
    '\t\x02\x02b\x11\x03\x02\x02\x02cd\x07\f\x02\x02de\x07\x06\x02\x02ef\x05' +
    '\x14\v\x02fg\x07\x07\x02\x02gw\x05\x10\t\x02hm\x07\r\x02\x02ij\x07\x06' +
    '\x02\x02jk\x05\x14\v\x02kl\x07\x07\x02\x02ln\x03\x02\x02\x02mi\x03\x02' +
    '\x02\x02mn\x03\x02\x02\x02no\x03\x02\x02\x02os\x07\b\x02\x02pr\x05\x04' +
    '\x03\x02qp\x03\x02\x02\x02ru\x03\x02\x02\x02sq\x03\x02\x02\x02st\x03\x02' +
    '\x02\x02tv\x03\x02\x02\x02us\x03\x02\x02\x02vx\x07\t\x02\x02wh\x03\x02' +
    '\x02\x02wx\x03\x02\x02\x02x\x13\x03\x02\x02\x02yz\x07\x14\x02\x02z{\x07' +
    '\v\x02\x02{|\x05\x1C\x0F\x02|\x15\x03\x02\x02\x02}~\x07\x0E\x02\x02~\x80' +
    '\x07\x06\x02\x02\x7F\x81\x05\x06\x04\x02\x80\x7F\x03\x02\x02\x02\x80\x81' +
    '\x03\x02\x02\x02\x81\x82\x03\x02\x02\x02\x82\x83\x05\x14\v\x02\x83\x84' +
    '\x07\x05\x02\x02\x84\x85\x05\x1A\x0E\x02\x85\x86\x07\x07\x02\x02\x86\x87' +
    '\x05\x10\t\x02\x87\x17\x03\x02\x02\x02\x88\x89\x07\x0F\x02\x02\x89\x8A' +
    '\x07\x06\x02\x02\x8A\x8B\x05\x14\v\x02\x8B\x8C\x07\x07\x02\x02\x8C\x8D' +
    '\x05\x10\t\x02\x8D\x19\x03\x02\x02\x02\x8E\x8F\x07\x14\x02\x02\x8F\x90' +
    '\x07\x17\x02\x02\x90\x1B\x03\x02\x02\x02\x91\x93\x07\x16\x02\x02\x92\x91' +
    '\x03\x02\x02\x02\x93\x96\x03\x02\x02\x02\x94\x92\x03\x02\x02\x02\x94\x95' +
    '\x03\x02\x02\x02\x95\x9B\x03\x02\x02\x02\x96\x94\x03\x02\x02\x02\x97\x9B' +
    '\x07\x1A\x02\x02\x98\x9B\x07\x12\x02\x02\x99\x9B\x07\x13\x02\x02\x9A\x94' +
    '\x03\x02\x02\x02\x9A\x97\x03\x02\x02\x02\x9A\x98\x03\x02\x02\x02\x9A\x99' +
    '\x03\x02\x02\x02\x9B\x1D\x03\x02\x02\x02\x0F!/7<ET^msw\x80\x94\x9A'

  public static __ATN: ATN
  public static get _ATN(): ATN {
    if (!LaCreXParser.__ATN) {
      LaCreXParser.__ATN = new ATNDeserializer().deserialize(
        Utils.toCharArray(LaCreXParser._serializedATN),
      )
    }

    return LaCreXParser.__ATN
  }
}

export class ProgramaContext extends ParserRuleContext {
  public main(): MainContext {
    return this.getRuleContext(0, MainContext)
  }

  public EOF(): TerminalNode {
    return this.getToken(LaCreXParser.EOF, 0)
  }

  public define_funcao(): Define_funcaoContext[]
  public define_funcao(i: number): Define_funcaoContext
  public define_funcao(
    i?: number,
  ): Define_funcaoContext | Define_funcaoContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Define_funcaoContext)
    } else {
      return this.getRuleContext(i, Define_funcaoContext)
    }
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }

  // @Override
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
  public atribuicao(): AtribuicaoContext | undefined {
    return this.tryGetRuleContext(0, AtribuicaoContext)
  }

  public condicional_se(): Condicional_seContext | undefined {
    return this.tryGetRuleContext(0, Condicional_seContext)
  }

  public foreach(): ForeachContext | undefined {
    return this.tryGetRuleContext(0, ForeachContext)
  }

  public define_funcao(): Define_funcaoContext | undefined {
    return this.tryGetRuleContext(0, Define_funcaoContext)
  }

  public while(): WhileContext | undefined {
    return this.tryGetRuleContext(0, WhileContext)
  }

  public operador_modificador(): Operador_modificadorContext | undefined {
    return this.tryGetRuleContext(0, Operador_modificadorContext)
  }

  public PONTOEVIRGULA(): TerminalNode | undefined {
    return this.tryGetToken(LaCreXParser.PONTOEVIRGULA, 0)
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }

  // @Override
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
  public TIPAGEM(): TerminalNode {
    return this.getToken(LaCreXParser.TIPAGEM, 0)
  }

  public NOME_VARIAVEL(): TerminalNode[]
  public NOME_VARIAVEL(i: number): TerminalNode
  public NOME_VARIAVEL(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(LaCreXParser.NOME_VARIAVEL)
    } else {
      return this.getToken(LaCreXParser.NOME_VARIAVEL, i)
    }
  }

  public PONTOEVIRGULA(): TerminalNode {
    return this.getToken(LaCreXParser.PONTOEVIRGULA, 0)
  }

  public VIRGULA(): TerminalNode[]
  public VIRGULA(i: number): TerminalNode
  public VIRGULA(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(LaCreXParser.VIRGULA)
    } else {
      return this.getToken(LaCreXParser.VIRGULA, i)
    }
  }

  public OPERADOR_ATRIBUICAO(): TerminalNode | undefined {
    return this.tryGetToken(LaCreXParser.OPERADOR_ATRIBUICAO, 0)
  }

  public valor(): ValorContext | undefined {
    return this.tryGetRuleContext(0, ValorContext)
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }

  // @Override
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
  public TIPAGEM(): TerminalNode {
    return this.getToken(LaCreXParser.TIPAGEM, 0)
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
    return this.getRuleContext(0, Bloco_thenContext)
  }

  public lista_argumentos(): Lista_argumentosContext | undefined {
    return this.tryGetRuleContext(0, Lista_argumentosContext)
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }

  // @Override
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
    return this.getRuleContext(0, Bloco_thenContext)
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }

  // @Override
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
  public argumento(): ArgumentoContext[]
  public argumento(i: number): ArgumentoContext
  public argumento(i?: number): ArgumentoContext | ArgumentoContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ArgumentoContext)
    } else {
      return this.getRuleContext(i, ArgumentoContext)
    }
  }

  public VIRGULA(): TerminalNode[]
  public VIRGULA(i: number): TerminalNode
  public VIRGULA(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(LaCreXParser.VIRGULA)
    } else {
      return this.getToken(LaCreXParser.VIRGULA, i)
    }
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }

  // @Override
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
  public TIPAGEM(): TerminalNode {
    return this.getToken(LaCreXParser.TIPAGEM, 0)
  }

  public NOME_VARIAVEL(): TerminalNode {
    return this.getToken(LaCreXParser.NOME_VARIAVEL, 0)
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }

  // @Override
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
  public LCURLY(): TerminalNode {
    return this.getToken(LaCreXParser.LCURLY, 0)
  }

  public RCURLY(): TerminalNode {
    return this.getToken(LaCreXParser.RCURLY, 0)
  }

  public expressao(): ExpressaoContext[]
  public expressao(i: number): ExpressaoContext
  public expressao(i?: number): ExpressaoContext | ExpressaoContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExpressaoContext)
    } else {
      return this.getRuleContext(i, ExpressaoContext)
    }
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }

  // @Override
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
  public SE(): TerminalNode {
    return this.getToken(LaCreXParser.SE, 0)
  }

  public LPAREN(): TerminalNode[]
  public LPAREN(i: number): TerminalNode
  public LPAREN(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(LaCreXParser.LPAREN)
    } else {
      return this.getToken(LaCreXParser.LPAREN, i)
    }
  }

  public condicional(): CondicionalContext[]
  public condicional(i: number): CondicionalContext
  public condicional(i?: number): CondicionalContext | CondicionalContext[] {
    if (i === undefined) {
      return this.getRuleContexts(CondicionalContext)
    } else {
      return this.getRuleContext(i, CondicionalContext)
    }
  }

  public RPAREN(): TerminalNode[]
  public RPAREN(i: number): TerminalNode
  public RPAREN(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(LaCreXParser.RPAREN)
    } else {
      return this.getToken(LaCreXParser.RPAREN, i)
    }
  }

  public bloco_then(): Bloco_thenContext {
    return this.getRuleContext(0, Bloco_thenContext)
  }

  public SENAO(): TerminalNode | undefined {
    return this.tryGetToken(LaCreXParser.SENAO, 0)
  }

  public LCURLY(): TerminalNode | undefined {
    return this.tryGetToken(LaCreXParser.LCURLY, 0)
  }

  public RCURLY(): TerminalNode | undefined {
    return this.tryGetToken(LaCreXParser.RCURLY, 0)
  }

  public expressao(): ExpressaoContext[]
  public expressao(i: number): ExpressaoContext
  public expressao(i?: number): ExpressaoContext | ExpressaoContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExpressaoContext)
    } else {
      return this.getRuleContext(i, ExpressaoContext)
    }
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }

  // @Override
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
  public NOME_VARIAVEL(): TerminalNode {
    return this.getToken(LaCreXParser.NOME_VARIAVEL, 0)
  }

  public OPERADOR_CONDICIONAL(): TerminalNode {
    return this.getToken(LaCreXParser.OPERADOR_CONDICIONAL, 0)
  }

  public valor(): ValorContext {
    return this.getRuleContext(0, ValorContext)
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }

  // @Override
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
  public FOREACH(): TerminalNode {
    return this.getToken(LaCreXParser.FOREACH, 0)
  }

  public LPAREN(): TerminalNode {
    return this.getToken(LaCreXParser.LPAREN, 0)
  }

  public condicional(): CondicionalContext {
    return this.getRuleContext(0, CondicionalContext)
  }

  public PONTOEVIRGULA(): TerminalNode {
    return this.getToken(LaCreXParser.PONTOEVIRGULA, 0)
  }

  public operador_modificador(): Operador_modificadorContext {
    return this.getRuleContext(0, Operador_modificadorContext)
  }

  public RPAREN(): TerminalNode {
    return this.getToken(LaCreXParser.RPAREN, 0)
  }

  public bloco_then(): Bloco_thenContext {
    return this.getRuleContext(0, Bloco_thenContext)
  }

  public atribuicao(): AtribuicaoContext | undefined {
    return this.tryGetRuleContext(0, AtribuicaoContext)
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }

  // @Override
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
  public WHILE(): TerminalNode {
    return this.getToken(LaCreXParser.WHILE, 0)
  }

  public LPAREN(): TerminalNode {
    return this.getToken(LaCreXParser.LPAREN, 0)
  }

  public condicional(): CondicionalContext {
    return this.getRuleContext(0, CondicionalContext)
  }

  public RPAREN(): TerminalNode {
    return this.getToken(LaCreXParser.RPAREN, 0)
  }

  public bloco_then(): Bloco_thenContext {
    return this.getRuleContext(0, Bloco_thenContext)
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }

  // @Override
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
  public NOME_VARIAVEL(): TerminalNode {
    return this.getToken(LaCreXParser.NOME_VARIAVEL, 0)
  }

  public DECREMENTO_OU_INCREMENTO(): TerminalNode {
    return this.getToken(LaCreXParser.DECREMENTO_OU_INCREMENTO, 0)
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }

  // @Override
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

export class ValorContext extends ParserRuleContext {
  public NULAVEL(): TerminalNode | undefined {
    return this.tryGetToken(LaCreXParser.NULAVEL, 0)
  }

  public BOOLEANO(): TerminalNode | undefined {
    return this.tryGetToken(LaCreXParser.BOOLEANO, 0)
  }

  public PALAVRA(): TerminalNode | undefined {
    return this.tryGetToken(LaCreXParser.PALAVRA, 0)
  }

  public DIGITO(): TerminalNode[]
  public DIGITO(i: number): TerminalNode
  public DIGITO(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(LaCreXParser.DIGITO)
    } else {
      return this.getToken(LaCreXParser.DIGITO, i)
    }
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }

  // @Override
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
