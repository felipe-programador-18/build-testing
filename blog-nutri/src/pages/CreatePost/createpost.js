import { useState, useEffect } from "react"




const CreatePost = () => {
  
    const[title, setTitle] = useState('')
    const[post, setPost] = useState('')
    const[tags, setTags] = useState([])
    const [image, setImage] = useState('')
    const [body, setBody] = useState('')
    

    
    
    
    useEffect(() => {

    },[])




    return(<div classNameName='d-flex flex-collumn ' >
           <h1>Create post here</h1>
             

             <form>
             <div className="mb-3">
              <label  className="form-label"> <span>Título</span> </label>
             <input type="text" className="form-control"  placeholder="Pense num bom título .... "/>
             </div>

             <div className="mb-3">
              <label  className="form-label"> <span>Url da Imagem.</span> </label>
             <input type="text" className="form-control"  placeholder="Adicione a Imagem que representa seu Título .... "/>
             </div>


             <div className="mb-3">
             <label className="form-label"> <span>Conteúdo....  </span></label>
             <textarea className="form-control" placeholder="Escreve suas ideias aqui"  rows="3"></textarea>
             </div>
             
             <div className="mb-3">
              <label  className="form-label"> <span>Tags</span> </label>
             <input type="text" className="form-control"  placeholder="Palavra chave.. "/>
             </div>
               
               <button className="btn btn-dark" >Carregando..</button>
               <button className="btn btn-danger"> Aguarde.. </button>

             </form>



    </div>)

}

export default CreatePost