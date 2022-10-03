import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
//import App from './Pure Components Demo/App';
//import App from './Context API/App';
//import App from './HOC Demo/App';
//import App from './react router demo/App';
import App from './forms in react/App';
import userStore from './forms in react/store/userStore';

//import App from './time excercise/App';


ReactDOM.render(


  <Provider store={userStore}>
  <App/> 
  </Provider>,
  document.getElementById('root')
);

