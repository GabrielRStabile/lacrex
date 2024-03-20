parser grammar LaCreXParser;

options {
	tokenVocab = LaCreXLexer;
}

programa: expressao* EOF;
expressao: (atribuicao | condicional_se | foreach);

atribuicao:
	TIPAGEM NOMEVARIAVEL OPERADORATRIBUICAO valor PONTOEVIRGULA;

/* { QUALQUER COISA } */
bloco_then: LCURLY expressao* RCURLY;

condicional_se:
	SE LPAREN condicional RPAREN bloco_then (
		SENAO (LPAREN condicional RPAREN)? LCURLY expressao* RCURLY
	)?;

condicional: NOMEVARIAVEL OPERADORCONDICIONAL valor;

foreach:
	FOREACH LPAREN atribuicao? condicional PONTOEVIRGULA operadorModificador RPAREN bloco_then;

operadorModificador: NOMEVARIAVEL DECREMENTOOUINCREMENTO;

valor: ((LETRA | DIGITO)* | NULAVEL | BOOLEANO);