import { db } from "../Managefirebase/firebase";
import { useState, useEffect } from "react";
import { doc, getDoc} from 'firebase/firestore'



export const useFetDoc = (docColletion, id) => {
   
    const [document, setDocument]= useState(null)
    const[loading, setLoading] = useState(null)
    const [error, setError] = useState(null)

    const [cancelled, setCalled]= useState(false)

 

     useEffect(() => {
      
      const searchAllDate = async () => {
       if(cancelled) return ;
       
       try {
        const docRef = await doc(db,docColletion, id)
        const getAllDoc = await getDoc(docRef)
        setDocument(getAllDoc.data())
        setLoading(false)
        console.log('verify dates here Felipe Programer', getAllDoc)
         
       } catch (error) {
         setDocument(true)
         setDocument(error.message)
         console.log('here have issues', error)
       }

      }    
      searchAllDate()
    },[docColletion,cancelled, id]);
  
     useEffect(() => {
       return () =>  setCalled(true)
    },[])  

  return {document, loading, error}
}