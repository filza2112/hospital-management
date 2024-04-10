import {useRef} from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

const Contact = () => {
    const form = useRef()
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_pq463ci', 'template_os2ee3s', form.current, {
          publicKey: 'O-e32Rf6o_Nst6nQO',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
        e.target.reset()
    };
  
  return (
    
    <div className='container'>
        <div className='text'><h2 >Contact Us</h2></div>
        <form ref={form} onSubmit={sendEmail}className="formcontent">
            <div className='name'>
            <input type='text' placeholder='Full Name'
            name='user_name' required />
            </div>
            

            <div className='name'>
            <input type='email' placeholder='xyz@gmail.com'
            name='user_email' required />
            </div>


          <div className='name'>
          <input type='text' placeholder='Subject'
            name='issue' required />
            </div>


          <div className='name'>
          <textarea name="message" placeholder='enter your message'
          cols="40" rows="10"></textarea>
          </div>

          <button className='btn'>Submit</button>
        </form>
        </div>
        
  )
}

export default Contact