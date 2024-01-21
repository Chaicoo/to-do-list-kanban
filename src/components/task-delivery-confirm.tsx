import React from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import { CheckIcon } from "lucide-react";

export function DeliveryConfirmationDialog({ isOpen, onClose, onConfirm }) {
    const handleConfirm = () => {
        onConfirm();
        onClose();
    };

    return (
        <Dialog isOpen={isOpen} onClose={onClose}>
            <DialogTrigger asChild>
                <Button variant="ghost" size="icon" className="p-1 h-10 text-green-600 cursor-pointer">
                    <CheckIcon />
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Confirmação de Entrega</DialogTitle>
                </DialogHeader>
                <DialogDescription>
                    Tem certeza de que deseja marcar esta tarefa como concluída?
                </DialogDescription>
                <DialogFooter>
                    <Button onClick={handleConfirm}>Entregar</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
