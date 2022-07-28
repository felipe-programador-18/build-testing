import React, { useState, useEffect } from 'react'
import { db } from '../Managefirebase/firebase'
import {
    getAuth,
    createUserWithEmailAndPassword,
    updateProfile,
    signOut,
    signInWithEmailAndPassword
 } from 'firebase/auth'



export const useAuth  = () => {
   
   const [loading, setLoading]= useState(null)
   const [error, setError] = useState(null)
   const [cancelled, setCalled] = useState(null)
   
   const auth = getAuth()

   function checkMemoryleak(){
    if(cancelled){
     return;
    }
   } 

   const CreateUser = async (data) => {
      checkMemoryleak()
      setLoading(true)
      setError('')
    
     try {
        const {user} = await createUserWithEmailAndPassword(
            auth,
            data.email,
            data.password
        ) 
         
        await updateProfile(user,{
            displayName:data.displayName
        }
        )
       
       setLoading(false)
       return user ;
     }catch (error) {
        console.log(error.message)
        console.log(typeof error.message) 
        
        let systemErrorUser;
        
        if(error.message.includes("Password")){
            systemErrorUser ="A senha precisa ser com pelo menos 6 caracteres!!"   
        }else if (error.message.includes("email-already")){
            systemErrorUser = 'Email- já cadastrado'
        } else {
        systemErrorUser ="Ocorreu um erro, tente mais tarde!"
      } 

       setLoading(false)
       setError(systemErrorUser)  
    }

   }


   // this verify function !!
   useEffect(() => {
    return () =>  checkMemoryleak(true)
   },[])


 return {auth,CreateUser, error, loading}
}