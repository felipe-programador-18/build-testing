import { db } from "../Managefirebase/firebase";
import { useState, useEffect } from "react";
import { query,
  orderBy,
  collection,
  getDocs,
  where } from 'firebase/firestore'



export const useFethingDocuments=(docCollection, search=null, uid= null) =>{  
  
    const[document, setDocument]= useState(null)
    const[loading, setLoading]= useState(null)
    const [error, setError] = useState(null)
    
    const [cancelled, setCalled] = useState(false)

    useEffect(() => {
          
      const getAllData = async () =>{
       if(cancelled) return ; 
       setLoading(true) 
       
       const docReffered = query(collection(db,docCollection))
       console.log('my refference arrived here ?', docReffered)

        try {
          let q ; 
          q = query (docReffered)  
          
          if(search){
            q= query(docReffered ,where("tags","array-contains", search), orderBy("createdAT","desc"))
            console.log('what have here, IF',search)
          } else if(uid){
            q= query(docReffered ,where("uid" ,"==",uid), orderBy("createdAT","desc"))
          }

          
      
             

          const Snapshoot = await getDocs(q);
          console.log('testing here getNapshot', Snapshoot)    
          
          setDocument( 
              Snapshoot.docs.map(((doc) => ({
                  id: doc.id,
                  ...doc.data()
              })))
          )


         
         setLoading(false)  
        } catch (error) {
            
         console.log('have error here ?', error)
         setError(error.message)
         setLoading(false)
        }
    
        
    }
    getAllData()
    },[docCollection,search, uid, cancelled])    

   
   useEffect(() => {
    return () => setCalled(true)
   },[])

   console.log('here is null', document)
   return {document, loading, error}
}