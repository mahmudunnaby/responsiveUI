import React from 'react';
import Posts from './Posts';
import Postssecondtype from './Postssecondtype';

const Body = () => {
    return (
        <div className='container'>
            <Posts></Posts>
            <Postssecondtype></Postssecondtype>
        </div>
    );
};

export default Body;