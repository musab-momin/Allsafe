import React from 'react';
import Footer from './Footer';
const Commmon = (props)=>{
    return (
    <>
        <section className='container main'>
            <div className='intro'>
                <h2>{props.title}<span>AllSafe</span></h2>
                <p><span>AllSafe</span> {props.description}</p>
            </div>
            <div className='image-div'>
                <img src={props.imageTitle}></img>
            </div>
        </section>

        <Footer />
    </>
    );
}



export default Commmon;

