import React       from 'react';
import Question    from '../src/components/Question.js';
import { shallow } from 'enzyme';

const props = { question: 'test_question', answer: 'test_answer', value: 1 };
const question = shallow(<Question {...props}/>);

describe('Testing the <Question /> Component', () => {

    it('renders the question', () => {
        console.log(question.debug());
        expect(question.find('h4').at(0).text()).toEqual('test_question');
    });

    it('renders the value', () => {
        expect(question.find('h4').at(1).text()).toEqual(' 1 ');
    });

    describe('clicking the question to reveal and hide answer', () => {
        
        it('changes value of reveal when question is clicked on ',() =>{
            question.find('h4').at(0).simulate('click');
            expect(question.instance().state.reveal).toEqual(1);
            question.find('h4').at(0).simulate('click');
            expect(question.instance().state.reveal).toEqual(2);
        });
    });

    describe('revealing answer when reveal is odd and hiding when it is even', () => {
        it('hides answer when reveal is even ', () => {
            question.setState({reveal: 0});
            expect(question.find('h4').length).toBe(2);
        });

        it('reveals answer when reveal is odd ', () => {
            question.setState({reveal: 1});
            expect(question.find('h4').at(2).exists()).toBe(true);
        });
    });
});