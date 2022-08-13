import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './nav.module.css'

import { useAuth } from '../hoock/useAuthTentication'
import { useValueAuth } from '../Contextmanage/authcontext'

const Navbar  = () => {
  const {user} = useValueAuth()
  const{logout} = useAuth()
 
 return (<div>
   <nav className={styles.navbar}>
    
     <NavLink className={styles.brand}  to='/' > 
     <span className='fw-bold' >BuildBox.</span>
     </NavLink>  
    <ul className={styles.links_list} >
       {user && ( <> 
        <li>
         <button className='float-end' onClick={logout} >Sair</button>
       </li>
       </> )}
      
    </ul> 
</nav>

   </div>)
}

export default Navbar