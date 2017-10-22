export const SET_CATEGORIES    = 'SET_CATEGORIES';
export const SET_CATEGORY      = 'SET_CATEGORY';
export const SET_QUESTION      = 'SET_QUESTION'; 
export const ADD_CATEGORY_DATA = 'ADD_CATEGORY_DATA';

/**
 * action creator 
 * @function
 * @param {*} categories - an object with an array of all the jeopardy categories 
 */
export function setCategories(categories) {
    return {
        type: SET_CATEGORIES, 
        categories: categories
    }
}

/**
 * action creator 
 * @function
 * @param {*} category - an object with an array of all the questions pertaining to that category 
 */
export function setCategory(category) {
    return {
        type: SET_CATEGORY,
        category
    }
}

/**
 * action creator 
 * @function
 * @param {*} question - an object with the question, value, answer and other data
 */
export function setQuestion(question) {
    return {
        type: SET_QUESTION,
        question
    }
}

/**
 * action creator 
 * @function
 * @param {*} categoryData - an array of objects containing all the questions for each category
 */
export function addCategoryData(categoryData) {
    return {
        type: ADD_CATEGORY_DATA,
        categoryData    
    };
}

