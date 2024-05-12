// Generated from antlr/grammars/LaCreXParser.g4 by ANTLR 4.9.0-SNAPSHOT

import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor'

import {
	ArgumentoContext,
	AtribuicaoContext,
	Bloco_thenContext,
	CondicionalContext,
	Condicional_seContext,
	Define_funcaoContext,
	ExpressaoContext,
	ForeachContext,
	Lista_argumentosContext,
	MainContext,
	Operador_modificadorContext,
	ProgramaContext,
	ValorContext,
	WhileContext,
} from './LaCreXParser'

/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `LaCreXParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface LaCreXParserVisitor<Result> extends ParseTreeVisitor<Result> {
  /**
   * Visit a parse tree produced by `LaCreXParser.programa`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPrograma?: (ctx: ProgramaContext) => Result

  /**
   * Visit a parse tree produced by `LaCreXParser.expressao`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExpressao?: (ctx: ExpressaoContext) => Result

  /**
   * Visit a parse tree produced by `LaCreXParser.atribuicao`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAtribuicao?: (ctx: AtribuicaoContext) => Result

  /**
   * Visit a parse tree produced by `LaCreXParser.define_funcao`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDefine_funcao?: (ctx: Define_funcaoContext) => Result

  /**
   * Visit a parse tree produced by `LaCreXParser.main`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitMain?: (ctx: MainContext) => Result

  /**
   * Visit a parse tree produced by `LaCreXParser.lista_argumentos`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitLista_argumentos?: (ctx: Lista_argumentosContext) => Result

  /**
   * Visit a parse tree produced by `LaCreXParser.argumento`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitArgumento?: (ctx: ArgumentoContext) => Result

  /**
   * Visit a parse tree produced by `LaCreXParser.bloco_then`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitBloco_then?: (ctx: Bloco_thenContext) => Result

  /**
   * Visit a parse tree produced by `LaCreXParser.condicional_se`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCondicional_se?: (ctx: Condicional_seContext) => Result

  /**
   * Visit a parse tree produced by `LaCreXParser.condicional`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCondicional?: (ctx: CondicionalContext) => Result

  /**
   * Visit a parse tree produced by `LaCreXParser.foreach`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitForeach?: (ctx: ForeachContext) => Result

  /**
   * Visit a parse tree produced by `LaCreXParser.while`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitWhile?: (ctx: WhileContext) => Result

  /**
   * Visit a parse tree produced by `LaCreXParser.operador_modificador`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitOperador_modificador?: (ctx: Operador_modificadorContext) => Result

  /**
   * Visit a parse tree produced by `LaCreXParser.valor`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitValor?: (ctx: ValorContext) => Result
}
