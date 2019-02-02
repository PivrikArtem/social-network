import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="app-wrapper">
      <header className='header'>
        <img src='https://image.flaticon.com/icons/svg/149/149990.svg' />
      </header>
      <nav className='nav'>
        <div>
          <a href=''>Profile</a>
        </div>
        <div>
          <a href=''>Messages</a>
        </div>
        <div>
          <a href=''>News</a>
        </div>
        <div>
          <a href=''>Music</a>
        </div>
        <div>
          <a href=''>Setting</a>
        </div>
      </nav>
      <section className='content'>
        <div>
        <img src='http://amandajevans.com/wp-content/uploads/2019/01/inspirational-motivational-quotes-6.jpg' />
        </div>
        <div>
          ava+description
       </div>
        <div>
          My posts
       </div>
        <div>
          New posts
         <div>post1</div>
          <div>post2</div>
        </div>
      </section>
      <footer className='footer'>Footer</footer>

    </div>
  );
}

export default App;
