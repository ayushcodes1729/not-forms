
import { prisma } from "@repo/db";
import Hero from "./components/hero";
import { HeroHighlight } from "@/components/ui/hero-highlight";

export default async function Home() {
  const user = await prisma.user.findFirst()
  
  const handleFormCreate = () =>{

  }
  return (
    <div>
      {/* <HeroHighlight children={"Hey Welcome to Notforms"} className="dark" /> */}
      <form  className="flex flex-col h-[150vh] justify-between">
        <label htmlFor="formName">Form Name: </label>
        <input type="text" name= "formName"  className="border border-white" required/>
        
        <label htmlFor="description">Form Desc: </label>
        <input type="text" name= "description"  className="border border-white" required/>
        <label htmlFor="welcome">Welcome Text: </label>
        <input type="text" name= "welcome"  className="border border-white" required/>
        <label htmlFor="end">End Text: </label>
        <input type="text" name= "end"  className="border border-white" required/>
        <button type="submit">Sumit</button>
      </form>
    </div>
  );
}