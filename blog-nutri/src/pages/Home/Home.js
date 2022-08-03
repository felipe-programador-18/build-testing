import React, { useState } from 'react'
import styles from './home.module.css'

import { useFethingDocuments } from '../../hoock/useFecthingdates'
import { Link, useNavigate } from 'react-router-dom'
import DetalsPost from '../../Component/Post.details'


const Home = () => {
    const [query, setQuery]  = useState('')
    
    const navigate = useNavigate()
    const{document:post, loading} = useFethingDocuments("posts")
    
    const HandSubmit = (e) => {
        e.preventDefault("")
      
       if(query) {
         navigate(`/search/?q=${query}`)

       }
       
    }

    return( <div className={styles.home} >
        
        <h3 >Blog sobre saúde.</h3>
        
        <form onSubmit={HandSubmit} className={styles.search_form} >
         <label>
            <input type="text"   placeholder='Buscar'  onChange={(e) => setQuery(e.target.value)}  />
         </label>

         <button className='btn btn-dark' >Search</button>

        </form >
        {loading && <p>carregando posts ..... </p> }
    
         {post && post.map((posts) =><DetalsPost key={posts.id} posts={posts} /> 
         )}
        
        {post &&  post.length === 0 && ( <div>    <h1 className='text-center' > Nenhum post aqui ainda ....</h1>
        <Link to={'/post/create'} className='btn lean' >Crie seu Primeiro post.</Link>
        </div>) }  
    
    
       
    
    
    </div>  )
}

export default Home