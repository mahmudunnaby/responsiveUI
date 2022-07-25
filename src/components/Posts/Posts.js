import React, { useEffect, useState } from 'react';
import Post from './Post';


const Posts = () => {

    const [posts, setPosts] = useState([])

    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])


    return (
        <div>
            {products.length}
            {posts.map(post => <Post key={post._id} post={post}> </Post>)}
        </div>
    );
};

export default Posts;