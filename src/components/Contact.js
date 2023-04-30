import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "../styles/contactStyles/contact.scss";
import { QRCode } from 'react-qrcode-logo';

const Contact = () => {

        const form = useRef();
        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs.sendForm('service_9iqct5f',
                           'template_wnkyuyw',
                           form.current, 
                           'gdui-C9dZG_GbrHUG'
                           )
        };

        return (
          <div className="contact"> 
             {/* Send message to gmail. */}
             <form ref={form} onSubmit={sendEmail}>    
                <p className="contactTitle" >Contact</p>
                <span className = "companyPosition">
                   <input type="text" name="company_name"  placeholder="Company name" />
                   <input type="text" name="work_position"  placeholder="Work position" />
               </span>
                <input type="email" name="company_email" placeholder="Email" />
                <textarea name="message" placeholder="Write message..." />
                <input className="send" type="submit" value="Send" />
             </form>  
             <div className="qrcode">
                 <QRCode value="https://www.linkedin.com/in/azniv-saroyan/"  // QR code to linkedin.
                         size= {150} 
                         fgColor= {"#0A66C2"}
                  />
             </div>                                  
          </div>
        );
       }

export default Contact;