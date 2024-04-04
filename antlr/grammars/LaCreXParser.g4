parser grammar LaCreXParser;

options {
	tokenVocab = LaCreXLexer;
}

programa: expressao* EOF;
expressao: (
		atribuicao
		| condicional_se
		| foreach
		| define_funcao
		| while
	);

/* { [TIPO] NOME_VARIAVEL = VALOR; } */
/* { [TIPO] NOME_VARIAVEL; } */
/* { [TIPO] NOME_VARIAVEL, NOME_VARIAVEL2 = VALOR; } */
/* { [TIPO] NOME_VARIAVEL, NOME_VARIAVEL2; } */
atribuicao:
	TIPAGEM NOME_VARIAVEL (VIRGULA NOME_VARIAVEL)* (
		OPERADOR_ATRIBUICAO valor
	)? PONTOEVIRGULA;

define_funcao:
	TIPAGEM DEFINE_FUNCAO NOME_VARIAVEL LPAREN lista_argumentos? RPAREN bloco_then;

/* [TIPO] NOME_VARIAVEL, [TIPO2] NOME_VARIAVEL2 */
lista_argumentos: argumento (VIRGULA argumento)*;

/* { [TIPO] NOME_VARIAVEL } */
argumento: TIPAGEM NOME_VARIAVEL;

/* { QUALQUER EXPRESSAO } */
bloco_then: LCURLY expressao* RCURLY;

/* SE (CONDICIONAL) { BLOCO } */
/* SE (CONDICIONAL) { BLOCO } SENAO { BLOCO } */
/* SE (CONDICIONAL) { BLOCO } SENAO (CONDICIONAL) { BLOCO } */
condicional_se:
	SE LPAREN condicional RPAREN bloco_then (
		SENAO (LPAREN condicional RPAREN)? LCURLY expressao* RCURLY
	)?;

/* { NOME_VARIAVEL >= valor } */
condicional: NOME_VARIAVEL OPERADOR_CONDICIONAL valor;

/* { PARACADA (ATRIBUICAO; ) { BLOCO } } */
foreach:
	FOREACH LPAREN atribuicao? condicional PONTOEVIRGULA operador_modificador RPAREN bloco_then;

while: WHILE LPAREN condicional RPAREN bloco_then;

operador_modificador: NOME_VARIAVEL DECREMENTO_OU_INCREMENTO;

valor: ((DIGITO)* | NULAVEL | BOOLEANO | PALAVRA);