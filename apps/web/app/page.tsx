
import { prisma } from "@repo/db";
import Hero from "./components/hero";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import CreateFormPop from "./components/createFormPop";

export default async function Home() {
  const user = await prisma.user.findFirst()
  
  const handleFormCreate = () =>{

  }
  return (
    <div>
      <CreateFormPop />
    </div>
  );
}