import React from 'react'
import { useFethingDocuments } from '../../hoock/useFecthingdates'
import { Link } from 'react-router-dom'
import DetalsPost from '../../Component/Post.details'
import styles from './Save.module.css'




const ManagePost = () => {
    const{document:post, loading} =  useFethingDocuments("posts")

    console.log("testing here", post)

  return ( 
  <div className={styles.App} >   
    <div className='align-items-center'>
      
      {loading && <p>carregando posts ..... </p> }
    
        
      {post &&  post.length === 0 && ( <div>    <h1 className='text-center' > Nenhum post aqui ainda ....</h1>
     </div>
      )} 
       
    <DetalsPost/>    
      
  </div> 
 
 </div> 
 )
}

export default ManagePost