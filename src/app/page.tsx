"use client"

import { KanbanBoard } from "@/components/board";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="flex flex-col mt-12">
        <KanbanBoard />
      </main>
    </div>
  );
}
