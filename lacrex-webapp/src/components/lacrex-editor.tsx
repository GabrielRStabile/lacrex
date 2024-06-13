import { Editor, Monaco } from '@monaco-editor/react'
import { editor } from 'monaco-editor'
import { useEffect, useRef } from 'react'
import { useNavigationSystem } from '../contexts/navigation-system-context'
import { LaCreXTokensProvider } from '../utils/lacrex-token-provider'
import { validate } from '../utils/parser-facade'

export default function LaCreXEditor() {
  const { activeFile, saveFile } = useNavigationSystem()
  const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null)

  useEffect(() => {
    if (activeFile) {
      editorRef.current?.setValue(activeFile.content)
    } else {
      editorRef.current?.setValue('')
    }
  }, [activeFile])

  function handleChange(value: string) {
    saveFile(value)
  }

  function handleEditorWillMount(monaco: Monaco) {
    monaco.languages.register({
      id: 'lacrex',
    })

    const variableFg = 'ef4444'
    const functionFg = 'f97316'
    const typeFg = '06b6d4'
    const stringFg = 'ec4899'
    const booleanFg = 'ec4899'
    const numberFg = 'ec4899'
    const nullableFg = 'f59e0b'
    const conditionalFg = 'f59e0b'
    const loopFg = '22c55e'
    const punctuationFg = 'f4f4f5'
    const othersFg = 'f59e0b'
    const errorFg = 'ff0000'

    monaco.languages.setTokensProvider('lacrex', new LaCreXTokensProvider())

    monaco.editor.defineTheme('temaLacrador', {
      base: 'vs-dark',
      inherit: false,
      colors: {
        'editor.background': '#27272a',
        'editor.foreground': othersFg,
      },
      rules: [
        { token: 'nome_variavel.lacre', foreground: variableFg },
        { token: 'digito.lacre', foreground: numberFg },
        { token: 'booleano.lacre', foreground: booleanFg },
        { token: 'palavra.lacre', foreground: stringFg },
        { token: 'palavra.lacre', foreground: stringFg },
        { token: 'tipagem.lacre', foreground: typeFg },
        { token: 'tipos.lacre', foreground: typeFg },
        { token: 'nulavel.lacre', foreground: nullableFg },
        { token: 'define_funcao.lacre', foreground: functionFg },
        { token: 'main.lacre', foreground: functionFg },
        { token: 'se.lacre', foreground: conditionalFg },
        { token: 'senao.lacre', foreground: conditionalFg },
        { token: 'foreach.lacre', foreground: loopFg },
        { token: 'while.lacre', foreground: loopFg },
        { token: 'operador_condicional.lacre', foreground: punctuationFg },
        { token: 'lcurly.lacre', foreground: punctuationFg },
        { token: 'rcurly.lacre', foreground: punctuationFg },
        { token: 'lparen.lacre', foreground: punctuationFg },
        { token: 'rparen.lacre', foreground: punctuationFg },
        { token: 'pontoevirgula.lacre', foreground: punctuationFg },
        { token: 'virgula.lacre', foreground: punctuationFg },
        { token: 'unrecognized.lacre', foreground: errorFg },
      ],
    })
  }

  if (!activeFile) {
    return (
      <div className="flex items-center justify-center h-full text-zinc-200">
        <h3>Selecione ou crie um arquivo</h3>
      </div>
    )
  }

  return (
    <Editor
      defaultLanguage="lacrex"
      theme="temaLacrador"
      beforeMount={handleEditorWillMount}
      onChange={(value) => {
        handleChange(value ?? '')
      }}
      className="p-10"
      onMount={(editor, monaco) => {
        editorRef.current = editor
        editor.onDidChangeModelContent(() => {
          const code = editor.getValue()
          const syntaxErrors = validate(code)
          const monacoErrors = []
          for (const e of syntaxErrors) {
            monacoErrors.push({
              startLineNumber: e.startLine,
              startColumn: e.startCol,
              endLineNumber: e.endLine,
              endColumn: e.endCol,
              message: e.message,
              severity: monaco.MarkerSeverity.Error,
            })
          }
          const model = monaco.editor.getModels()[0]
          monaco.editor.setModelMarkers(model, 'owner', monacoErrors)
        })
      }}
    />
  )
}
