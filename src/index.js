import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; import App from './App';
import reportWebVitals from './reportWebVitals';
import MyFirstComponent from "./MyFirstComponent"
import MySecondComponent from "./MySecondComponent"
import MyThirdComponent from "./MyThirdComponent"
import MyFourthComponent from "./MyFourthComponent"
import MyFifthComponent from "./MyFifthComponent"
import MySixthComponent from "./MySixthComponent"
import MySeventComponent from "./MySeventhComponent"
import MyEightComponent from "./MyEightComponent"
import MyNinethComponent from "./MyNinthComponent"
import MyTenthComponent from "./MyTenthComponent"









ReactDOM.render(
  <React.StrictMode>
    <MyFirstComponent />
    <MySecondComponent/>
    <MyThirdComponent />
    <MyFourthComponent />
    <MyFifthComponent />
    <MySixthComponent />
    <MySeventComponent />
    <MyEightComponent/>
    <MyNinethComponent />
    <MyTenthComponent/>

    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
