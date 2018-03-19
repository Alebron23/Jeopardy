import React, { Component } from 'react';

/**
 * Question class that displays the question, points value, and answer
 * @class
 */
class Question extends Component {

  /** @constructor */
  constructor() {
    super();

    /**
     * @type {object} 
     * @property {string} reveal - # to mod to reveal answer
     * */
    this.state = {
      reveal: 0
    }
  }

  /**
   * render the question, value and, if clicked on, the answer of that question
   * @function
   * @return {ReactElement}
   */
  render() {
    return (
      <div className="question" onClick={() => this.setState({ reveal: this.state.reveal + 1 })}>
        <h4 className="element"> {this.props.question} </h4>

        <h4 className="element"> {this.props.value !== null ? <div><hr /> {this.props.value} </div> : ''}</h4>

        {(this.state.reveal % 2) === 1 ? <div className='answer'><hr /><h4 className="element"> {this.props.answer} </h4></div> : ''}
      </div>
    )
  }
}

export default Question;