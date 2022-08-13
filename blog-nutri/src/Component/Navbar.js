import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './nav.module.css'

import { useAuth } from '../hoock/useAuthTentication'
import { useValueAuth } from '../Contextmanage/authcontext'



const Navbar  = () => {
  const {user} = useValueAuth()
  console.log('what have here', user)
  const{logout} = useAuth()
 
 
 return (<div>
   <nav className={styles.navbar}>
     <NavLink className={styles.brand}  to='/' > <span> BuildBox</span> </NavLink>  
    
    <ul className={styles.links_list} >
       <li>
        <NavLink to='/' className={({isActive}) => (isActive ? styles.active : "" ) }>Home</NavLink>
       </li>
      
      {!user && ( <> 
       <li>
        <NavLink to='/login' className={({isActive}) => (isActive ? styles.active : '')}  > Entrar</NavLink>
       </li>
       
       
       <li>
        <NavLink to='/register' className={({isActive}) => (isActive ? styles.active :'') }  >Registrar</NavLink>
       </li>  

       </>
       
       )}
          

      {user && (<>  
      
        <li>
        <NavLink to='/post/meuspost' className={({isActive}) => (isActive ? styles.active: '')}  >Post Salvos</NavLink>
       </li>

       <li>
       <NavLink to='/dashboard' className={({isActive}) => (isActive ? styles.active: '' )} >  
      das
       </NavLink>
       </li>
        
      
      
        </> ) }
      
       
     
       
       {user && ( <> 
        <li>
         <button onClick={logout} >Sair</button>
       </li>
       </> )}
      
    </ul> 
</nav>

   </div>)
}

export default Navbar