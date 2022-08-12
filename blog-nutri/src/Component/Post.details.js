import { Link } from "react-router-dom"
import styles from './post.module.css'

import {BsXSquareFill} from 'react-icons/bs'

const DetalsPost = ({posts}) => {
    console.log("testing here", posts)
    //   <BsXSquareFill/> 
    
    return(<div className="text-center" >
        
        <div className=" container-sm  d-flex justify-content-center align-items-center column my-2 " >  
        <div className={styles.sizecard} >
        <p className="badge float-start"> Feed</p>
        
        <h2 className="text-break" >{posts.title}</h2>
        <h5 className="text-break fst-italic" > {posts.body} </h5>
        <p >{posts.createdBy}</p>
     
        <Link to={`/post/meuspost`} >  <BsXSquareFill/> </Link>

        <button className="btn"  >Excluir
        </button>

        
        </div>
        
      </div> 
    </div>)

}

export default DetalsPost