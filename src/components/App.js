import React, { Component } from 'react';
import Categories from './Categories.js'

/**
 * our app component acts as a wrapper for all our other components 
 * @class
 */
class App extends Component {
        
/**
 * Displays our Categories component that displays list of categories
 * @function 
 * @return {ReactElement}
 * */
render() {
            return(
                <div className='container'>  
                     <h2 className='element title nav'>Jeopardy</h2>
                     <Categories />
                </div>
             )
        }
    }

export default App;