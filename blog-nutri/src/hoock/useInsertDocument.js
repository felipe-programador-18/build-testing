import React, { useState, useEffect, useReducer } from 'react'
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

    function checkMemoryleak(action){
        if(cancelled){
         dispatch(action);
        }
    } 
  
     
    const InsertDocument = async(document) => {
        checkMemoryleak({
            type:'LOADING'
        }) 
       try {
        const InserteddDoc = ({...document, createdAT: Timestamp()})
        
        const AddDate = await addDoc(collection(db,docCollection), InserteddDoc)

        checkMemoryleak({
            type:"INSERT_DOC",
            payload: AddDate
        })
        
       } catch (error) {
         checkMemoryleak({
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

