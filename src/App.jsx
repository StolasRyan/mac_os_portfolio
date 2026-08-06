import { Draggable } from "gsap/Draggable";
import gsap from "gsap";
import { useState } from "react";
import { Maximize } from "lucide-react";
import { Finder, Resume, Safari, Terminal,Text , Image, Contact, Photos, Trash} from "#windows"; 
import { Dock, Home, Navbar,Welcome } from "#components";

gsap.registerPlugin(Draggable)


function App() {
  const [showFullscreenPrompt, setShowFullscreenPrompt] = useState(true);

  const enterFullscreen = () => {
    document.documentElement.requestFullscreen();
    setShowFullscreenPrompt(false);
  };
  return (
    <>
    {showFullscreenPrompt && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="rounded-2xl p-8 text-center space-y-4  bg-white/10 backdrop-blur supports-backdrop-filter:bg-white/20 border-b border-white/30 ring-1 ring-white/20  select-none">
            <div className="size-12  bg-white/10 backdrop-blur supports-backdrop-filter:bg-white/20 border border-white/30 ring-1 ring-white/20  select-none rounded-xl items-center flex justify-center mx-auto">
              <Maximize className="text-white/60" size={40} />
            </div>
            <h2 className="text-xl font-bold text-white/80 wrap-break-word mx-auto">This website designed for Desktops and Tablets only </h2>
            <p className="text-lg font-bold text-white/60">Better experience in fullscreen</p>
            <p className="text-sm text-white/50">Press Enter Fullscreen for better experience</p>
            <div className="flex gap-3 justify-center">
              <button
                onClick={enterFullscreen}
                className="px-6 py-2 bg-white/20 text-white/80 backdrop-blur supports-backdrop-filter:bg-white/20 border border-white/30 ring-1 ring-white/20  select-none   rounded-xl font-medium hover:bg-white/10 transition cursor-pointer"
              >
                Enter Fullscreen
              </button>
              <button
                onClick={() => setShowFullscreenPrompt(false)}
                className="px-6 py-2 bg-white/10  text-white/50 backdrop-blur supports-backdrop-filter:bg-white/20 border border-white/30 ring-1 ring-white/20  select-none   rounded-xl font-medium hover:bg-red-200 hover:text-red-400 transition cursor-pointer"
              >
                Skip
              </button>
            </div>
          </div>
        </div>
      )}
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
      <Photos/>
      <Trash/>
      <Home/>
    </main>
    </>
  )
}

export default App