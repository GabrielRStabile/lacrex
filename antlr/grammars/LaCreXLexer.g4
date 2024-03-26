lexer grammar LaCreXLexer;

COMMA: ',';
PONTOEVIRGULA: ';';
ASPAS: '"'| '\'';
LPAREN: '(';
RPAREN: ')';
LCURLY: '{';
RCURLY: '}';

SE: 'elu';
SENAO: 'delu';
FOREACH: 'segue o fio';
WHILE: 'comofas';

BOOLEANO: 'sim' | 'nao';

NOMEVARIAVEL: [a-zA-Z_][a-zA-Z_0-9]*;
PALAVRA: [a-zA-Z0-9\s[:punct:]]+;
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
	| '<='
	| '>='
	| 'eh'
	| 'naoeh'
	| '&&'
	| '||';
