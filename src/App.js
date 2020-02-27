import React from 'react';
import photo from './images/balboa_park_me.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Laura Hawkins</h1>
        <h2>About Me</h2>
        <p> Hi I'm Laura Hawkins. I enjoy living in San Diego. I went to
                                college at UCSD and I graduated with a degree in Computer Science. The UCSD Web Dev Bootcamp has helped reinforced my skills from school and  learn great new tools.
                            </p>

        <img src={photo} alt="" width="495" height="551"/> 
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
      </header>
    </div>
      );
    }
    
    export default App;
