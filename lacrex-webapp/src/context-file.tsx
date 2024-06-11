import React, { useState } from 'react'
import FileExplorer from './file-explorer'
import TabBar from './tab-bar'

interface Tab {
  name: string
}

function CodeEditor() {
  const [openFiles, setOpenFiles] = useState<Tab[]>([])

  const handleFileClick = (fileName: string) => {
    if (!openFiles.some((tab) => tab.name === fileName)) {
      setOpenFiles([...openFiles, { name: fileName }])
    }
  }

  return (
    <div className="flex h-screen">
      <FileExplorer files={openFiles} onFileClick={handleFileClick} />
      <TabBar
        openFiles={openFiles}
        onCloseTab={function (): void {
          throw new Error('Function not implemented.')
        }}
      />
    </div>
  )
}

export default CodeEditor
