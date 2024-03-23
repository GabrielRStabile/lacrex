// Definição dos tipos de erro genéricos
enum ErrorCode {
    SyntaxError = "Erro de Sintaxe",
    SemanticError = "Erro Semântico",
    CompilationError = "Erro de Compilação",
    RuntimeError = "Erro de Execução"
}

// Classe de erro genérico
class LacrexError extends Error {
    constructor(message: string, public code: ErrorCode) {
        super(message);
        this.name = "LacrexError";
    }
}

// Função para lançar erros de sintaxe
function syntaxError(message: string): never {
    throw new LacrexError(message, ErrorCode.SyntaxError);
}

// Função para lançar erros semânticos
function semanticError(message: string): never {
    throw new LacrexError(message, ErrorCode.SemanticError);
}

// Função para lançar erros de compilação
function compilationError(message: string): never {
    throw new LacrexError(message, ErrorCode.CompilationError);
}

// Função para lançar erros de execução
function runtimeError(message: string): never {
    throw new LacrexError(message, ErrorCode.RuntimeError);
}

// Exemplo de uso das funções de lançamento de erros
try {
    // Simulação de erro de sintaxe
    syntaxError("Erro de sintaxe: token inválido encontrado.");
} catch (error) {
    if (error instanceof LacrexError) {
        console.error(`${error.code}: ${error.message}`);
    } else {
        console.error("Erro desconhecido:", error);
    }
}
