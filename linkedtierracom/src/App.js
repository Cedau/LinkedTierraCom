import React, { Component } from 'react';
import CompMain from './modules/ModMain';
import './App.css';
import { BrowserRouter } from 'react-router-dom'



class App extends Component {
   
    render() {
        return (
            <BrowserRouter>
            <div className="App">
               <CompMain />
            </div>
            </BrowserRouter>
        );
    }
}

export default App;