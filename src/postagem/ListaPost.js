import React from 'react';
import Post from './Post';

const ListaPost = ({postagens}) => {
    return (
        // Receber uma lista de post
        <div className="form-group">
            <h1>Lista post</h1>
            {
                postagens.map((post) => <Post post={post}/>)
            }
           
        </div>
    )
}

export default ListaPost;