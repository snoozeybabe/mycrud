// eslint-disable-next-line no-use-before-define
import React, { Component } from 'react';
import './../containers/App.css';
import NavBar from  './../components/NavBar';


import Routes from '../routes';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }
  render() {
    const { patients } = this.state;
    return (
      <div className="App">
      
        <NavBar/>
      </div>
    );
  }
}

export default App;
