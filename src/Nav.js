import React, { useEffect, useState } from 'react'
import "./Nav.css"

function Nav() {
    const [show, handleShow] = useState(false);


   useEffect(()=>{
    window.addEventListener("scroll", ()=>{
        if(window.scrollY>100){
         handleShow(true) ;
        }else 
        handleShow(false);
    });
    return ()=>{
        window.removeEventListener("scroll", null);
    }
   },[])
  return (
    <div className={`nav ${show && "nav__black"}`}>
       
       <div>
       <img 
       className='nav__logo'
       src='https://upload.wikimedia.org/wikipedia/commons/6/67/NewNetflixLogo.png'
       alt='Netflix Logo'
      />
      </div>
{/*    
   <div>
     <img 
       className='nav__avatar'
       src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
       alt='Netflix Logo'
      />
    </div> */}
      

        
    </div>
  )
}

export default Nav