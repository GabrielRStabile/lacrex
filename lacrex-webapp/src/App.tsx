import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable'
import LaCreXEditor from './components/lacrex-editor'
import FileExplorer from './file-explorer'
import TabBar from './tab-bar'
function App() {
  return (
    <>
      <main className="h-screen p-4 bg-zinc-900">
        <ResizablePanelGroup
          direction="horizontal"
          className="max-w rounded-lg border"
        >
          <ResizablePanel defaultSize={50} maxSize={40} minSize={20}>
            <FileExplorer />
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={50}>
            <ResizablePanelGroup direction="vertical" className="p-2">
              <TabBar />
              <ResizablePanel defaultSize={75} className="rounded-md mt-1">
                <div className="flex h-full items-center justify-center p-4 bg-[#27272a]">
                  <LaCreXEditor />
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
