import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { fireebaseContext } from './store/firebaseContext';
import firebase from './firebase/configfbase';

ReactDOM.render(
<fireebaseContext.Provider value={{firebase}}>
<App />
</fireebaseContext.Provider>
, document.getElementById('root'));

