import { Link } from "react-router-dom"

const DetalsPost = ({posts}) => {
    console.log("testing here", posts)
    return(<div className="d-flex justify-content-center align-items-center" >
        <div>
            <p>{posts.title} - {posts.createdBy} </p>
        </div>

        {posts && posts.tags.map((tag) => (<p key={tag} >
            <span> {tag.tag} </span> 
        </p>))}
        
         
         <Link   to={`/post/${posts.id}`} className="btn bg-danger" >Ler.</Link>

    </div>)

}

export default DetalsPost