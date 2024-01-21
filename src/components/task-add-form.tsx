import { useState } from "react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { PlusIcon } from "lucide-react";
import { ToggleTags } from "./togle-tags";

export function TaskAddForm({ onAddTask }) {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);


  const handleSubmit = (e) => {
    e.preventDefault();

    onAddTask({
      title: taskTitle,
      description: taskDescription,
      tags: selectedTags,
    });

    setTaskTitle("");
    setTaskDescription("");
    setSelectedTags([]);
    closeDialog();
  };

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      <Dialog isOpen={isDialogOpen} onClose={closeDialog}>
        <DialogTrigger asChild>
          <span>
            <Button variant="outline" size="icon" className="text-blue-400 cursor-pointer">
              <PlusIcon />
            </Button>
          </span>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Adicionar Tarefa</DialogTitle>
            <DialogDescription>
              Preencha os detalhes da tarefa e clique em Adicionar.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="taskTitle" className="text-right">
                  Título
                </Label>
                <Input
                  id="taskTitle"
                  type="text"
                  value={taskTitle}
                  onChange={(e) => setTaskTitle(e.target.value)}
                  className="col-span-3"
                />
              </div>
              <div>
                <ToggleTags onTagsChange={setSelectedTags} />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Adicionar</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
