import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

import About from './components/About';
import Infos from './components/Infos';
import ListUser from './components/ListUser';
import Navbar from './components/NavBar';


export default () =>{
  return(
    <Router>
      <Route exact path='/' component={Infos}/>
      <Route exact path='/about' component={About}/>
      <Route exact path='/userlist' component={ListUser}/>
    </Router>
  )
}