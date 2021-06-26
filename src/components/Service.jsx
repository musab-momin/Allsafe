import React from 'react'
import Card from './Card';
import Cardata from '../Cardata';
import Footer from './Footer';


const Service = ()=>
{
    console.log('this is working'+Cardata.map((val, index)=>{console.log(val.title)}))
    return (
    <>
    <div className='title'>
            <h2>Services</h2>
        </div>
        <div className='card-section container'>
        {Cardata.map((val, index)=>
       {
           console.log(val.title);
           return <Card key={index} imgSrc={val.imgSrc} title={val.title} content={val.content} />

       })
       }
    </div>
    </>);
}


export default Service;