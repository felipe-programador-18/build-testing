import { Link } from 'react-router-dom'

import { useSearchParams } from 'react-router-dom'
import React from 'react'
import { useFethingDocuments } from '../../hoock/useFecthingdates'

import DetalsPost from '../../Component/Post.details'

const SearchDeates = () => {
   
    const query = useSearchParams()
    const search = query.get('q')

    const {document:post} = useFethingDocuments('posts', search)
   


    return(<div className='d-flex justify-content-center align-items-center' >
           
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