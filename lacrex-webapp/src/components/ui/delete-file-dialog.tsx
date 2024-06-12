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
import { Trash2 } from 'lucide-react'
import { useState } from 'react'

export const DeleteFileDialog = () => {
    const { deleteFile, activeFile } = useNavigationSystem()

    const handleDeleteFile = () => {
        if (activeFile) {
            deleteFile(activeFile)
        }
    }



    return (
        <AlertDialog>
            <AlertDialogTrigger>
                <button
                    className="bg-[#71717A] p-2 rounded-md"
                >
                    <Trash2 size={18} />
                </button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Jurou que vai dar esse fecho?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                    Se matar esse fecho não vai ter volta! Sustenta seu B.O se for cancelado mô!
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Calma</AlertDialogCancel>
                    <AlertDialogAction onClick={handleDeleteFile}>Mata esse fecho</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
