parser grammar LaCreXParser;

options {
	tokenVocab = LaCreXLexer;
}

programa: define_funcao* main EOF;
expressao: (
		atribuicao
		| condicional_se
		| foreach
		| define_funcao
		| while
		| (operador_modificador PONTOEVIRGULA)
		| funcao_matematica
	);

/* { [TIPO] NOME_VARIAVEL = VALOR; } */
/* { [TIPO] NOME_VARIAVEL; } */
/* { [TIPO] NOME_VARIAVEL, NOME_VARIAVEL2 = VALOR; } */
/* { [TIPO] NOME_VARIAVEL, NOME_VARIAVEL2; } */
atribuicao:
	(TIPAGEM)? NOME_VARIAVEL (VIRGULA NOME_VARIAVEL)* (
		OPERADOR_ATRIBUICAO valor
		| OPERADOR_CONDICIONAL NOME_VARIAVEL
	)? (PONTOEVIRGULA)?;

atribuicao_condicional:
	NOME_VARIAVEL
	| valor OPERADOR_ATRIBUICAO NOME_VARIAVEL valor
	| (PONTOEVIRGULA)?;

define_funcao:
	TIPAGEM DEFINE_FUNCAO NOME_VARIAVEL LPAREN lista_argumentos? RPAREN bloco_then;

main: MAIN LPAREN RPAREN bloco_then;

/* [TIPO] NOME_VARIAVEL, [TIPO2] NOME_VARIAVEL2 */
lista_argumentos: argumento (VIRGULA argumento)*;

/* { [TIPO] NOME_VARIAVEL } */
argumento: TIPAGEM NOME_VARIAVEL;

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

condicional_se2:
	SE LPAREN condicional RPAREN bloco_then (
		SENAO (LPAREN condicional RPAREN)?
	)?;

/* { NOME_VARIAVEL >= valor } */
/*condicional: NOME_VARIAVEL OPERADOR_CONDICIONAL valor;*/

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

valor: (
		(DIGITO)*
		| NULAVEL
		| BOOLEANO
		| PALAVRA
		| (NOME_VARIAVEL)*
	);

funcao_matematica: (DIGITO)* OPERADOR_ARITMETICO (DIGITO)*;
