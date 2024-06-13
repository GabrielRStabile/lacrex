import { createContext, useContext, useState } from 'react'

export interface File {
  name: string
  content: string
}

interface NavigationSystemContextData {
  openFile(file: File): void
  closeFile(file: File): void
  saveFile(content: string): void
  newFile(fileName: string): void
  deleteFile(file: File): void
  allFiles: File[]
  recentlyOpenedFiles: File[]
  activeFile: File | null
  setActiveFile: (file: File | null) => void
  setSelectedFile: (file: File | null) => void
}

interface NavigationSystemContextProviderProps {
  children: React.ReactNode
}

const NavigationSystemContext = createContext<NavigationSystemContextData>(
  {} as NavigationSystemContextData,
)

export const NavigationSystemProvider = ({
  children,
}: NavigationSystemContextProviderProps) => {
  const [activeFile, setActiveFile] = useState<File | null>(null)

  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const [allFiles, setAllFiles] = useState<File[]>([])

  const [recentlyOpenedFiles, setRecentlyOpenedFiles] = useState<File[]>([])

  function openFile(file: File) {
    setActiveFile(file)

    if (
      recentlyOpenedFiles.some((openedFile) => openedFile.name === file.name)
    ) {
      return
    }

    setRecentlyOpenedFiles((prev) => {
      const updatedFiles = [file, ...prev]

      if (updatedFiles.length > 3) {
        updatedFiles.pop()
      }

      return updatedFiles
    })
  }

  function closeFile(file: File) {
    if (activeFile && activeFile.name === file.name) {
      setActiveFile(null)
      setRecentlyOpenedFiles((prev) =>
        prev.filter((openedFile) => openedFile.name !== file.name),
      )
    }
  }

  function saveFile(content: string) {
    if (activeFile) {
      const updatedFiles = allFiles.map((file) => {
        if (file.name === activeFile.name) {
          return { ...file, content }
        }

        return file
      })

      setAllFiles(updatedFiles)
    }
  }

  function newFile(fileName: string) {
    const file: File = {
      name: fileName,
      content: '',
    }

    setAllFiles((prev) => [file, ...prev])
  }

  function deleteFile(file: File) {
    const updatedFiles = allFiles.filter((f) => f.name !== file.name)

    setAllFiles(updatedFiles)

    if (activeFile && activeFile.name === file.name) {
      setActiveFile(null)
    }

    setRecentlyOpenedFiles((prev) =>
      prev.filter((openedFile) => openedFile.name !== file.name),
    )
  }

  return (
    <NavigationSystemContext.Provider
      value={{
        openFile,
        closeFile,
        saveFile,
        newFile,
        deleteFile,
        allFiles,
        recentlyOpenedFiles,
        activeFile,
        setActiveFile,
        setSelectedFile,
      }}
    >
      {children}
    </NavigationSystemContext.Provider>
  )
}

export function useNavigationSystem() {
  return useContext(NavigationSystemContext)
}
