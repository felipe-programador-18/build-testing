import { useState, useEffect } from "react"
import { UseInsertDocument } from "../../hoock/useInsertDocument"

import {useNavigate } from 'react-router-dom'

import { useValueAuth } from "../../Contextmanage/authcontext"

 
const CreatePost = () => {
    const[title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [body, setBody] = useState('')
    const[tags, setTags] = useState([])
    const [errorform,setErrorFor] = useState('')
   
    const{user} = useValueAuth()
    //const {error:authError,  loading} = useAuth()


    const navigate = useNavigate()

   
    const {InsertDocument,response} = UseInsertDocument("posts")
   
    const HandSubmit = (e) => {
     e.preventDefault()
     setErrorFor("")
      
     const tagsArrays = tags.split(",").map((tag) => tag.trim().toLowerCase())
     
      if(!title || !body || !body || !tags){
       setErrorFor("Por favor preencha todos os campos!")
      }

     try{
       new URL(image)
     } catch (error) {
      setErrorFor("A imagem precisa ser uma url")
     }
     if(errorform) return;

     InsertDocument({
      title,
      image, 
      body,
      tags:tagsArrays,
      uid: user.uid,
      createdBy: user.displayName
     })


     navigate('/') 
     
    } 
    
    
    
    useEffect(() => {

    },[])




    return(<div classNameName='d-flex flex-collumn ' >
           <h1>Create post here</h1>
             

             <form onSubmit={HandSubmit} > 
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

            {!response.loading &&  <button className="btn btn-dark" >Cadastrar</button> } 

            {response.loading && ( <button className="btn btn-danger"> Aguarde.. </button> ) }


            {response.error && <p> {response.error} </p> }    
            {errorform && <p>{errorform} </p>  }   
            

             </form>



    </div>)

}

export default CreatePost