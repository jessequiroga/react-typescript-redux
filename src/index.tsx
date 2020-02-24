import { AppContainer } from 'react-hot-loader';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import MainPage from 'Pages/MainPage';
import store from 'Store';
import 'Styles/main.scss';

const rootElement = document.querySelector('#root');

ReactDOM.render((
  <AppContainer>
	  <Provider store={ store }>
      <MainPage />
	  </Provider>
  </AppContainer>
  ),
  rootElement,
);

declare let module: { hot: any };

if (module.hot) {
  module.hot.accept();
}
