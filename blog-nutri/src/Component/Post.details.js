import { Link } from "react-router-dom"

const DetalsPost = ({posts}) => {
    console.log("testing here", posts)
    return(<div className="align-items-center " >
            <img src={posts.image}  alt={posts.title} className='img-fluid' />
            <h2 className="mx-2" >{posts.title}</h2>
            <p className="mx-2" >{posts.createdBy}</p>


        {posts && posts.tags.map((tag) => (<p className="flex mx-2 " key={tag} >
            <span> {tag} </span> 
        </p>))}
        
         
         <Link   to={`/post/${posts.id}`} className="btn bg-danger" >Ler.</Link>

    </div>)

}

export default DetalsPost