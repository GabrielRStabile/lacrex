import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable'
function App() {
  return (
    <>
      <main className="h-screen p-4">
        <ResizablePanelGroup
          direction="horizontal"
          className="max-w rounded-lg border"
        >
          <ResizablePanel defaultSize={50} maxSize={40} minSize={20}>
            <div className="flex h-full items-center justify-center p-6 bg-blue-500">
              <span className="font-semibold text-white">
                Navegador de arquivos
              </span>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={50}>
            <ResizablePanelGroup direction="vertical">
              <ResizablePanel defaultSize={10} minSize={10} maxSize={10}>
                <div className="flex h-full items-center justify-center p-6 bg-red-500">
                  <span className="font-semibold text-white">
                    Arquivos abertos
                  </span>
                </div>
              </ResizablePanel>
              <ResizablePanel defaultSize={75}>
                <div className="flex h-full items-center justify-center p-6 bg-amber-500">
                  <span className="font-semibold text-white">
                    Editor de código + Terminal
                  </span>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
        </ResizablePanelGroup>
      </main>
    </>
  )
}

export default App
