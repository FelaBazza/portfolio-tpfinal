import React from 'react';
import './testimonials.css'
import AVRT1 from '../../assets/avatar1.png'
import AVRT2 from '../../assets/avatar2.png'
import AVRT3 from '../../assets/avatar3.png'
import AVRT4 from '../../assets/avatar4.png'
import { Pagination  } from 'swiper';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


//ARRAY
const data = [
    { 
      avatar: AVRT1,
      name: 'Tina Snow',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam tempora temporibus necessitatibus tempore quas vero magni! Omnis, dolore nesciunt et ducimus error unde dolorum quia dignissimos repellendus sed? Molestiae, illum.'

      
    },
    { 
      avatar: AVRT2,
      name: 'Charlotte Whale',
      review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione tempore aliquam odit, voluptas unde quos nostrum nam natus fugiat reprehenderit pariatur ipsam fugit autem,pariatur ipsam fugit autem,reprehenderit pariatur' 
                  
    },

    { 
      avatar: AVRT3,
      name: 'Martina Plas',
      review:'Lorem ipsum dolor sit amet officiis ad. Nulla, ex repudiandae.consectetur adipisicing elit. Ratione tempore aliquam odit,eaque voluptas unde quos nostrum nam natus fugiat reprehenderit pariatur ipsam fugit autem,' 
        
            
    },
    { 
      avatar: AVRT4,
      name: 'Lucas Onofre',
      review:'Lorem ipsum dolor sit amet consectetur officiis ad. Nulla, ex repudiandae.e aliquam odit adipisicing elit. Ratione tempor eaque voluptas unde quos nostrum nam natus fugiat reprehenderit pariatur ipsam fugit autem,' 
            
    }
]
const Testimonials = ()=>{
    return(
    <section id= 'testimonials'>
        <h5>Review de mis clientes</h5>
        <h2>Testimonios</h2>

       <Swiper className='container testimonials__container' 
       modules={[ Pagination]}
       spaceBetween={40}
       slidesPerView={1}
      
       pagination={{ clickable: true }}
      >
            
    
        {data.map (({avatar, name, review}, index)=>{
            return(
        <SwiperSlide key={index} className='testimonial'>
            <div className="client__avatar">
                <img src={avatar} alt="avatar one" />
                
            </div>
            <h5 className='client__name'>{name}</h5>
              <small className='client__review'>
                  {review}
              </small>
        </SwiperSlide>
            )
        })}
        
        
        
       </Swiper>
    </section>

  )
}

export {Testimonials }