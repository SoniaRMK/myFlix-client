import React from 'react';
import ReactDOM from 'react-dom';
//below importing redux to create the 'store'
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// importing the main-view from directory
import MainView from './components/main-view/main-view';
import moviesApp from './reducers/reducers';

import './index.scss';

const store = createStore(moviesApp);

// main component that will eventually use all the others
class SuperFlixApplication extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MainView />
      </Provider>
    );
  }
}

// finds the root of the app
const container = document.getElementsByClassName('app-container')[0];

// tells react to render the app in the root DOM element
ReactDOM.render(React.createElement(SuperFlixApplication), container);

