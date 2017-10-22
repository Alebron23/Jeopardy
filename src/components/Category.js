import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import { connect } from 'react-redux';
import { setQuestion } from '../actions/index.js'
import Question from './Question';
import ReactLoading from 'react-loading';

export class Category extends Component {

    componentDidMount() {
        this.props.setQuestion(this.props.categoryData[this.props.category]);        
    }
  
    displayQuestions = () => {
        if(this.props.question.clues !== undefined){
            return this.props.question.clues.map(clue => 
                <h4 key={clue.id}><Question question={clue.question} answer={clue.answer} value={clue.value} /></h4>
            );
        } else {
            return <div className="loader"><ReactLoading /></div>
        }
    }
      
    render() {
        return(
            <div className='container'>
                <div className='heading nav'>
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

function mapStateToProps(state) {
     
    /**
     When you use combine reducers, you have to specify state.categories or state.whatever and
     not just state or else it gives you error.  
     */ 
    return { category: state.category, question: state.question, categoryData: state.categoryData, index: state.index }
}
  
export default connect(mapStateToProps, { setQuestion })(Category);
