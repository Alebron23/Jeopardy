import rootReducer from '../src/reducers/index.js';
import * as actions from '../src/actions/index.js';
import { categories, category, question, categoryData } from '../data/fixtures.js';

describe('root reducers', () => {
  it('returns initial state', () => {
    expect(rootReducer({}, {})).toEqual({ categories: [], category: [], categoryData: [], question: [] });
  });

  it('sets categories', () => {
    expect(rootReducer({}, { type: actions.SET_CATEGORIES, categories })).toEqual({ categories, category: [], categoryData: [], question: [] })
  });

  it('sets category', () => {
    expect(rootReducer({}, { type: actions.SET_CATEGORY, category })).toEqual({ categories: [], category, categoryData: [], question: [] });
  });

  it('sets categoryData', () => {
    expect(rootReducer({}, { type: actions.ADD_CATEGORY_DATA, categoryData })).toEqual({ categories: [], category: [], categoryData: [categoryData], question: [] });
  });

  it('sets question data', () => {
    expect(rootReducer({}, { type: actions.SET_QUESTION, question })).toEqual({ categories: [], category: [], categoryData: [], question });
  });
});