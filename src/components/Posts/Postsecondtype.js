import React from 'react';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { AiOutlineEye } from 'react-icons/ai';
import { BsShareFill } from 'react-icons/bs';
import { MdOutlinePlace } from 'react-icons/md';
import { BsBriefcase } from 'react-icons/bs';
import { MdDateRange } from 'react-icons/md';
import Dropdown from 'react-bootstrap/Dropdown';
import styles from './Postssecondtype.css'


const Postsecondtype = ({ post }) => {
    const { picture, topic, name, heading, details, image, place, company, date } = post
    return (
        <div className="card mb-3">

            {picture && <img src={picture} className="card-img-top" alt="..." />}
            <div className="card-body">
                <h5 className='topic'>{topic}</h5>
                <div className=' d-flex justify-content-between align-items-center'>
                    <div>
                        <h5 className="card-title heading">{heading}</h5>
                        <div className='d-flex justify-content-start align-items-center'>
                            {date && <div className=' d-flex justify-content-center align-items-center'> <MdDateRange className='me-2 mb-3' /> <p className='text-property'>{date}</p> </div> || company && <div className=' d-flex justify-content-center align-items-center'> <BsBriefcase className='mb-3 me-2' /> <p className='text-property'>{company}</p></div>}

                            <div className='ms-5 d-flex justify-content-center align-items-center'>
                                <MdOutlinePlace className='mb-3' />
                                <p className='text-property '>{place}</p>
                            </div>
                        </div>
                    </div>

                    <div>


                        <Dropdown>

                            <Dropdown.Toggle variant="light" id="dropdown-basic">
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
                <div className="d-grid gap-2">
                    {company && <button className="btn btn-outline btn-text" type="button">{details}</button> ||
                        <button className="btn btn-outline btn-text-2 " type="button">{details}</button>}
                </div>
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

export default Postsecondtype;