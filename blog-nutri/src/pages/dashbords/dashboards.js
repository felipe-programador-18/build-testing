import React from 'react'
import styles from './dash.module.css'
import {BsXSquareFill} from 'react-icons/bs'

import { useFethingDocuments } from '../../hoock/useFecthingdates'
import { useValueAuth } from '../../Contextmanage/authcontext'
import { Link } from 'react-router-dom'
import { useDeleteDoc } from '../../hoock/useDeleted'


const Dashboard = () => {
  const {DeletedId} = useDeleteDoc("posts")
  
  const{user} = useValueAuth()
  // const uid = user.uid
  console.log('USER',user)
 
  const {document:post, loading} = useFethingDocuments('posts', null,)

  console.log('documents here', post)
  
   
  if(loading){
    <p> Carregando.....</p>
  }




  return(<div className='text-center ' >
    


   {post && post.lenght === 0 ? (<div >
     <p>Nenhum post here</p>
     <Link className='lead' to={'/post/create' }>Crie seu primeiro post</Link>
   </div>) : 
   
    ( <> 
      
      {post && post.map((posts) => ( <div className={styles.cardsize} key={posts.id}>

      <p className="badge float-start"> Feed</p>

      <Link to='/' className='float-end m-2' > 
      <button onClick={() => DeletedId(posts.id) }  >
        <BsXSquareFill  />
      </button> 
      </Link>
      <p className="text-break" >{posts.title}</p>
      <h6 className="text-break fst-italic" > {posts.body} </h6>
      <p> Criado por: {posts.createdBy}</p>
      </div> ))}
   
      </> )
    }
  </div>)


}

export default Dashboard