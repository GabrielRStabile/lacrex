import { FileHeart } from 'lucide-react'
import { useNavigationSystem } from './contexts/navigation-system-context'
import { NewFileDialog } from './components/ui/new-file-dialog'
import { DeleteFileDialog } from './components/ui/delete-file-dialog'
import { useState } from 'react'

interface File {
  name: string
  content: string
}

function FileExplorer() {
  const { allFiles, openFile, activeFile, selectedFile, setSelectedFile } = useNavigationSystem()
  const [selectedFileName, setSelectedFileName] = useState<string | null>(null)

  const iconColors = [
    '#EF4444',
    '#F97316',
    '#F59E0B',
    '#84CC16',
    '#14B8A6',
    '#06B6D4',
  ]

  const handleFileClick = (file: File) => {
    openFile(file)
    setSelectedFile(file)
  }

  return (
    <div className="bg-[#09090B] text-[#F4F4F5] p-4 rounded-md shadow-md h-full overflow-y-auto">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold pb-1">Arquivos</h2>
        <div className="flex space-x-2">
          <NewFileDialog />
          <DeleteFileDialog />
        </div>
      </div>
      <hr className="my-2 border-[#52525B]" />

      <ul className="space-y-2">
        {allFiles.map(
          (file, index) => (
            console.log(file.name),
            console.log(`activeFile: ${activeFile?.name}`),
            (
              <li key={index}>
                <button
                  className={`flex items-center w-full text-left p-2 ${
                    file.name === activeFile?.name
                      ? 'bg-[#71717A] rounded-md'
                      : ''
                  }`}
                  onClick={() => {
                    openFile(file)
                    setSelectedFile(file)
                  }}
                >
                  <FileHeart
                    size={18}
                    color={iconColors[index % iconColors.length]}
                    className="mr-2"
                  />
                  {file.name}
                </button>
              </li>
            )
          ),
        )}
      </ul>
    </div>
  )
}

export default FileExplorer
