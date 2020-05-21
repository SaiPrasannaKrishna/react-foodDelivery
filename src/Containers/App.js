import React, { Component } from 'react';
import './App.css';
import Layout from '../Layout/Layout';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStroopwafel,faSearch,faShoppingCart,faBackward,faPlusCircle,faMinusCircle,faUser
,faWindowClose,faTimes,faRobot} from '@fortawesome/free-solid-svg-icons';


library.add(faStroopwafel,faSearch,faShoppingCart,faBackward,faPlusCircle,faMinusCircle,faUser,faWindowClose,faTimes,faRobot)

class App extends Component {
  render() {
    return (
      <div className="App">
      <Layout></Layout>
      </div>
    );
  }
}

export default App;
