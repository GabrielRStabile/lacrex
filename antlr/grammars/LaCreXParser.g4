parser grammar LaCreXParser;

options {
	tokenVocab = LaCreXLexer;
}

programa: expressao* EOF;
expressao: (atribuicao | condicional_se | foreach | while);

atribuicao:
	TIPAGEM NOMEVARIAVEL OPERADOR_ATRIBUICAO valor PONTOEVIRGULA;

/* { QUALQUER COISA } */
bloco_then: LCURLY expressao* RCURLY;

condicional_se:
	SE LPAREN condicional RPAREN bloco_then (
		SENAO (LPAREN condicional RPAREN)? LCURLY expressao* RCURLY
	)?;

condicional: NOMEVARIAVEL OPERADOR_CONDICIONAL valor;

foreach:
	FOREACH LPAREN atribuicao? condicional PONTOEVIRGULA operadorModificador RPAREN bloco_then;

operadorModificador: NOMEVARIAVEL DECREMENTO_OU_INCREMENTO;

valor: ((LETRA | DIGITO)* | NULAVEL | BOOLEANO | string);

string: ASPAS PALAVRA ASPAS;

while:
	WHILE LPAREN condicional RPAREN bloco_then;
