import React from 'react';
import logo from './logo.svg';
import './App.css';
import KanyeFaceHmmm from './img/westkanye.jpg'
import KanyeFaceUuhhhhhh from './img/kayneThinkingFace.jpg'
import Header from './header/Header'
import KayneSpot from './center/'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import reducer from './reducers/'
import 'bootstrap/dist/css/bootstrap.min.css'





const store = createStore(reducer,applyMiddleware(thunk))


console.log(store)

function App() {


  return (
    <Provider store={store}>
    <div className="App">
    <Header/>
    <KayneSpot  pic={[KanyeFaceHmmm,KanyeFaceUuhhhhhh]}/>
    </div>
    </Provider>
  );
}

export default App;
