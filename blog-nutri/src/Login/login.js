import React,{useState, useEffect} from 'react'
import { useAuth } from '../hoock/useAuthTentication'

const CreateLogin = () => {

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [error, setErorr] = useState('')
    const{loading,error:authError} = useAuth()  
    
  const HandSubmt = (e) => {
   e.preventDefault()
  } 

  useEffect(() => {
    if(authError){
    setErorr(true)
    }
  },[])


  return( <div classNameName='d-flex flex-collumn' >

    <form onSubmit={HandSubmt} >

    <div className="mb-3">
    <label className="form-label">Email address</label>
    <input type="email" 
     className="form-control"  
     onChange={(e) => setName(e.target.value)} />
    
    <div className="form-text">Nunca compartilhe seu e-mail com ninguém.</div>
    </div>

    <div className="mb-3">
    <label className="form-label">Password</label>
    <input type="password"
     className="form-control" 
     value={password} 
     onChange={(e) => setPassword(e.target.value)}  />
    
    <div className="form-text">Não compartilhe sua senha com Ninguém.</div>
    </div>
      
     {error && <p> {error}</p> }
     {!loading  && <button className="btn btn-primary">Entrar</button> }
     {loading && (<p>Carregando ....</p>)} 
        

    </form>
  </div>)



}


export default CreateLogin