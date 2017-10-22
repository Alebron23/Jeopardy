import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'; 
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './components/App.js';
import Category from './components/Category.js'
import rootReducer from './reducers/index.js'
import { setCategories } from './actions/index.js';
import './index.css';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
   <BrowserRouter>
      <Switch>
          <Route exact path='/' component={App} />
          <Route path='/category' component={Category} />
      </Switch>
    </BrowserRouter>
  </Provider>,
    
  document.getElementById('root')
);