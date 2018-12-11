import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from "react-hot-loader";
import { Provider } from 'react-redux';

import App from './components/App';
import store from './store';
import './styles/main.scss';

const rootElement = document.querySelector('#root');

ReactDOM.render(
  <AppContainer>
	  <Provider store={ store }>
      <App />
	  </Provider>
  </AppContainer>
  , rootElement
);

declare let module: { hot: any };

if (module.hot) {
  module.hot.accept();
}
