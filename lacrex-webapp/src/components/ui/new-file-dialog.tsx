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
import { useToast } from './use-toast'

export const NewFileDialog = () => {
  const [fileName, setFileName] = useState('')
  const { newFile, allFiles } = useNavigationSystem()
  const { toast } = useToast()

  const handleAddFile = () => {
    if (fileName.trim() !== '') {
      const fileExists = allFiles.some(
        (file) => file.name.toLowerCase() === fileName.toLowerCase().trim(),
      )

      if (fileExists) {
        toast({
          variant: 'destructive',
          title: 'Já existe um arquivo com este nome.',
        })
      } else {
        newFile(fileName.trim())
        setFileName('')
      }
    }
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
          <Input
            type="text"
            value={fileName}
            onChange={(e) => setFileName(e.target.value)}
          />
        </AlertDialogDescription>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction onClick={handleAddFile}>Criar</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
