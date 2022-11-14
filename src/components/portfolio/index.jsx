import React from 'react';
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png' 
import IMG2 from '../../assets/portfolio2.png' 
import IMG3 from '../../assets/portfolio3.png' 
import IMG4 from '../../assets/portfolio4.png' 
 
//Array
const data = [
  { 
    id: 1,
    image: IMG1,
    title: 'ReacNative App Control para automoviles electricos ',
    github: 'https://github.com/FelaBazza',
    demo: 'https://dribbble.com/justfela'
  },
  {
    id: 2,
    image: IMG2,
    title: 'E-commerce con JavaScript Vanilla',
    github: 'https://github.com/FelaBazza',
    demo: 'https://dribbble.com/justfela'
  },
  {
   id: 3,
   image: IMG3,
   title: 'Portfolio 1 page only con HTML y CSS',
   github: 'https://github.com/FelaBazza',
   demo: 'https://dribbble.com/justfela'
  },
  {
   id: 4,
   image: IMG4,
   title: 'Tareas de mantenimiento y seguimiento de progreso',
   github: 'https://github.com/FelaBazza',
   demo: 'https://dribbble.com/justfela'
  },
]

const Portfolio = ()=>{
    return(
      <section id='portfolio'>

         <h5>Mis Ultimos Trabajos</h5>
         <h2>Portfolio</h2> 
                  
        <div className='container portfolio__container'>
          {data.map (({id, image, title, github, demo})=> {
            return( 
            <article key={id} className='portfolio__item'>
            <div className='portfolio__item-image'>
              <img src={image} alt={title} />

            </div>
              <h3>{title}</h3>
            <div className='portfolio__item-cta'>
              <a href={github} className='btn' target={'blank'}>Github</a>

              <a href= {demo} className='btn btn-primary' target={'blank'}>Live Demo</a>
            </div>
          </article>)
          })}
       
           
           
        </div>



      </section>
  )
}

export { Portfolio }