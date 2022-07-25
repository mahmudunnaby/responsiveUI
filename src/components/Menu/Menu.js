import React from 'react';
import styles from './Menu.css'
import { AiFillCaretDown } from 'react-icons/ai';
import add from '../../assets/Vector.png'


const Menu = () => {
    return (
        <div className='container'>
            <div className='d-flex justify-content-between align-items-end'>
                <div className='menu-list'>
                    <p className='menu-items hover-underline-animation'>All Posts(32)</p>
                    <p className='menu-items hover-underline-animation'>Article</p>
                    <p className='menu-items hover-underline-animation'>Event</p>
                    <p className='menu-items hover-underline-animation'>Education</p>
                    <p className='menu-items hover-underline-animation'>Job</p>
                </div>
                <div>
                    <div type="button " className="btn-text btn btn-light">Write a Post
                        <AiFillCaretDown className='ms-2' />
                    </div>
                    <div type="button " className="btn btn-primary">
                        <div >
                            <img className='ms-2 image-icon' src={add} alt="" />
                            Join Group
                        </div>
                    </div>
                </div>
            </div>
            <div className='underline'></div>

        </div>
    );
};

export default Menu;