import React from 'react'
import Commmon from './Common'
import web from '../Images/mr.jpg';


const Home = ()=>
{
    return (
    <>
        <Commmon title='WelCome To ' 
        description='provides educators with a suite of cybersecurity and protection tools that maximize the learning potential and well-being of students. The company’s solutions ensure educators are able to reduce distractions while supporting mental health and development, with DNS filtering, accessibility and visibility capabilities to ensure safety while bolstering development. '
        imageTitle={web}/>
        
    </>);
}


export default Home;