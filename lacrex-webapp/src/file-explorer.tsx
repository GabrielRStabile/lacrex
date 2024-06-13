import { FileHeart } from 'lucide-react'
import { useEffect, useState } from 'react'
import { DeleteFileDialog } from './components/ui/delete-file-dialog'
import { NewFileDialog } from './components/ui/new-file-dialog'
import { useNavigationSystem } from './contexts/navigation-system-context'

interface File {
  name: string
  content: string
}

function FileExplorer() {
  const { allFiles, openFile, activeFile } = useNavigationSystem()
  const [currentlyOpenedFile, setCurrentlyOpenedFile] = useState<File | null>(
    null,
  )

  const iconColors = [
    '#EF4444',
    '#F97316',
    '#F59E0B',
    '#84CC16',
    '#14B8A6',
    '#06B6D4',
  ]

  const handleFileClick = (file: File) => {
    setCurrentlyOpenedFile(file)
    openFile(file)
  }

  useEffect(() => {
    if (activeFile) {
      setCurrentlyOpenedFile(activeFile)
    }
  }, [activeFile, setCurrentlyOpenedFile])

  return (
    <div className="bg-zinc-900 text-[#F4F4F5] p-4 rounded-md shadow-md h-full overflow-y-auto">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold pb-1">Arquivos</h2>
        <div className="flex space-x-2">
          <NewFileDialog />
          <DeleteFileDialog />
        </div>
      </div>
      <hr className="my-2 border-[#52525B]" />

      <ul className="space-y-2">
        {allFiles.map((file, index) => (
          <li key={index}>
            <button
              className={`flex items-center w-full text-left p-2 ${
                file.name === currentlyOpenedFile?.name
                  ? 'bg-[#71717A] rounded-md'
                  : ''
              }`}
              onClick={() => handleFileClick(file)}
            >
              <FileHeart
                size={18}
                color={iconColors[index % iconColors.length]}
                className="mr-2"
              />
              {file.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FileExplorer
