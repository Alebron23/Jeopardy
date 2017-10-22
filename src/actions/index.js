export const SET_CATEGORIES    = 'SET_CATEGORIES';
export const SET_CATEGORY      = 'SET_CATEGORY';
export const SET_QUESTION      = 'SET_QUESTION'; 
export const ADD_CATEGORY_DATA = 'ADD_CATEGORY_DATA';

export function setCategories(categories) {
    return {
        type: SET_CATEGORIES, 
        categories: categories
    }
}

export function setCategory(category) {
    return {
        type: SET_CATEGORY,
        category
    }
}

export function setQuestion(question) {
    return {
        type: SET_QUESTION,
        question
    }
}

export function addCategoryData(categoryData) {
    return {
        type: ADD_CATEGORY_DATA,
        categoryData    
    };
}

