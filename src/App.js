import React, { Component } from 'react';
import photo from './images/balboa_park_me.jpg';
import './App.css';
import Nav from './components/Nav'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function Header(props) {
  return <header className="App-header">
  
   
  </header>
}

function Project(props) {
  return <div className="App-body">
    <h1>Laura Hawkins</h1>
    <h2>About Me</h2>
    <p> Hi I'm Laura Hawkins. I enjoy living in San Diego. I went to
                            college at UCSD and I graduated with a degree in Computer Science. The UCSD Web Dev Bootcamp has helped reinforced my skills from school and  learn great new tools.
                      </p>

    <img src={photo} alt="" width="495" height="551" />

  </div>;
}

function Footer(props) {
  return <p>Copyright 2019</p>;
}

function App() {
  return (
    <div className="App">
      <Header />
      <Project />
      <Footer />
    </div>
  );
}

export default App; 
