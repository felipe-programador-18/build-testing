import  { useState, useEffect, useReducer } from 'react'
import { db } from '../Managefirebase/firebase'
import { collection, addDoc, Timestamp } from 'firebase/firestore'



const Initial_State ={
    loading: null,
    error: null
}
 

const InsertReducer = (state, action) => {
    switch(action.type){
        case "LOADING" :
            return {loading:true, error: null}
        case "INSERT_DOC" :
            return {loading:false, error: null}
        case "ERROR" :
            return {loading:false, error:action.payload}
       default:
        return state
                   
    }
}


export const UseInsertDocument =  (docCollection) => {
    const [response, dispatch]= useReducer(Initial_State, InsertReducer)
    
    const [cancelled, setCalled] = useState(false)

    const checkBeforeleak = (action) => {
        if(!cancelled){
         dispatch(action);
        }
    } 
  
     
    const InsertDocument = async(document) => {
        checkBeforeleak({
            type:'LOADING'
        }) 
       try {
        const newDoc = {...document, createdAT: Timestamp.now()}
        
        const AddDate = await addDoc(collection(db,docCollection), newDoc)

        checkBeforeleak({
            type:"INSERT_DOC",
            payload: AddDate
        })
        
       } catch (error) {
        checkBeforeleak({
            type:"ERROR",
            payload: error.message
         })

       }

    }

    useEffect(() => {
        return () => setCalled(true)
    },[]) 

return {InsertDocument, response}

}

