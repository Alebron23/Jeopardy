import { SET_CATEGORIES, SET_CATEGORY, SET_QUESTION, ADD_CATEGORY_DATA } from '../actions/index.js';
import { combineReducers } from 'redux';

/**
 * Reducer
 * @function
 * @param {*} state 
 * @param {*} action - All the categories returned by the jeopardy api
 */
function categories(state = [], action) {
    switch(action.type){
        case SET_CATEGORIES:
            return action.categories
        default:
            return state;
    }
}

/**
 * Reducer
 * @function
 * @param {*} state 
 * @param {*} action - the category with all the questions and info pertaining to it.
 */
function category(state = [], action) {
    switch(action.type) {
        case SET_CATEGORY:
            return action.category
        default: return state;
    }
}

/**
 * reducer
 * @function
 * @param {*} state 
 * @param {*} action  - the question object with its value and answer
 */
function question(state = [], action) {
    switch(action.type) {
        case SET_QUESTION:
            return action.question 
        default: return state;
    }
}

/**
 * reducer
 * @function
 * @param {*} state 
 * @param {*} action - all the questions for the particular category are added to the state 
 * array and then returned to be set in the store so in the end it will be an array 
 * with a bunch of category objects and all the question to that category in the object. 
 */
function categoryData(state = [], action){
    switch(action.type) {
        case ADD_CATEGORY_DATA:
            state.push(action.categoryData);
            return state;
        default: return state;
    }
}

export default combineReducers({categories, category, question, categoryData});