import React from 'react';
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import {} from 'react-icons/bs'
import {} from 'react-icons/bs'
import {} from 'react-icons/bs'
import {} from 'react-icons/bs'
import {} from 'react-icons/bs'
import {} from 'react-icons/bs'


const Experience = ()=>{
    return(
 <section id='experience'> 
    
    <h5>Mis Habilidades</h5>
    <h2>Mi Experiencia</h2>

    <div className="container experience__container">
      <div className="experience__frontend">
        <h3>Frontend Development</h3>
        <div className="experience__content">
          <article className='experience__details'>
            
          <BsPatchCheckFill className='experience__details-icon'/>
          <div>
           <h4>HTML</h4>
           <small className='text-light'>Experto</small>
          </div>
          </article>

          <article className='experience__details'>

          <BsPatchCheckFill className='experience__details-icon'/>
            <div>

             <h4>CSS</h4>
             <small className='text-light'>Experto</small>

             </div>
          </article>

          <article className='experience__details'>

          <BsPatchCheckFill className='experience__details-icon'/>
           <div>
             <h4>JavaScript</h4>
             <small className='text-light'>Experto</small>
           </div>
          </article>

          <article className='experience__details'>

          <BsPatchCheckFill className='experience__details-icon'/>
          <div> 
            <h4>BOOTSTRAP</h4>
           
            <small className='text-light'>Experto</small>
          </div>
          

          </article>

          <article className='experience__details'>

          <BsPatchCheckFill className='experience__details-icon'/>
          <div>
            <h4>REACT</h4>
            <small className='text-light'>Experto</small>
          </div>
           

          </article>

        </div>

      </div>

      <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
          <article className='experience__details'>
            
          <BsPatchCheckFill className='experience__details-icon'/>
          <div>
            <h4>Node JS</h4>
            <small className='text-light'>Experto</small>
         </div>
           
           
          </article>

          <article className='experience__details'>

          <BsPatchCheckFill className='experience__details-icon'/>
          <div>
            <h4>MongoDB</h4>
            <small className='text-light'>Experto</small>
          </div>
           

          </article>

          <article className='experience__details'>

          <BsPatchCheckFill className='experience__details-icon'/>
          <div>
             <h4>MySQL</h4>
             <small className='text-light'>Experto</small>
          </div>
           

          </article>

          <article className='experience__details'>

          <BsPatchCheckFill className='experience__details-icon'/>
          <div>
            <h4>PHP</h4>
            <small className='text-light'>Experto</small>
          </div>
           
          </article>

          <article className='experience__details'>

          <BsPatchCheckFill className='experience__details-icon'/>
          <div>  
            <h4>Python</h4>
            <small className='text-light'>Experto</small>
          </div>
         
          </article>

       </div>
     </div>
    </div>

  </section>
  )
}

export { Experience }