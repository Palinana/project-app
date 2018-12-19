import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <h2>project app</h2>
                </div>
            </BrowserRouter>  
        );
    }
}

export default App;

