import React from 'react';
import './contact.css'
import {Modal} from './Modal';
import {AiOutlineMail} from 'react-icons/ai';
import {RiMessengerLine} from 'react-icons/ri';
import {ImWhatsapp} from 'react-icons/im';
import  { useRef } from 'react';
import emailjs from 'emailjs-com'
import { useState } from 'react';


const Contact = ()=>{

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9cr28jv', 'template_uu3rp05', form.current, 'R_z3-eukk5NZGuERu')
    e.target.reset()  

    


  };
   
   const [estadoModal, setEstadoModal] = useState (false);

   

 

   

    return(

 <section id='contact'> 
     <h5>Contacto</h5>
     <h2>Contactate Conmigo</h2>

     <div className="container contact__container">

      <div className="contact__options">

        <article className='contact__option'>

          <AiOutlineMail className='contact__option-icon'/>

          <h4>Email</h4>
          <h5>luisfelipebazzarelli@gmail.com</h5>
          <a href="mailto:luisfelipebazzarelli@gmail.com" target={'blank'}>Mandar Mensaje</a>
          
        </article>

        <article className='contact__option'>
          <RiMessengerLine className='contact__option-icon'/>
          <h4>Menssenger</h4>
          <h5>Fela Bazzarelli</h5>
          <a href="https://m.me/luisfelipe.bazzarelli" target={'blank'}>Mandar Mensaje</a>
          
        </article>

        <article className='contact__option'>
          <ImWhatsapp className='contact__option-icon'/>
          <h4>WhatsApp</h4>
          <h5>+54 9 11 3797-3503</h5>
          <a href="https://api.whatsapp.com/send?phone=+5491137973503" target={'blank'}>Mandar Mensaje</a>
          
        </article>
          
      </div>

      {/*FINAL DE OPCIONES DE CONTACTO*/}


      <form ref={form} onSubmit={(e)=> sendEmail (e)} >
        <input 
          type="text"
          maxLength="999"        
          placeholder='Nombre Completo'
          autoComplete='off'
        
         required/>
        <input
          type="email"
          maxLength="999"  
          placeholder='Tu Email'
        
          autoComplete='off'
        
         required />
        <textarea 
         name="message" 
         rows="7" 
         placeholder='Tu Mensaje' 
         required></textarea>
        <button type='submit' className='btn btn-primary' onClick={()=>setEstadoModal(!estadoModal)}>           
          {estadoModal && <Modal /> }
          Enviar Mensaje</button>
      </form>
    


     </div>
 






 </section>
  )
}

export { Contact }