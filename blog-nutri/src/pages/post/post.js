import React from 'react'
import { useFetDoc } from '../../hoock/useFetchiDoc'
import { Link, useParams } from 'react-router-dom'

const PostSeparete = () => {
    const{ id} = useParams()   
    const {document:post, loading, error  } = useFetDoc("posts", id)
    console.log('what have here', post)
    
    return( <div className='text-center' >
         {loading && <p>Carregando posts...</p>}
    
         <h3 className='text-center'>post separados!!!</h3>
         
         {post && (<>
            <h1>{post.title}</h1>
            <img className='img-fluid'  src={post.image} alt={post.title} />
            <p>{post.body}</p>
            
            <h3>Esse poste trata sobre:</h3>

           

            { post.tags.map((tag) => ( <p className='text-danger' key={tag}><span>{tag} </span> </p> ))}
           <Link to='/'  className='btn bg-dark text-light' >Voltar para home.</Link>
         </>)}

  </div> ) 


}

export default PostSeparete