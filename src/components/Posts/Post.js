import React from 'react';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { AiOutlineEye } from 'react-icons/ai';
import { BsShareFill } from 'react-icons/bs';
import Dropdown from 'react-bootstrap/Dropdown';
import styles from './Post.css'



const Post = ({ post }) => {
    const { picture, topic, name, heading, details, image } = post
    return (
        <div className="card mb-3">
            <img src={picture} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className='topic'>{topic}</h5>
                <div className=' d-flex justify-content-between align-items-center'>
                    <h5 className="card-title heading">{heading}</h5>
                    <div>


                        <Dropdown >

                            <Dropdown.Toggle className='dropdown-clr' variant="light" id="dropdown-basic">
                                <BiDotsHorizontalRounded />
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Report</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Option 3</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>

                </div>
                <p className="card-text">{details}</p>
                <div className=' d-flex justify-content-between align-items-center'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <img src={image} alt="" />
                        <h5 className='ms-2'>{name}</h5>
                    </div>

                    <div className='d-flex justify-content-between  align-items-center'>
                        <div className='align-bottom d-flex justify-content-center align-items-center'>
                            <AiOutlineEye />
                            <p className=' mt-3'>1.4k views</p>
                        </div>
                        <BsShareFill className='ms-5' />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Post;