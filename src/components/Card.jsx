import React from 'react'
import web from '../Images/ehack.png';

const Card = (props)=>
{
    return (
    <>
    
            <div className='card'>
                <div className='card-head'>
                    <img src={props.imgSrc} alt='not found' />
                </div>
                <div className='card-body'>
                    <h3 style={{color: '#111', fontWeight: '600'}}>{props.title}</h3>
                    <p>{props.content}</p>
                </div>
            </div>
    </>);
}


export default Card;