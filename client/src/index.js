import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose} from "redux";
import rootReducer from './store/reducers/rootReducer';
import { Provider,useSelector } from "react-redux";
import thunk from 'redux-thunk'
import { createFirestoreInstance, getFirestore, reduxFirestore } from 'redux-firestore';
import {ReactReduxFirebaseProvider, getFirebase,isLoaded } from 'react-redux-firebase';
import firebase from './config/fbConfig'



const middleware = [
  // thunk.withExtraArgument({getFirestore}, {getFirebase})
  thunk.withExtraArgument(getFirebase)
]
const store = createStore(rootReducer,
  compose(
    // applyMiddleware(...middleware),  reduxFirestore(firebase)
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })), reduxFirestore(firebase)
  )
);


const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true,
   // Firestore for Profile instead of Realtime DB
   attachAuthIsReady: true
}

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
  presence: 'presence',
  sessions: "sessions"

}

function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return <div>Loading Screen...</div>;
      return children
}
ReactDOM.render(<Provider store={store}> <ReactReduxFirebaseProvider {...rrfProps}> <AuthIsLoaded><App /> </AuthIsLoaded></ReactReduxFirebaseProvider></Provider>, document.getElementById('root'));

// ReactDOM.render(<Provider store={store}><ReactReduxFirebaseProvider {...rrfProps}><App /></ReactReduxFirebaseProvider></Provider>, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
