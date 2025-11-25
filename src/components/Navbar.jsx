import dayjs from "dayjs"
import { navLinks,navIcons } from "#constants"
import useWindowStore from "#store/window"


function Navbar() {

    const {openWindow} = useWindowStore()

  return (
    <nav>
        <div>
            <img src="/images/logo.svg" alt="logo" />
            <p className="font-bold">Pavel's Portfilio</p>
            <ul>
                {navLinks .map((item)=>(
                    <li key={item.id} onClick={()=>openWindow(item.type)}>
                        <p>{item.name}</p>
                    </li>
                ))}
            </ul>
        </div>
        <div>
            <ul>
                {navIcons.map((icon)=>(
                    <li key={icon.id}>
                        <img src={icon.img} className="icon-hover" alt={`icon-${icon.id}`} />
                    </li>
                ))}
            </ul>

            <time datetime="">{dayjs().format("ddd MMM D h:mm A")}</time>
        </div>
    </nav>
    
  )
}

export default Navbar