import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Technologies />
      <School />
    </div>
  );
}

const Technologies = () => {
  return <div>
    <ul>html</ul>
    <ul>css</ul>
    <ul>js</ul>
  </div>
}
const School = () => {
  return <div>
    <ul>1</ul>
    <ul>2</ul>
    <ul>3</ul>
  </div>
}


export default App;
