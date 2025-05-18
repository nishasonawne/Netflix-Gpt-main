import React from 'react';

import './App.css';
import {Provider} from 'react-redux';
import Body from './components/Body';
import { UserProvider } from './utils/UserContext';
import AppStore from './reduxStore/AppStore';

function App() {
  return (
    <Provider store={AppStore}>
      <UserProvider>
        <Body />
      </UserProvider>
    </Provider>
  );
}

export default App;
