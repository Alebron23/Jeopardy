import { SET_CATEGORIES, SET_CATEGORY, SET_QUESTION, ADD_CATEGORY_DATA } from '../actions/index.js';
import { combineReducers } from 'redux';

function categories(state = [], action) {
    switch(action.type){
        case SET_CATEGORIES:
            return action.categories
        default:
            return state;
    }
}

function category(state = [], action) {
    switch(action.type) {
        case SET_CATEGORY:
            return action.category
        default: return state;
    }
}

function question(state = [], action) {
    switch(action.type) {
        case SET_QUESTION:
            return action.question 
        default: return state;
    }
}

function categoryData(state = [], action){
    switch(action.type) {
        case ADD_CATEGORY_DATA:
            state.push(action.categoryData);
            return state;
        default: return state;
    }
}

export default combineReducers({categories, category, question, categoryData});