import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './nav.module.css'




const Navbar  = () => {
   return (<div>
   <nav className={styles.navbar}>
     <NavLink className={styles.brand}  to='/' > <span> FirmeSaúde</span> </NavLink>  
    
    <ul className={styles.links_list} >
       <li>
        <NavLink to='/' className={({isActive}) => (isActive ? styles.active : "" ) }>Home</NavLink>
       </li>
      
       <li>
        <NavLink to='/' className={({isActive}) => (isActive ? styles.active : '')}  > Entrar</NavLink>
       </li>
      
       <li>
        <NavLink to='/register' className={({isActive}) => (isActive ? styles.active :'') }  >Registrar</NavLink>
       </li>
      
       <li>
        <NavLink to='/' className={({isActive}) => (isActive ? styles.active: '')}  >Novo Post</NavLink>
       </li>
  
       <li>
        <NavLink to='/dashboard' className={({isActive}) => (isActive ? styles.active: '')}   >Dashboard</NavLink>
       </li>
  
       <li>
        <NavLink to='/about' className={({isActive}) => (isActive ? styles.active: '')} >Sobre</NavLink>
       </li>
       <li>
         <NavLink to={'/login'} >Login</NavLink>
       </li>

       <li>
         <button>Sair</button>
       </li>
  
    </ul> 
</nav>

   </div>)
}

export default Navbar