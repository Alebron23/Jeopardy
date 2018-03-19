import React from 'react';
import { shallow } from 'enzyme';
import { Categories } from '../src/components/Categories';
import { categories, categoryData } from '../data/fixtures';
import sinon, { fakeServer } from 'sinon';

const mockSetCategory = jest.fn();
const mockAddCategoryData = jest.fn();
let props = { categories, setCategory: mockSetCategory, categoryData, addCategoryData: mockAddCategoryData };
const kategories = shallow(<Categories {...props} />);

//window.fetch = jest.fn(() => new Promise(response => new Promise(json => { json()})));
//fetch = jest.fn(() => new Promise(response => response.json()));

describe('Categories', () => {
    // let server;

    // beforeEach(() => {
    //     server = fakeServer.create();

    //     server.respondWith('GET', 
    //     'http://jservice.io/api/categories?count=20',
    //     [ 200, {'Content-Type': 'application/json'}, JSON.stringify({id: 1, title:'fetch', clues_count: 0}) ]);
    //  });

    it('renders Categories onto the screen', () => {
        expect(kategories.find('h2').text()).toEqual('Categories');
    });

    it('renders the link', () => {
        expect(kategories.find('Link').exists()).toBe(true);
    });

    it('renders the category title passed into props', () => {
        expect(kategories.find('h4').text()).toEqual('test');
    });

    it('calls setCategories when Link is clicked ', () => {
        kategories.find('Link').simulate('click');
        expect(props.setCategory).toHaveBeenCalled();
    });

    
    

    describe('fetching individual category data in our fetchData function', () => {
        it('calls addCategoryData inside the fetch', () => {
            
            window.fetch = jest.fn(() => new Promise(() => new Promise(() => {
                props.addCategoryData();
            })));

            kategories.instance().fetchData();
            expect(props.addCategoryData).toHaveBeenCalled();
        });
    });
    
    describe('fetching data from server in componetDidMount', () => {
        it('responds with data that we set from inside window.fetch',() => {
            let spy = jest.spyOn(kategories.instance(), 'fetchData');
            kategories.setProps({categoryData: [] });
            window.fetch = jest.fn(() => new Promise(() => new Promise(() => {
                kategories.setProps( {categories: [{id: 1, title:'fetch', clues_count: 0}]} )
                kategories.instance().fetchData();
            })));

            kategories.instance().componentDidMount();
            expect(kategories.instance().props.categories[0].title).toEqual('fetch');
            expect(spy).toHaveBeenCalled();
        });
    });
});
