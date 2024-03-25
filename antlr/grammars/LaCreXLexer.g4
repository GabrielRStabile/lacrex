lexer grammar LaCreXLexer;

WhiteSpace: [ \t\r\n]+ -> skip;
COMMA: ',';
PONTOEVIRGULA: ';';
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

LETRA: [a-zA-Z];
DIGITO: [0-9]+;

DECREMENTOOUINCREMENTO: 'seje menos' | '++';

TIPOS: 'hetero' | 'bissexual' | 'mona' | 'old que';
TIPAGEM: '[' TIPOS ']';
NULAVEL: 'cancelado';

OPERADORATRIBUICAO: '💋';
OPERADORCONDICIONAL:
	'>'
	| '<'
	| '<='
	| '>='
	| 'eh'
	| 'naoeh'
	| '&&'
	| '||';
