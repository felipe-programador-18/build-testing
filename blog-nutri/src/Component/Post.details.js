import { Link } from "react-router-dom"

const DetalsPost = ({post}) => {

    return(<div className="d-flex justify-content-center align-items-center" >
        <div>
            <p>{post.title}</p>
        </div>
        
         
         <Link className="btn bg-danger" >Ler.</Link>

    </div>)

}

export default DetalsPost