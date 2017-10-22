import React, { Component } from 'react';
import Categories from './Categories.js'

class App extends Component {
        
render() {
            return(
                <div className='container'>  
                     <h2 className='heading main nav'>Jeopardy</h2>
                     <Categories />
                </div>
             )
        }
    }

export default App;