import React, { useState } from 'react'
import styles from './home.module.css'
const Home = () => {
    const [send, setSend]  = useState('')
     
    const HandSubmit = (e) => {
        e.preventDefault("")

    }

    return( <div className={styles.home} >
        <h3 >Saúde em dia, um blog pelo quais eu fiz, na ideia de que todo programador dev praticar exercício fisico.</h3>
       
        <form onSubmit={HandSubmit} className={styles.search_form} >
         <label>
            <input type="text"   placeholder='Buscar'  onChange={(e) => setSend(e.target.value)}  />
         </label>

         <button className='btn btn-dark' >Search</button>

        </form>
    
    
    
    
    
    
    
    
    
    </div>  )
}

export default Home