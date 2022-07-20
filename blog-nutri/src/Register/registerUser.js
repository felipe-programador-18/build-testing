import React, { useState } from 'react'
import styles from "./register.module.css"


const RegisterUser = () => {
    const [displayName, setDisplayName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState("") 
    const [error, setError] = useState("")
    
    const HandSubmit = (e) => {
     e.preventDefault()

     setError("")

     const user ={
        displayName,
        email,
        password
     }

    }


return(<div>
          <h1>Register your date!!!</h1>
          <form onSubmit={''}>
           
           <label> <span> Seu nome. </span> 
            <input type="text"
             name='displayName'
             value={displayName}
             required 
             placeholder="Nome do usuário."
             onChange={(e) =>  setDisplayName(e.target.value) }
             />
           </label>
           
           <label>   <span>Email.</span> 
            <input type="text" 
            name='email' 
            value={email}
            placeholder='Defina seu email.'
            required
            onChange={(e) => setEmail(e.target.value)  }
            
            />
           </label>
           
           <label> <span>Senha. </span>
            <input 
            type="text"
            name='password'
            placeholder='Crie uma senha.'
            required
            value={password}
            onChange={ (e) =>    setPassword(e.target.value)}
            />
           </label>
           
           <label> Confirma Senha
            <input type="text" 
            name='confirm'
            placeholder='Confirme sua senha, por favor.' 
            required
            value={confirm}
            onChange={(e)=>  setConfirm(e.target.value)}
            />
           </label>
           
           <label>
            <input type="text" />
           </label>

          </form>

</div>)
}

export default RegisterUser
