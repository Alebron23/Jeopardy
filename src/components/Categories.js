import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCategories, setCategory, addCategoryData  } from '../actions/index.js';
import { Link } from 'react-router-dom';

/**
 * class that displays jeopardy categories
 * @class
 */
export class Categories extends Component {

  /**
   * fetch the jeopardy categories from a jeopardy api
   * @function
   */
  componentDidMount() {
    /** if the categoryData is already set then we don't need to fetch.*/ 
    if(this.props.categoryData.length === 0) {
      fetch('http://jservice.io/api/categories?count=20')
        .then(response => response.json())
        .then(json => {
            this.props.setCategories(json);
            this.fetchData();
        });
    }
  } 
  
  /**
   * fetch question object for our individual categories
   * @function
   */
  fetchData = () => {
    this.props.categories.map(category => {
      let url = 'http://jservice.io/api/category?id=' + category.id;

      fetch(url)
      .then(response => response.json())
      .then(json => {
        this.props.addCategoryData(json)
      });
    });
  }

  /**
   * display a link for the category to the questions pertaining to it. 
   * @function
   * @return {ReactElement}
   */
  render() {
    return(
      <div className='container element'>
        <h2>Categories</h2>
        { 
           this.props.categories.map((category, index) => {
            return <Link to='/category' 
                         key={category.id} 
                         onClick={() => { this.props.setCategory(index) }}
                    >
                      <h4>{category.title}</h4>
                    </Link> 
          })  
        }
      </div>
    )
  }
}

/**
 * provide state from our store to our props. 
 * @function
 */
function mapStateToProps(state) {
  // Categories is what we want to be available on our props. 
  // When you use combine reducers, you have to specify state.categories or state.whatever and 
  // not just state or else it gives you error. 
  return { categories: state.categories, categoryData: state.categoryData}
}

export default connect(mapStateToProps, { setCategories, setCategory, addCategoryData })(Categories);