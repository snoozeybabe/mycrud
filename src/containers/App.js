import React, { Component } from 'react';
import './../containers/App.css';
import 'react-dates/initialize';
import NavBar from  './../components/NavBar';


// import Routes from '../routes';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }
  render() {
  //  const { patients } = this.state;
  //TODO : Remove la div App ( vérifier les dépendances )
    return (
        <NavBar/>
    );
  }
}

export default App;
