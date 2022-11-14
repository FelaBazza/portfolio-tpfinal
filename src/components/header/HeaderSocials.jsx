import React from 'react';
import {BsLinkedin} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'

const HeaderSocials = ()=>{
    return(
 <div className='header__socials'>

       <a href="https://linkedin.com" target= '_blank'><BsLinkedin/></a>
       <a href="https://github.com" target='_blank'><AiFillGithub/></a>
       <a href="https://google.com" target='_blank'><BsWhatsapp/></a>
   
 </div>
  )
}

export { HeaderSocials }