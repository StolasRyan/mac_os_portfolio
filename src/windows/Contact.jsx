import WindowWrapper from "#hoc/WindowWrapper"


const Contact = () => {
  return (
    <>
    <div className="window-header">
      <h2>Contact Me</h2>
    </div>
    </>
  )
}

const ContactWrapper = WindowWrapper(Contact, 'contact')

export default ContactWrapper