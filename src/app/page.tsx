import { Header } from "@/components/ui/header";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h2>Lista de tarefas Kanban</h2>
      </main>
    </div>
  );
}
