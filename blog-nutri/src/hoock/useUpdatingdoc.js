import {useEffect, useState, useReducer} from 'react'
import { db } from '../Managefirebase/firebase'
import { updateDoc, doc } from 'firebase/firestore'


const Initial_State = {
    loading: null,
    error: null
}

const DispatchUpdate = (state, action) => {
    switch(action.type){
        case "LOADING":
            return {loading: true, error: null}
        case "UPDATE_DOC" :
           return {loading:false, error: null }
        case "ERROR"  :
           return {loading:false, error: action.payload}
        default:
            return state
                 
    }
}

export const useUpdateDate = (docCollection) => {    
     const[response, dispatch]= useReducer(Initial_State, DispatchUpdate)
    
     const [cancelled, setCalled]= useState(false)
     const Controllmemoryleak = (action) => {
        if(cancelled){
            dispatch(!action)
        }
      } 

        const UpdateMyDoc = async (data, id) => {
            Controllmemoryleak({
                type:'LOADING'
            })
         
        try {
          const GetDate = await doc(db,docCollection, id)
          const update = await updateDoc(GetDate, data)   
          console.log('testing here', update)
        
          Controllmemoryleak({
            type:'UPDATE_DOC',
            payload: update
          })

         } catch (error) {
            Controllmemoryleak({
                type:"ERROR",
                payload: error.message
            })
         }


        }


       
   

     
     useEffect(() => {
        return () => setCalled(true)
     })
         

    return{UpdateMyDoc, response}
}