import React from 'react'

import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Contact from './components/Contact';
import { Route, Switch } from 'react-router';
import Navbar from './components/Navbar';
import Common from './components/Common';




const App = ()=>
{
    return (
    <>
        <Navbar />
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/service' component={Service} />
            <Route exact path='/contact' component={Contact} />
        </Switch>

    </>);
}


export default App;