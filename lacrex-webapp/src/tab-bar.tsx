import React, { useState, useEffect } from 'react'

interface Tab {
  name: string
}

function TabBar({
  openFiles,
  onCloseTab,
}: {
  openFiles: Tab[]
  onCloseTab: (index: number) => void
}) {
  const [activeTab, setActiveTab] = useState(0)

  useEffect(() => {
    if (openFiles.length > 0 && activeTab >= openFiles.length) {
      setActiveTab(openFiles.length - 1)
    }
  }, [openFiles, activeTab])

  const handleCloseTab = (index: number) => {
    onCloseTab(index)
  }

  return (
    <div className="bg-[#3F3F46] shadow-md rounded-[10px] p-4 border-[1px] border-[#71717A]">
      <ul className="flex space-x-2">
        {openFiles.map((tab, index) => (
          <li key={index}>
            <button
              className={`bg-[#71717A] text-[#F4F4F5] rounded-[3px] px-4 py-2 font-semibold ${
                index === activeTab ? 'border-b-2 border-white-500' : ''
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab.name}
              <button
                className="ml-2 text-[#52525B] hover:text-red-500"
                onClick={() => handleCloseTab(index)}
              >
                &times;
              </button>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TabBar
