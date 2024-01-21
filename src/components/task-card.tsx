import type { UniqueIdentifier } from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cva } from "class-variance-authority";
import { GripVertical } from "lucide-react";
import { Badge } from "./ui/badge";
import { ColumnId } from "./board";
import { Trash } from "lucide-react";
import { useState } from "react";
import { DeleteConfirmationDialog } from "./task-delete-confirm";
import { DeliveryConfirmationDialog } from "./task-delivery-confirm";

export interface Task {
  id: UniqueIdentifier;
  columnId: ColumnId;
  content: string;
}

interface TaskCardProps {
  task: Task;
  isOverlay?: boolean;
}

export type TaskType = "Task";

export interface TaskDragData {
  type: TaskType;
  task: Task;
}

export function TaskCard({ task, isOverlay, onDeleteTask, onDeliverTask }: TaskCardProps) {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [isDeliveryDialogOpen, setIsDeliveryDialogOpen] = useState(false);

  const handleDeleteClick = () => {
    setIsDeleteDialogOpen(true);
  };

  const handleConfirmDelete = () => {
    onDeleteTask(task.id);
    setIsDeleteDialogOpen(false);
  };

  const handleCancelDelete = () => {
    setIsDeleteDialogOpen(false);
  };

  const handleConfirmDeliver = () => {
    onDeliverTask(task.id);
    setIsDeliveryDialogOpen(false);
  };

  const handleCancelDialogs = () => {
    setIsDeleteDialogOpen(false);
    setIsDeliveryDialogOpen(false);
  };

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: task.id,
    data: {
      type: "Task",
      task,
    } satisfies TaskDragData,
    attributes: {
      roleDescription: "Task",
    },
  });

  const style = {
    transition,
    transform: CSS.Translate.toString(transform),
  };

  const variants = cva("", {
    variants: {
      dragging: {
        over: "ring-2 opacity-30",
        overlay: "ring-2 ring-primary",
      },
    },
  });

  return (
    <Card
      ref={setNodeRef}
      style={style}
      className={variants({
        dragging: isOverlay ? "overlay" : isDragging ? "over" : undefined,
      })}
    >
      <CardHeader className="px-3 py-2 space-between flex flex-row border-b-2 border-secondary relative">
        <Button
          variant={"ghost"}
          {...attributes}
          {...listeners}
          className="p-1 mr-2 mt-1 text-secondary-foreground/50 -ml-2 cursor-grab"
        >
          <GripVertical />
        </Button>
        <DeleteConfirmationDialog
          isOpen={isDeleteDialogOpen}
          onClose={handleCancelDelete}
          onConfirm={handleConfirmDelete}
        />
        <DeliveryConfirmationDialog
          isOpen={isDeliveryDialogOpen}
          onClose={handleCancelDialogs}
          onConfirm={handleConfirmDeliver}
        />
        <Badge variant={"outline"} className="ml-auto font-semibold">
          Task
        </Badge>
      </CardHeader>
      <CardContent className="px-3 pt-3 pb-6 text-left whitespace-pre-wrap">
        {task.content}
      </CardContent>
    </Card>
  );
}