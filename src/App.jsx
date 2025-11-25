import { Draggable } from "gsap/Draggable";
import gsap from "gsap";

import { Finder, Resume, Safari, Terminal,Text , Image, Contact} from "#windows"; 
import { Dock, Navbar,Welcome } from "#components";

gsap.registerPlugin(Draggable)


function App() {
  return (
    <main>
      <Navbar/>
      <Welcome/>
      <Dock/>
      <Terminal/>
      <Safari/> 
      <Resume/>
      <Finder/>
      <Text/>
      <Image/>
      <Contact/>
    </main>
  )
}

export default App