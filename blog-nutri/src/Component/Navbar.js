import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './nav.module.css'




const Navbar  = () => {
   return (<div>
   <nav className={styles.navbar}>
     <NavLink className={styles.brand}  to='/' > <span> FirmeSaúde</span> </NavLink>  
    
    <ul className={styles.links_list} >
       <li>
        <NavLink to='/' >Home</NavLink>
       </li>
      
       <li>
        <NavLink to='/' > Entrar</NavLink>
       </li>
      
       <li>
        <NavLink to='/register' >Registrar</NavLink>
       </li>
      
       <li>
        <NavLink to='/' >Novo Post</NavLink>
       </li>
  
       <li>
        <NavLink to='/' >Dashboard</NavLink>
       </li>
  
       <li>
        <NavLink to='/about' >Sobre</NavLink>
       </li>

       <li>
         <button>Sair</button>
       </li>
  
    </ul> 
</nav>

   </div>)
}

export default Navbar