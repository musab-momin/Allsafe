import React, { useState } from 'react'

import Footer from './Footer';
const Contact = ()=>
{
    const[data, setData] = useState({
        'name': '',
        'phone': '',
        'email': '',
        'mssg': '',
    });
    const inputEvent = (event)=>
    {
        const{name, value} = event.target;
        setData((preVal)=>
        {
            return{...preVal,[name]:value};

        });
    }
    const submitEvent = (event)=>
    {
        event.preventDefault();
        alert(`Name is ${data.name} phone number is ${data.phone} email is ${data.email} message is ${data.mssg}`);
    }
    return (
    <>
        <div className='container'>
            <div className='form-div'>
                <form onSubmit={submitEvent}>
                    <h2>Contact Us</h2>
                    
                    <div className='input-field'>
                        <input type='text' 
                        placeholder='Enter your name...'
                        name='name'
                        value={data.name} 
                        onChange={inputEvent} />
                    </div>
                    <div className='input-field'>
                        <input type='text' 
                        placeholder='Enter your phone number...' 
                        name='phone'
                        value={data.phone}
                        onChange={inputEvent}
                        />
                    </div>
                    <div className='input-field'>
                        <input type='email' 
                        placeholder='Enter your email...' 
                        name='email'
                        value={data.email}
                        onChange={inputEvent}
                        />
                    </div>
                    <div className='input-field'>
                        <textarea placeholder='Enter your message' rows='10' cols='10'
                        name='mssg'
                        value={data.mssg}
                        onChange={inputEvent}
                        ></textarea>
                    </div>
                    <div className='input-field'>
                        <button type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </>);
}


export default Contact;