import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import firebase from "firebase";
import ReduxThunk from "redux-thunk";
import reducers from "./reducers";
import Router from "./Router";

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyDl8OfFEzdU5KqoYiZzUBaa1ekAFsU7E44",
      authDomain: "manager-887f0.firebaseapp.com",
      databaseURL: "https://manager-887f0.firebaseio.com",
      projectId: "manager-887f0",
      storageBucket: "manager-887f0.appspot.com",
      messagingSenderId: "817508603831"
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
