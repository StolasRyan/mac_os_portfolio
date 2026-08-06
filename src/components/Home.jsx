import { locations } from "#constants"
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/Draggable"; 
import clsx from "clsx"
import useWindowStore from "#store/window";
import useLocationStore from "#store/location";

const projects = locations.work.children ?? [];
const Home = () => {
    const {setActiveLocation} = useLocationStore();
    const {openWindow} = useWindowStore();

    const handleOpenProjectFinder =(project)=>{
        setActiveLocation(project);
        openWindow("finder");
    }

    useGSAP(()=>{
        Draggable.create(".folder")
    },[])
  return (
    <section id="home">
    <ul>
        {projects.map((item) => (
          <li key={item.id} className={clsx("group folder", item.windowPosition)} onClick={()=>handleOpenProjectFinder(item)}>
            <img src="/images/folder.png"  alt={item.name}/>
            <p className="text-sm font-medium truncate">{item.name}</p>
          </li>
        ))}
    </ul>
    </section>
  )
}

export default Home