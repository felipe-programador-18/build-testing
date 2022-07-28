import React,{useState, useEffect} from 'react'
import { useAuth } from '../hoock/useAuthTentication'

const CreateLogin = () => {

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [error, setErorr] = useState('')
    const{login,error:authError, loading} = useAuth()  
    
  const HandSubmt = async (e) => {
   e.preventDefault()
   const user ={
    name,
    password
   }
   
  const res = await login(user)
   
   } 

  useEffect(() => {
    if(authError){
    setErorr(true)
    }
  },[authError])


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
      
     {!loading  && <button className="btn btn-primary">Entrar</button> }
     {loading && (<button className='btn btn-primary' > Aguarde ....</button>)} 
        
     {error && <p> {error}</p> }

    </form>
  </div>)



}


export default CreateLogin