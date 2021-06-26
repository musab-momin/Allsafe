import React from 'react'
import Commmon from './Common'
import web from '../Images/ehack.png';

const About = ()=>
{
    return (<>
        <Commmon title='About ' 
        description='is a securtiy Guard of IT world. we provide securtiy against Black-Hat Hackers and against dangerous cyber attacts like DDos, SQL Injection, Broken Authentication, Cross-Site Scripting and many more...'
        imageTitle={web}
        />
    </>);
}


export default About;