import React, { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import { TrashIcon } from "lucide-react";

export function DeleteConfirmationDialog({ isOpen, onClose, onConfirm }) {
    const handleConfirm = () => {
        onConfirm();
        onClose();
    };

    return (
        <Dialog isOpen={isOpen} onClose={onClose}>
            <DialogTrigger asChild>
                <Button variant="outline" size="icon" className="p-1 text-secondary-foreground/50 h-auto text-red-500 cursor-pointer">
                    <TrashIcon />
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Confirmação</DialogTitle>
                </DialogHeader>
                <DialogDescription>
                    Tem certeza de que deseja excluir essa tarefa?
                </DialogDescription>
                <DialogFooter>
                    <Button onClick={handleConfirm}>Confirmar</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
