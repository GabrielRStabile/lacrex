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
import { Token } from 'antlr4ts/Token'
import { TokenStream } from 'antlr4ts/TokenStream'
import { Vocabulary } from 'antlr4ts/Vocabulary'
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl'
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'

import * as Utils from 'antlr4ts/misc/Utils'

import { LaCreXParserVisitor } from './LaCreXParserVisitor'

export class LaCreXParser extends Parser {
  public static readonly WhiteSpace = 1
  public static readonly COMMA = 2
  public static readonly PONTOEVIRGULA = 3
  public static readonly LPAREN = 4
  public static readonly RPAREN = 5
  public static readonly LCURLY = 6
  public static readonly RCURLY = 7
  public static readonly SE = 8
  public static readonly SENAO = 9
  public static readonly FOREACH = 10
  public static readonly WHILE = 11
  public static readonly BOOLEANO = 12
  public static readonly NOMEVARIAVEL = 13
  public static readonly LETRA = 14
  public static readonly DIGITO = 15
  public static readonly DECREMENTOOUINCREMENTO = 16
  public static readonly TIPOS = 17
  public static readonly TIPAGEM = 18
  public static readonly NULAVEL = 19
  public static readonly OPERADORATRIBUICAO = 20
  public static readonly OPERADORCONDICIONAL = 21
  public static readonly RULE_programa = 0
  public static readonly RULE_expressao = 1
  public static readonly RULE_atribuicao = 2
  public static readonly RULE_bloco_then = 3
  public static readonly RULE_condicional_se = 4
  public static readonly RULE_condicional = 5
  public static readonly RULE_foreach = 6
  public static readonly RULE_operadorModificador = 7
  public static readonly RULE_valor = 8
  // tslint:disable:no-trailing-whitespace
  public static readonly ruleNames: string[] = [
    'programa',
    'expressao',
    'atribuicao',
    'bloco_then',
    'condicional_se',
    'condicional',
    'foreach',
    'operadorModificador',
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
    "'elu'",
    "'delu'",
    "'segue o fio'",
    "'comofas'",
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    "'cancelado'",
    "'\uD83D\uDC8B'",
  ]

  private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
    undefined,
    'WhiteSpace',
    'COMMA',
    'PONTOEVIRGULA',
    'LPAREN',
    'RPAREN',
    'LCURLY',
    'RCURLY',
    'SE',
    'SENAO',
    'FOREACH',
    'WHILE',
    'BOOLEANO',
    'NOMEVARIAVEL',
    'LETRA',
    'DIGITO',
    'DECREMENTOOUINCREMENTO',
    'TIPOS',
    'TIPAGEM',
    'NULAVEL',
    'OPERADORATRIBUICAO',
    'OPERADORCONDICIONAL',
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
      {
        this.state = 21
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        while (
          (_la & ~0x1f) === 0 &&
          ((1 << _la) &
            ((1 << LaCreXParser.SE) |
              (1 << LaCreXParser.FOREACH) |
              (1 << LaCreXParser.TIPAGEM))) !==
            0
        ) {
          {
            {
              this.state = 18
              this.expressao()
            }
          }
          this.state = 23
          this._errHandler.sync(this)
          _la = this._input.LA(1)
        }
        this.state = 24
        this.match(LaCreXParser.EOF)
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
  public expressao(): ExpressaoContext {
    const _localctx: ExpressaoContext = new ExpressaoContext(
      this._ctx,
      this.state,
    )
    this.enterRule(_localctx, 2, LaCreXParser.RULE_expressao)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 29
        this._errHandler.sync(this)
        switch (this._input.LA(1)) {
          case LaCreXParser.TIPAGEM:
            {
              this.state = 26
              this.atribuicao()
            }
            break
          case LaCreXParser.SE:
            {
              this.state = 27
              this.condicional_se()
            }
            break
          case LaCreXParser.FOREACH:
            {
              this.state = 28
              this.foreach()
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

  // @RuleVersion(0)
  public atribuicao(): AtribuicaoContext {
    const _localctx: AtribuicaoContext = new AtribuicaoContext(
      this._ctx,
      this.state,
    )
    this.enterRule(_localctx, 4, LaCreXParser.RULE_atribuicao)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 31
        this.match(LaCreXParser.TIPAGEM)
        this.state = 32
        this.match(LaCreXParser.NOMEVARIAVEL)
        this.state = 33
        this.match(LaCreXParser.OPERADORATRIBUICAO)
        this.state = 34
        this.valor()
        this.state = 35
        this.match(LaCreXParser.PONTOEVIRGULA)
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
    this.enterRule(_localctx, 6, LaCreXParser.RULE_bloco_then)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 37
        this.match(LaCreXParser.LCURLY)
        this.state = 41
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        while (
          (_la & ~0x1f) === 0 &&
          ((1 << _la) &
            ((1 << LaCreXParser.SE) |
              (1 << LaCreXParser.FOREACH) |
              (1 << LaCreXParser.TIPAGEM))) !==
            0
        ) {
          {
            {
              this.state = 38
              this.expressao()
            }
          }
          this.state = 43
          this._errHandler.sync(this)
          _la = this._input.LA(1)
        }
        this.state = 44
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
    this.enterRule(_localctx, 8, LaCreXParser.RULE_condicional_se)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 46
        this.match(LaCreXParser.SE)
        this.state = 47
        this.match(LaCreXParser.LPAREN)
        this.state = 48
        this.condicional()
        this.state = 49
        this.match(LaCreXParser.RPAREN)
        this.state = 50
        this.bloco_then()
        this.state = 66
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        if (_la === LaCreXParser.SENAO) {
          {
            this.state = 51
            this.match(LaCreXParser.SENAO)
            this.state = 56
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            if (_la === LaCreXParser.LPAREN) {
              {
                this.state = 52
                this.match(LaCreXParser.LPAREN)
                this.state = 53
                this.condicional()
                this.state = 54
                this.match(LaCreXParser.RPAREN)
              }
            }

            this.state = 58
            this.match(LaCreXParser.LCURLY)
            this.state = 62
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            while (
              (_la & ~0x1f) === 0 &&
              ((1 << _la) &
                ((1 << LaCreXParser.SE) |
                  (1 << LaCreXParser.FOREACH) |
                  (1 << LaCreXParser.TIPAGEM))) !==
                0
            ) {
              {
                {
                  this.state = 59
                  this.expressao()
                }
              }
              this.state = 64
              this._errHandler.sync(this)
              _la = this._input.LA(1)
            }
            this.state = 65
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
    this.enterRule(_localctx, 10, LaCreXParser.RULE_condicional)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 68
        this.match(LaCreXParser.NOMEVARIAVEL)
        this.state = 69
        this.match(LaCreXParser.OPERADORCONDICIONAL)
        this.state = 70
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
    this.enterRule(_localctx, 12, LaCreXParser.RULE_foreach)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 72
        this.match(LaCreXParser.FOREACH)
        this.state = 73
        this.match(LaCreXParser.LPAREN)
        this.state = 75
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        if (_la === LaCreXParser.TIPAGEM) {
          {
            this.state = 74
            this.atribuicao()
          }
        }

        this.state = 77
        this.condicional()
        this.state = 78
        this.match(LaCreXParser.PONTOEVIRGULA)
        this.state = 79
        this.operadorModificador()
        this.state = 80
        this.match(LaCreXParser.RPAREN)
        this.state = 81
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
  public operadorModificador(): OperadorModificadorContext {
    const _localctx: OperadorModificadorContext =
      new OperadorModificadorContext(this._ctx, this.state)
    this.enterRule(_localctx, 14, LaCreXParser.RULE_operadorModificador)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 83
        this.match(LaCreXParser.NOMEVARIAVEL)
        this.state = 84
        this.match(LaCreXParser.DECREMENTOOUINCREMENTO)
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
    this.enterRule(_localctx, 16, LaCreXParser.RULE_valor)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 94
        this._errHandler.sync(this)
        switch (this._input.LA(1)) {
          case LaCreXParser.PONTOEVIRGULA:
          case LaCreXParser.RPAREN:
          case LaCreXParser.LETRA:
          case LaCreXParser.DIGITO:
            {
              this.state = 89
              this._errHandler.sync(this)
              _la = this._input.LA(1)
              while (
                _la === LaCreXParser.LETRA ||
                _la === LaCreXParser.DIGITO
              ) {
                {
                  {
                    this.state = 86
                    _la = this._input.LA(1)
                    if (
                      !(
                        _la === LaCreXParser.LETRA ||
                        _la === LaCreXParser.DIGITO
                      )
                    ) {
                      this._errHandler.recoverInline(this)
                    } else {
                      if (this._input.LA(1) === Token.EOF) {
                        this.matchedEOF = true
                      }

                      this._errHandler.reportMatch(this)
                      this.consume()
                    }
                  }
                }
                this.state = 91
                this._errHandler.sync(this)
                _la = this._input.LA(1)
              }
            }
            break
          case LaCreXParser.NULAVEL:
            {
              this.state = 92
              this.match(LaCreXParser.NULAVEL)
            }
            break
          case LaCreXParser.BOOLEANO:
            {
              this.state = 93
              this.match(LaCreXParser.BOOLEANO)
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
    '\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x17c\x04\x02' +
    '\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07' +
    '\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x03\x02\x07\x02\x16\n\x02\f\x02\x0E' +
    '\x02\x19\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x05\x03 \n\x03' +
    '\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x07\x05' +
    '*\n\x05\f\x05\x0E\x05-\v\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03' +
    '\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06;\n\x06\x03' +
    '\x06\x03\x06\x07\x06?\n\x06\f\x06\x0E\x06B\v\x06\x03\x06\x05\x06E\n\x06' +
    '\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x05\bN\n\b\x03\b\x03' +
    '\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\n\x07\nZ\n\n\f\n\x0E' +
    '\n]\v\n\x03\n\x03\n\x05\na\n\n\x03\n\x02\x02\x02\v\x02\x02\x04\x02\x06' +
    '\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x02\x03\x03\x02\x10\x11' +
    '\x02d\x02\x17\x03\x02\x02\x02\x04\x1F\x03\x02\x02\x02\x06!\x03\x02\x02' +
    "\x02\b'\x03\x02\x02\x02\n0\x03\x02\x02\x02\fF\x03\x02\x02\x02\x0EJ\x03" +
    '\x02\x02\x02\x10U\x03\x02\x02\x02\x12`\x03\x02\x02\x02\x14\x16\x05\x04' +
    '\x03\x02\x15\x14\x03\x02\x02\x02\x16\x19\x03\x02\x02\x02\x17\x15\x03\x02' +
    '\x02\x02\x17\x18\x03\x02\x02\x02\x18\x1A\x03\x02\x02\x02\x19\x17\x03\x02' +
    '\x02\x02\x1A\x1B\x07\x02\x02\x03\x1B\x03\x03\x02\x02\x02\x1C \x05\x06' +
    '\x04\x02\x1D \x05\n\x06\x02\x1E \x05\x0E\b\x02\x1F\x1C\x03\x02\x02\x02' +
    '\x1F\x1D\x03\x02\x02\x02\x1F\x1E\x03\x02\x02\x02 \x05\x03\x02\x02\x02' +
    '!"\x07\x14\x02\x02"#\x07\x0F\x02\x02#$\x07\x16\x02\x02$%\x05\x12\n\x02' +
    "%&\x07\x05\x02\x02&\x07\x03\x02\x02\x02'+\x07\b\x02\x02(*\x05\x04\x03" +
    '\x02)(\x03\x02\x02\x02*-\x03\x02\x02\x02+)\x03\x02\x02\x02+,\x03\x02\x02' +
    '\x02,.\x03\x02\x02\x02-+\x03\x02\x02\x02./\x07\t\x02\x02/\t\x03\x02\x02' +
    '\x0201\x07\n\x02\x0212\x07\x06\x02\x0223\x05\f\x07\x0234\x07\x07\x02\x02' +
    '4D\x05\b\x05\x025:\x07\v\x02\x0267\x07\x06\x02\x0278\x05\f\x07\x0289\x07' +
    '\x07\x02\x029;\x03\x02\x02\x02:6\x03\x02\x02\x02:;\x03\x02\x02\x02;<\x03' +
    '\x02\x02\x02<@\x07\b\x02\x02=?\x05\x04\x03\x02>=\x03\x02\x02\x02?B\x03' +
    '\x02\x02\x02@>\x03\x02\x02\x02@A\x03\x02\x02\x02AC\x03\x02\x02\x02B@\x03' +
    '\x02\x02\x02CE\x07\t\x02\x02D5\x03\x02\x02\x02DE\x03\x02\x02\x02E\v\x03' +
    '\x02\x02\x02FG\x07\x0F\x02\x02GH\x07\x17\x02\x02HI\x05\x12\n\x02I\r\x03' +
    '\x02\x02\x02JK\x07\f\x02\x02KM\x07\x06\x02\x02LN\x05\x06\x04\x02ML\x03' +
    '\x02\x02\x02MN\x03\x02\x02\x02NO\x03\x02\x02\x02OP\x05\f\x07\x02PQ\x07' +
    '\x05\x02\x02QR\x05\x10\t\x02RS\x07\x07\x02\x02ST\x05\b\x05\x02T\x0F\x03' +
    '\x02\x02\x02UV\x07\x0F\x02\x02VW\x07\x12\x02\x02W\x11\x03\x02\x02\x02' +
    'XZ\t\x02\x02\x02YX\x03\x02\x02\x02Z]\x03\x02\x02\x02[Y\x03\x02\x02\x02' +
    '[\\\x03\x02\x02\x02\\a\x03\x02\x02\x02][\x03\x02\x02\x02^a\x07\x15\x02' +
    '\x02_a\x07\x0E\x02\x02`[\x03\x02\x02\x02`^\x03\x02\x02\x02`_\x03\x02\x02' +
    '\x02a\x13\x03\x02\x02\x02\v\x17\x1F+:@DM[`'

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
  public EOF(): TerminalNode {
    return this.getToken(LaCreXParser.EOF, 0)
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

  public NOMEVARIAVEL(): TerminalNode {
    return this.getToken(LaCreXParser.NOMEVARIAVEL, 0)
  }

  public OPERADORATRIBUICAO(): TerminalNode {
    return this.getToken(LaCreXParser.OPERADORATRIBUICAO, 0)
  }

  public valor(): ValorContext {
    return this.getRuleContext(0, ValorContext)
  }

  public PONTOEVIRGULA(): TerminalNode {
    return this.getToken(LaCreXParser.PONTOEVIRGULA, 0)
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
  public NOMEVARIAVEL(): TerminalNode {
    return this.getToken(LaCreXParser.NOMEVARIAVEL, 0)
  }

  public OPERADORCONDICIONAL(): TerminalNode {
    return this.getToken(LaCreXParser.OPERADORCONDICIONAL, 0)
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

  public operadorModificador(): OperadorModificadorContext {
    return this.getRuleContext(0, OperadorModificadorContext)
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

export class OperadorModificadorContext extends ParserRuleContext {
  public NOMEVARIAVEL(): TerminalNode {
    return this.getToken(LaCreXParser.NOMEVARIAVEL, 0)
  }

  public DECREMENTOOUINCREMENTO(): TerminalNode {
    return this.getToken(LaCreXParser.DECREMENTOOUINCREMENTO, 0)
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }

  // @Override
  public get ruleIndex(): number {
    return LaCreXParser.RULE_operadorModificador
  }

  // @Override
  public accept<Result>(visitor: LaCreXParserVisitor<Result>): Result {
    if (visitor.visitOperadorModificador) {
      return visitor.visitOperadorModificador(this)
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

  public LETRA(): TerminalNode[]
  public LETRA(i: number): TerminalNode
  public LETRA(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(LaCreXParser.LETRA)
    } else {
      return this.getToken(LaCreXParser.LETRA, i)
    }
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
