import { useEffect, useState } from 'react'
import { useNavigationSystem, File } from './contexts/navigation-system-context'

function TabBar() {
  const { openFile, recentlyOpenedFiles, closeFile, activeFile} =
    useNavigationSystem()
  const [activeTab, setActiveTab] = useState(0)

  const handleCloseTab = (file: File) => {
    closeFile(file)
  }

  const handleSetActiveTab = (file: File) => {
    setActiveTab(recentlyOpenedFiles.indexOf(file))
    openFile(file)
  }

  useEffect(() => {
    if (activeFile !== null) {
      setActiveTab(recentlyOpenedFiles.indexOf(activeFile))
    }
  }, [activeFile, recentlyOpenedFiles])

  return (
    <div className="bg-[#3F3F46] shadow-md rounded-[10px] p-4 border-[1px] border-[#71717A] h-fit">
      <ul className="flex space-x-2">
        {recentlyOpenedFiles.map((file, index) => (
          <li key={index}>
            <button
              className={`bg-[#71717A] text-[#F4F4F5] rounded-[3px] px-4 py-2 font-semibold ${index === activeTab ? 'border-b-2 border-white-500' : ''
                }`}
              onClick={() => handleSetActiveTab(file)}
            >
              {file.name}
              <button
                className="ml-2 text-[#52525B] hover:text-red-500"
                onClick={() => handleCloseTab(file)}
              >
                &times;
              </button>
            </button>
          </li>
        ))}
        {!recentlyOpenedFiles.length && ( // Adiciona padding quando não há abas
          <div className="py-5"></div>
        )}
      </ul>
    </div>
  )
}

export default TabBar
