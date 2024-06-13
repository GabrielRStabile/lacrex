import { useState } from 'react'
import { useNavigationSystem } from '../../contexts/navigation-system-context'
import { parseTreeStr } from '../../utils/parser-facade'
import './RainbowButton.css'
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from './alert-dialog'

function RainbowButton() {
  const [isClicked, setIsClicked] = useState(false)
  const { allFiles, activeFile } = useNavigationSystem()

  const handleClick = () => {
    setIsClicked(!isClicked)
  }

  const handleAST = () => {
    return parseTreeStr(
      allFiles.find((file) => file.name === activeFile?.name)?.content || '',
    )
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <div
          className={`rainbow-button gradient-button rounded-lg`}
          onClick={handleClick}
        >
          <span className="rainbow-button-content">Mostrar AST</span>
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Árvore</AlertDialogTitle>
          <AlertDialogDescription>{handleAST()}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Voltar</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default RainbowButton
