import React from 'react';
import photo from './images/balboa_park_me.jpg';
import './App.css';

function Header(props) {
  return <header className="App-header">
    <h1>Laura Hawkins</h1>
    <nav >
      <a className="App=link" href="index.html" target="_blank" rel="noopener noreferrer">About Me</a> |
      <a className="App=link" href="portfolio.html" target="_blank" rel="noopener noreferrer">Portfolio</a> |
      <a className="App=link" href="contact.html" target="_blank" rel="noopener noreferrer">Contact</a>
    </nav>
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
