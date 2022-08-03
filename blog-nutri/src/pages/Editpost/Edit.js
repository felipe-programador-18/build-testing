import React,{useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useValueAuth } from '../../Contextmanage/authcontext'

import { useUpdateDate } from '../../hoock/useUpdatingdoc'
import { useFetDoc } from '../../hoock/useFetchiDoc'



const EditPost = () => {
  const {id} = useParams() 
  const {user} = useValueAuth()

  const {document:post} = useFetDoc("posts", id)
  console.log("my post  here", post)
  const { UpdateMyDoc, response } = useUpdateDate("posts")

  const navigate  = useNavigate()
 
  const[title, setTitle] = useState('')
  const[tags, setTags] = useState([])
  const [image, setImage] = useState('')
  const [body, setBody] = useState('')  
  const [errorform, setErrorFor]= useState(false)
   
  
   
  useEffect(() => {
     if(post){
      setTitle(post.title)
      setImage(post.image)
      setBody(post.body)
      
      const TestTags = post.tags.join(", ")
      setTags(TestTags)
     }
  },[post])


  const HandlSubmit = (e) => {
   e.preventDefault()
   setErrorFor("") 
   
   const setTags = tags.split(",").map((tag) => tag.trim().toLowerCase() )
     
   try {
     new URL(image)
   } catch (error) {
     setErrorFor("A Imagem Precisa ser uma Url !")
   }   
    
   if(errorform) return;

   const data = {
      title,
      body,
      image,
      tags: setTags,
      uid: user.uid,
      createBy: user.displayName  
   }

   UpdateMyDoc(id,data) 
   navigate("/dashboard")
  }  

   




   return(<div className='text-center' >

            {post && ( <>

             <h3>Edit posts.</h3>


             <div classNameName='d-flex flex-collumn ' >
           <h1>Create post here</h1>
             

             <form onSubmit={HandlSubmit} > 
             <div className="mb-3">
              <label  className="form-label"> <span>Título</span> </label>
             <input type="text"
              name='Title'
              value={title} 
              className="form-control" 
              placeholder="Pense num bom título .... "
              onChange={(e) =>  setTitle(e.target.value)}
              />
             </div>

             <div className="mb-3">
              <label  className="form-label"> <span>Url da Imagem.</span> </label>
             <input type="text"
              name='image'
              value={image}
              className="form-control" 
               placeholder="Adicione a Imagem que representa seu Título .... "
               onChange={(e) => setImage(e.target.value)}
               />
             </div>
             <p>Preview da Imagem</p>
             <img src={post.image} alt={post.title} />

             <div className="mb-3">
             <label className="form-label"> <span>Conteúdo....  </span></label>
             <textarea
              name="body"
              value={body} 
              className="form-control"
              onChange={(e) => setBody(e.target.value)}
              placeholder="Escreve suas ideias aqui"  
              rows="3"
              ></textarea>
             </div>
             
             <div className="mb-3">
              <label  className="form-label"> <span>Tags</span> </label>
             <input type="text"
              name='tags'
              value={tags}
              className="form-control"  
              placeholder="Palavra chave.. "
              onChange={(e) => setTags(e.target.value)}
              />
             </div>
                
                <button className='btn  bg-primary  lead ' >Editar post.</button>
           

             </form>
        
          </div>
             </>)}



   </div>) 

}



export default EditPost