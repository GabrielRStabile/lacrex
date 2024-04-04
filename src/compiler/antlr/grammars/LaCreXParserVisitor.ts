// Generated from antlr/grammars/LaCreXParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ProgramaContext } from "./LaCreXParser";
import { ExpressaoContext } from "./LaCreXParser";
import { AtribuicaoContext } from "./LaCreXParser";
import { Bloco_thenContext } from "./LaCreXParser";
import { Condicional_seContext } from "./LaCreXParser";
import { CondicionalContext } from "./LaCreXParser";
import { ForeachContext } from "./LaCreXParser";
import { OperadorModificadorContext } from "./LaCreXParser";
import { ValorContext } from "./LaCreXParser";


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
	visitPrograma?: (ctx: ProgramaContext) => Result;

	/**
	 * Visit a parse tree produced by `LaCreXParser.expressao`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressao?: (ctx: ExpressaoContext) => Result;

	/**
	 * Visit a parse tree produced by `LaCreXParser.atribuicao`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtribuicao?: (ctx: AtribuicaoContext) => Result;

	/**
	 * Visit a parse tree produced by `LaCreXParser.bloco_then`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBloco_then?: (ctx: Bloco_thenContext) => Result;

	/**
	 * Visit a parse tree produced by `LaCreXParser.condicional_se`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCondicional_se?: (ctx: Condicional_seContext) => Result;

	/**
	 * Visit a parse tree produced by `LaCreXParser.condicional`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCondicional?: (ctx: CondicionalContext) => Result;

	/**
	 * Visit a parse tree produced by `LaCreXParser.foreach`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForeach?: (ctx: ForeachContext) => Result;

	/**
	 * Visit a parse tree produced by `LaCreXParser.operadorModificador`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperadorModificador?: (ctx: OperadorModificadorContext) => Result;

	/**
	 * Visit a parse tree produced by `LaCreXParser.valor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValor?: (ctx: ValorContext) => Result;
}

