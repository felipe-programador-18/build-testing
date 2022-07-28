import React, { useEffect, useState } from 'react'
import styles from "./register.module.css"
import { useAuth } from '../hoock/useAuthTentication'



const RegisterUser = () => {
    const [displayName, setDisplayName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState("") 
    const [error, setError] = useState("")
    
    
    const {CreateUser, error:authError,  loading} = useAuth()
    
    const HandSubmit = async (e) => {
     e.preventDefault()

     setError("")

     const user ={
        displayName,
        email,
        password
     }
     if(password !== setConfirm  ){
        setError('As senhas precisam ser iguais.')
     }

     const res = await CreateUser(user)

     console.log('what have here ?',user)
    }
    
    useEffect(() => {
     if(authError){
      setError(true)
     }
    },[])

return(<div className='text-center' >
          <h2 >Crie seus primeiros blogs!</h2>
          <p >Register your date!!!</p>
          
           
          <form onSubmit={HandSubmit}>
           
           <div className='mb-3 collumn text-center' >  
           <label   className='col-sm-2 col-form-label' > 
            <div className='col-sm-10' >
              <span>  Nome. </span> 
              <input type="text"
               name='displayName'
               value={displayName}
               required 
               placeholder="Nome do usuário."
               onChange={(e) =>  setDisplayName(e.target.value) }
               readonly className="form-control-plaintext" 
               />
             </div>
           </label>
           </div>  


           <div className='mb-3 collumn' >  
           <label   className="col-sm-2 col-form-label">
           <span>Email.</span>
            
            <div className='col-sm-10' >  
            <input 
             type="text" 
             name='email' 
             value={email}
             placeholder="email@example.com"
             required
             onChange={(e) => setEmail(e.target.value)  }
             readonly className="form-control-plaintext" 
              />
             </div> 
           </label>
           </div>



           <div className='mb-3 collumn' >  
           <label  className='col-sm-2 col-form-label' > <span>Senha. </span>
             <div className='col-sm-10' >  
            <input 
            type="text"
            name='password'
            placeholder='Crie uma senha.'
            required
            value={password}
            onChange={ (e) =>    setPassword(e.target.value)}
            readonly className="form-control-plaintext" 
            />
             </div> 
           </label>
           </div>

           <div className='mb-3 collumn' >  
           <label className='col-sm-2 col-form-label' > <span> Confirmar senha.</span> 
            <div  className='col-xl-10'> 
            <input type="text" 
            name='confirm'
            placeholder='Confirme sua senha, por favor.' 
            required
            value={confirm}
            onChange={(e)=>  setConfirm(e.target.value)}
            readonly className="form-control-plaintext" 
            />
            </div>
           </label>
           </div>

           {!loading && <button className='btn' >Cadastrar</button>}

          {loading && <button  className='btn' disabled >Aguarde......</button>} 

           {error && <p className='error'> {error} </p> }


          </form>
        
         
</div>)
}

export default RegisterUser
