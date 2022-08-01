import React, { useState } from 'react'
import styles from './home.module.css'

import { useFethingDocuments } from '../../hoock/useFecthingdates'


const Home = () => {
    const [send, setSend]  = useState('')
     
    const{document:post, loading, error} = useFethingDocuments("posts")
    console.log('this is null', post)
    const HandSubmit = (e) => {
        e.preventDefault("")

    }

    return( <div className={styles.home} >
        <h3 >Blog sobre saúde.</h3>
       
        <form onSubmit={HandSubmit} className={styles.search_form} >
         <label>
            <input type="text"   value={send}  placeholder='Buscar'  onChange={(e) => setSend(e.target.value)}  />
         </label>

         <button className='btn btn-dark' >Search</button>

        </form >
    
    
         {post && post.map((posts) => ( 
          <div className='d-flex justify-content-center align-items-center' >
          <p key={posts.id}> testing here now  {posts.title} -
            <img className='rounded'  src={posts.image} alt={posts.title} />
        
          </p> 
          </div>))}
        
        {!post && <p className='text-center bg-primary' > Nenhum post aqui ainda ....</p>  }  
    
    
       
    
    
    </div>  )
}

export default Home