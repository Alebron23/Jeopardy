import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setQuestion } from '../actions/index.js'
import Question from './Question';
import ReactLoading from 'react-loading';

/** Display list of <Question /> components pertaining to the <Category /> 
 * @class
*/
export class Category extends Component {

  /** Set the Category that was picked from the list categories
   * @function
   */
  componentDidMount() {
    /** The categories in categoryData are not in the same order as they are in the categories array
     *  so you have to get the id from the categories array and then search the categoryData for the matching id
     *  to set that item so the correct questions are displayed for the category that was clicked. 
     */
    this.props.categoryData.map((category, index) => {
      if (category.id === this.props.categories[this.props.category].id) {
        this.props.setQuestion(this.props.categoryData[index]);
      }
    });

  }

  /**
   * Display jeopardy questions if they are fetched from server, 
   * else display the <ReactLoading /> loading spinner.
   * @function
   * @return {<Question />} - The question component that displays the question, points, and answer.
   * @return {<ReactLoading />} - Loading spinner to be returned while data is fetched. 
   */
  displayQuestions = () => {
    if (this.props.question.clues !== undefined) {
      return this.props.question.clues.map(clue =>
        <h4 key={clue.id}><Question question={clue.question} answer={clue.answer} value={clue.value} /></h4>
      );
    } else {
      return <div className="loader"><ReactLoading /></div>
    }
  }

  /**
   * render title of category, link back to all categories, and
   * questions to that category. 
   * @return {ReactElement}
   */
  render() {
    return (
      <div className='container'>
        <div className='element nav'>
          <h2>{this.props.question.title}</h2>
          <Link className='categories' to='/' onClick={() => this.props.setQuestion([])}>Categories</Link>
        </div>
        {
          this.displayQuestions()
        }
      </div>
    )
  }
}

/**
 * Connects state in redux store to our props. 
 * @param {*} state - data on state we want available to props 
 */
function mapStateToProps(state) {

  /**
   When you use combine reducers, you have to specify state.categories or state.whatever and
   not just state or else it gives you error.  
   */
  return { category: state.category, question: state.question, categoryData: state.categoryData, categories: state.categories }
}

export default connect(mapStateToProps, { setQuestion })(Category);
