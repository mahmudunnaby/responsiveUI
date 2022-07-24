import React from 'react';
import { InputGroup, Form } from 'react-bootstrap';
import { AiOutlineSearch, AiFillCaretDown } from 'react-icons/ai';
import image from '../../assets/whole.png'
import styles from './Navbar.css'

const Navbar = () => {
    return (
        <nav className=''>
            <div className='container'>
                <div className='d-flex justify-content-between align-items-center   my-2'>
                    <img src={image} alt="" />



                    <div className=" ps-3 input-group search-box  d-flex justify-content-center align-items-center">
                        <AiOutlineSearch />

                        <input type="text" className="form-control  mx-3" id='search-box-2' placeholder='Search for your favorite groups in ATG' />


                    </div>


                    <div className='create-account'>
                        <p className='create-account-text mt-3'>Create account. <span className='create-account-text-2'>It’s free!</span></p>
                        <AiFillCaretDown />
                    </div>

                </div>

            </div>

        </nav >
    );
};

export default Navbar;