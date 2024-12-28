import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Context, { fireebaseContext } from './store/Context';
import firebase from './firebase/configfbase';

ReactDOM.render(
<fireebaseContext.Provider value={{firebase}}>
<Context>
  <App />
</Context>
</fireebaseContext.Provider>
, document.getElementById('root'));

