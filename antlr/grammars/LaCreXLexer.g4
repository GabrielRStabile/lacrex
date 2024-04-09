lexer grammar LaCreXLexer;

WhiteSpace: [ \t\r\n]+ -> skip;
VIRGULA: ',';
PONTOEVIRGULA: ';';
LPAREN: '(';
RPAREN: ')';
LCURLY: '{';
RCURLY: '}';

OPERADOR_ATRIBUICAO: '💋';
OPERADOR_CONDICIONAL:
	'>'
	| '<'
	| '<='
	| '>='
	| 'eh'
	| 'naoeh'
	| '&&'
	| '||';

SE: 'elu';
SENAO: 'delu';
FOREACH: 'segue o fio';
WHILE: 'comofas';
MAIN: 'o codigo de milhoes';
DEFINE_FUNCAO: 'qualquer coisa avisa';

BOOLEANO: 'sim' | 'nao';

PALAVRA: '"' ( ~[\\"\n\r] | '\\' [\\"])* '"';

NOME_VARIAVEL: [a-zA-Z_][a-zA-Z_0-9]*;

LETRA: [a-zA-Z];
DIGITO: [0-9]+;

DECREMENTO_OU_INCREMENTO: 'seje menos' | 'seje mais';

TIPOS: 'hetero' | 'bissexual' | 'mona' | 'old que';
TIPAGEM: '[' TIPOS ']';
NULAVEL: 'cancelado';
