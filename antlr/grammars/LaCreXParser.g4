parser grammar LaCreXParser;

options {
	tokenVocab = LaCreXLexer;
}

programa: define_funcao* main EOF;
expressao: (
		atribuicao
		| condicional_se
		| foreach
		| while
		| (operador_modificador)
		| funcao_matematica
		| atribuicao_ou_operador_modificador
	);

/* { [TIPO] NOME_VARIAVEL = VALOR; } */
/* { [TIPO] NOME_VARIAVEL; } */
/* { [TIPO] NOME_VARIAVEL, NOME_VARIAVEL2 = VALOR; } */
/* { [TIPO] NOME_VARIAVEL, NOME_VARIAVEL2; } */
atribuicao:
	TIPOS? NOME_VARIAVEL (VIRGULA NOME_VARIAVEL)* (
		OPERADOR_ATRIBUICAO valor
		| OPERADOR_CONDICIONAL NOME_VARIAVEL
		| OPERADOR_ATRIBUICAO valor
		| OPERADOR_CONDICIONAL
		| NOME_VARIAVEL
		| OPERADOR_ATRIBUICAO valor
		| NOME_VARIAVEL
	)? (PONTOEVIRGULA);

define_funcao:
	TIPOS DEFINE_FUNCAO NOME_VARIAVEL LPAREN lista_argumentos? RPAREN bloco_then;

main: MAIN LPAREN RPAREN bloco_then;

/* [TIPO] NOME_VARIAVEL, [TIPO2] NOME_VARIAVEL2 */
lista_argumentos: argumento (PONTOEVIRGULA argumento)*;

/* { [TIPO] NOME_VARIAVEL } */
argumento: TIPOS NOME_VARIAVEL;

/* { QUALQUER EXPRESSAO } */
bloco_then: LCURLY expressao* RCURLY;

/* SE (CONDICIONAL) { BLOCO } */
/* SE (CONDICIONAL) { BLOCO } SENAO { BLOCO } */
/* SE (CONDICIONAL) { BLOCO } SENAO (CONDICIONAL) { BLOCO }
 
 condicional_se: SE LPAREN condicional RPAREN bloco_then ( SENAO (LPAREN condicional RPAREN)? LCURLY
 expressao* RCURLY )?;
 */
condicional_se:
	SE LPAREN condicional RPAREN bloco_then (
		SENAO (LPAREN condicional RPAREN bloco_then | bloco_then)
	)?;

/* Modificado para permitir condicional encadeada { a > b > c } */
condicional:
	(
		NOME_VARIAVEL
		| OPERADOR_CONDICIONAL
		| OPERADOR_ATRIBUICAO NOME_VARIAVEL
		| DIGITO OPERADOR_CONDICIONAL NOME_VARIAVEL
		| DIGITO
	)+;

/*condicao:
 NOME_VARIAVEL | valor;
 */

/* { PARACADA (ATRIBUICAO; ) { BLOCO } } */
foreach:
	FOREACH LPAREN atribuicao? condicional PONTOEVIRGULA operador_modificador RPAREN bloco_then;

while: WHILE LPAREN condicional RPAREN bloco_then;

operador_modificador: NOME_VARIAVEL DECREMENTO_OU_INCREMENTO;

atribuicao_ou_operador_modificador:
	atribuicao
	| operador_modificador;
valor: (
		(DIGITO)*
		| NULAVEL
		| BOOLEANO
		| PALAVRA
		| (NOME_VARIAVEL)*
	);

funcao_matematica: (DIGITO)* OPERADOR_ARITMETICO (DIGITO)*;