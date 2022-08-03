import React, {useState, useReducer, useEffect} from 'react'
import { db } from '../Managefirebase/firebase'
import { doc, deleteDoc } from 'firebase/firestore'

const Initial_State ={
    loading: null,
    error: null
}



const DispatcDeleted = (action, state) => {
   switch(action.type){
    
    case "LOADING"  :
        return {loading: true, error: null}
    case "DELETED_DOC":
        return {loading: false, error: null}
    case "ERROR":
        return {loading: false, error: action.payload}  
    default:
        return state
   }
}






export const useDeleteDoc = (docCollection) => {
   
   const [response, dispatch] = useReducer(DispatcDeleted, Initial_State)
   
     
   const[called, setCalled]= useState(false)
     const TreatLeakMemory = (action) =>{
       if(!called){
        dispatch(action)
       }
     } 

   const DeletedId = async (id) => {
      
     TreatLeakMemory({
        type:'LOADING'
     })
    
    try {
      const docReffe = await deleteDoc(doc(db,docCollection,id))
     
       console.log("testing removed id here", docReffe) 

     TreatLeakMemory({
        type:'DELETED_DOC',
        payload: docReffe
     })

    } catch (error) {
       TreatLeakMemory({
        type:"ERROR",
        payload: error.message
       })  
    }
     
     

   }




    useEffect(() => {
     return () =>  setCalled(true)
    })
 
    return {DeletedId, response}

}