import React from 'react'

import { useFethingDocuments } from '../../hoock/useFecthingdates'
import { useValueAuth } from '../../Contextmanage/authcontext'
import { Link } from 'react-router-dom'
import { useDeleteDoc } from '../../hoock/useDeleted'


const Dashboard = () => {
  const {DeletedId} = useDeleteDoc("posts")
  
  const{user} = useValueAuth()
   const uid = user.uid
  console.log('USER',user)
 
  const {document:post, loading} = useFethingDocuments('posts', null,uid)

  console.log('documents here', post)
  
   
  if(loading){
    <p> Carregando.....</p>
  }




  return(<div className='d-flex flex-column justify-content-center align-items-center text-center ' >
    
  <h1 >Dashboard.</h1>
  <p  className='lead'> Edite ou exclua seus posts.</p>

   {post && post.lenght === 0 ? (<div >
     <p>Nenhum post here</p>
     <Link className='lead' to={'/post/create' }>Crie seu primeiro post</Link>
   </div>) : 
   
    (<div className='text-center'>
      {post && post.map((posts) => ( <div key={posts.id}> 
       {posts.title}
        
        <div className="btn-group mx-4 my-2 " role="group">
        <Link to={`/post/${posts.id}`} className='btn btn-outline-success active' >Ver</Link>
        <Link to={`/post/edit/${posts.id}`}  className='btn btn-outline-danger active' >Editar</Link>
         
        <button className='btn btn-outline-warning active'  onClick={() => DeletedId(posts.id) }  >Excluir</button> 
       
       </div>
      
      </div> ))}
   
   </div>)
   
    }

  

  </div>)


}

export default Dashboard