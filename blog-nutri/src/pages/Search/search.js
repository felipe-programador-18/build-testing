import { Link } from 'react-router-dom'
import React from 'react'
import { useFethingDocuments } from '../../hoock/useFecthingdates'
import { useQuery } from '../../hoock/useQuery'

import DetalsPost from '../../Component/Post.details'

const SearchDeates = () => {
   
    const query = useQuery()
    const search = query.get("q")

    const {document:post} = useFethingDocuments('posts', search)
    console.log('what have here search ?', post)


    return(<div className='justify-content-center align-items-center' >
           
        <h1>Verify Search!</h1>
          
         {post && post.lenght === 0 && (<p>
            Nenhum post encontrado aqui!!!
            <Link className='btn bg-warning align-items-center' > Voltar </Link>
         </p>) } 


        {post && post.map((posts) => (
         <DetalsPost  key={posts.id}  posts={posts} />
        ))}

    </div>)
}

export default SearchDeates