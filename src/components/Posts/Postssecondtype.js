import React, { useEffect, useState } from 'react';
import Postsecondtype from './Postsecondtype';

const Postssecondtype = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('datasecond.json')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])

    return (
        <div>
            {posts.map(post => <Postsecondtype key={post._id} post={post}> </Postsecondtype>)}s
        </div>
    );
};

export default Postssecondtype;