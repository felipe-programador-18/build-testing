import React, { useState } from 'react'
import styles from './home.module.css'
import './bi.jpg'
import { useFethingDocuments } from '../../hoock/useFecthingdates'
import { Link, useNavigate } from 'react-router-dom'
import DetalsPost from '../../Component/Post.details'
import { useValueAuth } from "../../Contextmanage/authcontext"
import { UseInsertDocument } from "../../hoock/useInsertDocument"




const Home = () => {
    const[title, setTitle] = useState('')
    const [body, setBody] = useState('') 
    const [errorform,setErrorFor] = useState('')
    const{user} = useValueAuth()


    const navigate = useNavigate()
    const{document:post, loading} =  useFethingDocuments("posts")
    


    const {InsertDocument,response} = UseInsertDocument("posts")
    
    const HandSubmit = (e) => {
      e.preventDefault("")
      setErrorFor("")
      
      if(!title || !body ){
        setErrorFor("Por favor preencha todos os campos!")
       }
     
    if(errorform) return;
 
      InsertDocument({
       title,
       body,
       uid: user.uid,
       createdBy: user.displayName
      })
 
        
      navigate("/post/meuspost")
       
    }
 
    //className='d-flex d-column align-items-center justify-content-center'

    return( <div className='d-flex d-column align-items-center justify-content-center container-xl ' >
        
        <form onSubmit={HandSubmit} >  
        <div className={styles.size}>
         <h2>BuildBox</h2>
        
          <div className="mb-3 mx-2">
           

          <input type="text" 
          className="form-control bg-light opacity-25 text-bold "
          name='title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Digite seu Nome."/>
          
          </div>
          <div className="mb-b mx-2">
        
          <textarea 
           className="form-control bg-light opacity-25"  id="exampleFormControlTextarea1"
           name='body'
           value={body}
           onChange={(e) => setBody(e.target.value) }
           rows="3" 
           placeholder="Mensagem."></textarea>
          
          </div>

          
          {!response.loading &&
          <button className='btn btn-dark my-4 mx-2 float-end' >Publicar</button> }
          
          {response.loading && (<button className='btn btn-dark my-4 mx-2 float-end' >Carregando...</button> )}
        
        
         </div>  
        
         
         {errorform && <p>{errorform}</p> }
         {loading && <p>carregando posts ..... </p> }
    
        
         {post &&  post.length === 0 && ( <div>    <h1 className='text-center' > Nenhum post aqui ainda ....</h1>
         <Link to={'/post/create'} className='btn lean' >Crie seu Primeiro post.</Link>
          </div>) } 

         {post && post.map((posts) =><DetalsPost key={posts.id} posts={posts} /> 
         )}

 
     </form> 
    
    </div>  )
}

export default Home