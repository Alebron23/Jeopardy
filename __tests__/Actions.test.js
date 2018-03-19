import * as actions from '../src/actions/index.js';
import { categories, category, question, categoryData } from '../data/fixtures.js';

describe('actions', () => {
  it('creates an action to set the categories', () => {
    const expectedAction = { type: actions.SET_CATEGORIES, categories };

    expect(actions.setCategories(categories)).toEqual(expectedAction);
  });

  it('creates an action to set the category id', () => {
    const expectedAction = { type: actions.SET_CATEGORY, category };

    expect(actions.setCategory(category)).toEqual(expectedAction);
  });

  it('creates an action to set the question', () => {
    const expectedAction = { type: actions.SET_QUESTION, question };

    expect(actions.setQuestion(question)).toEqual(expectedAction);
  });

  it('creates an action to addCategoryData', () => {
    const expectedAction = { type: actions.ADD_CATEGORY_DATA, categoryData };

    expect(actions.addCategoryData(categoryData)).toEqual(expectedAction);
  })
});