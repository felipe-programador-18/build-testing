import React from 'react'
import { useFethingDocuments } from '../../hoock/useFecthingdates'
import { Link } from 'react-router-dom'
import DetalsPost from '../../Component/Post.details'


const ManagePost = () => {
    const{document:post, loading} =  useFethingDocuments("posts")

    console.log("testing here", post)

  return ( <div className='align-items-center'>
      Meus Poste!!
      
      {loading && <p>carregando posts ..... </p> }
    
        
      {post &&  post.length === 0 && ( <div>    <h1 className='text-center' > Nenhum post aqui ainda ....</h1>
      <Link to={'/post/create'} className='btn lean' >Crie seu Primeiro post.</Link>
     </div>
      )} 
       

       {post && post.map((posts) =><DetalsPost key={posts.id} posts={posts} /> 
         )}
   
  </div> )



}

export default ManagePost