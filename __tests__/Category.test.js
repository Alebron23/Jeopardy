import React from 'react';
import { shallow } from 'enzyme';
import { Category } from '../src/components/Category.js';
import { question, category, categoryData, categories } from '../data/fixtures.js';

const setQuestionMock = jest.fn();
let props = { category, question, setQuestion: setQuestionMock, categoryData, categories };
const kategory = shallow(<Category {...props} />);
 
describe('Testing Category Component', () => {

  it('renders title from question props', () => {
    expect(props.question.title).toEqual('test_title');
  });

  it('renders link back to Categories', () => {
    expect(kategory.find('Link').exists()).toBe(true);
  });

  it('renders the Question component when question.clues is defined', () => {
    expect(kategory.find('Question').exists()).toBe(true);
  });

  it('calls setQuestion action when Link is clicked on', () => {
    kategory.find('Link').simulate('click');
    expect(props.setQuestion).toHaveBeenCalled();
  });

  it('calls displayQuestions class function', () => {
    let spy = jest.spyOn(kategory.instance(), 'displayQuestions');
    kategory.instance().forceUpdate();
    expect(spy).toHaveBeenCalled();
  });

  it('does`nt dipslay Question Component if question.clues is undefined', () => {
    kategory.setProps({ qeustion: {} });
    expect(kategory.find('Question').exists()).toBe(true);
  });

  describe('fetching data from server', () => {
    it('responds with data', () => {
      kategory.instance().componentDidMount();
      expect(props.setQuestion).toHaveBeenCalled();     
    });
  });
});