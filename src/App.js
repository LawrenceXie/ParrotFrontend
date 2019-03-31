import React, { Component } from 'react';
import Checkout from './components/Checkout';
import Input from './components/Input';

class App extends Component {
  render() {
    return (
      <div className="App">
         <Input/>
         
         <Checkout/>
       
      </div>
    );
  }
}

export default App;
