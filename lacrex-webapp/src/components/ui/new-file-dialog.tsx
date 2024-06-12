import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Input } from '@/components/ui/input'
import { useNavigationSystem } from '@/contexts/navigation-system-context'
import { Plus } from 'lucide-react'
import { useState } from 'react'

export const NewFileDialog = () => {
  const [fileName, setFileName] = useState('')
  const { newFile } = useNavigationSystem()

  const handleAddFile = () => {
    newFile(fileName)
    setFileName('')
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <button className="bg-[#71717A] p-2 rounded-md">
          <Plus size={18} />
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Dê um nome lacrador para seu arquivo:
          </AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogDescription>
          <Input type="text" value={fileName} onChange={(e) => setFileName(e.target.value)} />
        </AlertDialogDescription>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction onClick={handleAddFile}>Criar</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
