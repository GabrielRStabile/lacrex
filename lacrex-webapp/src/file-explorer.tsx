import React, { useState } from 'react'
import { Plus, Trash2, FileHeart } from 'lucide-react'

interface File {
  name: string
}

interface Tab {
  name: string
}

function FileExplorer({
  onFileClick,
}: {
  files: Tab[]
  onFileClick: (fileName: string) => void
}) {
  const [files] = useState<File[]>([
    { name: 'arquivo1.lacre' },
    { name: 'arquivo2.lacre' },
    { name: 'arquivo3.lacre' },
  ])

  const [selectedFile] = useState<string | null>(null)

  const iconColors = [
    '#EF4444',
    '#F97316',
    '#F59E0B',
    '#84CC16',
    '#14B8A6',
    '#06B6D4',
  ]

  const handleAddFile = () => {
    // Lógica para adicionar um novo arquivo
  }

  const handleDeleteFile = () => {
    // Lógica para excluir arquivos
  }

  return (
    <div
      className="bg-[#09090B] text-[#F4F4F5] p-4 rounded-md shadow-md"
      style={{ aspectRatio: '33.4 / 1' }}
    >
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold pb-1">Arquivos</h2>
        <div className="flex space-x-2">
          <button
            className="bg-[#71717A] p-2 rounded-md"
            onClick={handleAddFile}
          >
            <Plus size={18} />
          </button>
          <button
            className="bg-[#71717A] p-2 rounded-md"
            onClick={handleDeleteFile}
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
      <hr className="my-2 border-[#52525B]" />

      <ul className="space-y-2">
        {files.map((file, index) => (
          <li key={index}>
            <button
              className={`flex items-center w-full text-left ${
                file.name === selectedFile ? 'bg-[#71717A] rounded-md' : ''
              }`}
              onClick={() => onFileClick(file.name)}
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
