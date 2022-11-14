import React from 'react';
import './about.css'
import ME from '../../assets/felipeperfil.png'
import{FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = ()=>{
    return(
 <section id='about'> 
    <h5>Conoce mas</h5>

    <h2>Sobre Mi</h2>
    <div className='container about__container'>
         <div className='about__me'>
          
           <div className='about__me-image'>
             <img src={ME} alt="about__me-image" />
           </div>
          

         </div>
         <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>

                    <h5>Experiencia</h5>
              

              <small>2 años de Experiencia</small>


            </article>
            <article className='about__card'>
                <FiUsers className='about__icon'/>

              <h5>Clientes</h5>
                         

              <small>10 Clientes</small>


            </article>
            <article className='about__card'>
              
              <VscFolderLibrary className='about__icon'/>
              
              <h5>Proyectos</h5>

              

              <small>50+ Completados</small>

            </article>
          </div>
          <p>Soy una persona que le encanta las computadoras, el mundo virtual y como funcionan. Soy un amante de la tecnologia
             y aun que tengo poca experiencia y poco tiempo en el mundo de la programacion, ya encontre mi lugar. Mi lugar esta donde las necesidades de los clientes nacen.
             Tengo muchas ganas de iniciar este camino con resposabilidad y madurez. Agregar mi perfil emprendedor y de liderazgo con grupos de trabajo, para brindarle al cliente el mejor servicio.
             La búsqueda y solucion de problemas es mi fuerte, la implementacion de planes para crecimiento de productividad es mi objetivo, y usar la programacion y codificacion para realizar todas
             esas tareas... Es mi pasión</p>
             
             <a href="#contact" className='btn btn-primary'>Hablemos!</a>
         </div>




    </div>
   

 </section>
  )
}

export { About }
