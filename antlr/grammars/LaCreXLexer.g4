lexer grammar LaCreXLexer;

WhiteSpace: [ \t\r\n]+ -> skip;
VIRGULA: ',';
PONTOEVIRGULA: ';';
LPAREN: '(';
RPAREN: ')';
LCURLY: '{';
RCURLY: '}';

SE: 'elu';
SENAO: 'delu';
FOREACH: 'segue o fio';
WHILE: 'comofas';
MAIN: 'o codigo de milhoes';
DEFINE_FUNCAO: 'qualquer coisa avisa';
TIPOS: 'hetero' | 'bissexual' | 'mona' | 'old que';

BOOLEANO: 'sim' | 'nao';

PALAVRA: '"' ( ~[\\"\n\r] | '\\' [\\"])* '"';

NOME_VARIAVEL: [a-zA-Z_][a-zA-Z_0-9]*;
DIGITO: [0-9]+;

DECREMENTO_OU_INCREMENTO: 'seje menos' | 'seje mais';

NULAVEL: 'cancelado';
OPERADOR_ATRIBUICAO: '💋';

OPERADOR_CONDICIONAL:
	'>'
	| '<'
	| '='
	| '<='
	| '>='
	| '=='
	| 'eh'
	| 'naoeh'
	| '&&'
	| '||';

OPERADOR_ARITMETICO: '+' | '-' | '*' | '/' | '%';
