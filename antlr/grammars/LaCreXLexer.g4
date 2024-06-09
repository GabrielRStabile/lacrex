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
DEFINE_FUNCAO: 'qualquer coisa avisa';

BOOLEANO: 'sim' | 'nao';

PALAVRA: '"' ( ~[\\"\n\r] | '\\' [\\"])* '"';

NOME_VARIAVEL: [a-zA-Z_][a-zA-Z_0-9]*;

LETRA: [a-zA-Z];
DIGITO: [0-9]+;

DECREMENTO_OU_INCREMENTO: 'seje menos' | '++';

TIPOS: 'hetero' | 'bissexual' | 'mona' | 'old que';
TIPAGEM: '[' TIPOS ']';
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

OPERADOR_ARITMETICO:
	'+'
	| '-'
	| '*'
	| '/'
	| '%';



