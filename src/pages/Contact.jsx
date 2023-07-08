import ContactImage from '../assets/images/contact.jpg'
import '../assets/styles/Contact.css'
import Input from '../components/Input'


const Contact = () =>{
    return(
        <div className="contact">
            <div className="leftcontact" style={{backgroundImage:`url(${ContactImage})`}}>
            </div>
            <div className="rightcontact">
                <h1>Contact Us</h1>
                <form>
                   <Input type="text" name="name" label="Full Name" placeholder="Enter Full Name..." />
                   <Input type="email" name="email" label="Email" placeholder="Enter Email..." />
                   <Input type="message" name="message" label="Message" placeholder="Enter Message..." />
                   <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default Contact