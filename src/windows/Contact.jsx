import WindowWrapper from "#hoc/WindowWrapper"
import { socials } from "#constants"
import { WindowControls } from "#components"

const Contact = () => {
  return (
    <>
    <div id="window-header">
    <WindowControls target="contact"/>
      <h2>Contact Me</h2>
    </div>
    <div className="p-5 space-y-5">
      <img src="/images/pavel.png" alt="Pavel" className="w-20 h-20 rounded-full object-cover border border-[#24292E]"/>
      <h3>Let's connect</h3>
      <p>Write me following links below:</p>
      <p>paul.pbrox@gmail.com</p>
      <ul>
        {socials.map(({id, bg, link, icon, text}) => (
          <li key={id} style={{backgroundColor:bg}}>
            <a href={link} target="_blank" rel="noopener noreferrer" title={text}>
              <img src={icon} alt={text} className="size-5"/>
              <p>{text}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
    </>
  )
}

const ContactWrapper = WindowWrapper(Contact, 'contact')

export default ContactWrapper