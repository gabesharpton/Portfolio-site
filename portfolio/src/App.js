import React from 'react';
import './App.css';
import Home from './Home';
function App() {
  return (
    <div className="App">
      <nav>
        <a href="https://gabesharpton.github.io/Hangman-Javascript-Game/">My Hangman Javascript Browser Game</a>
        <a href="https://fitness-planner-gls.herokuapp.com/">My first Back-end App</a>
        <a href="https://github.com/wtsia/DevQ">DevQ</a>
        
        
        <a id='git' href='https://www.github.com/gabesharpton'><i class="fa fa-github"></i></a>
        <a id='linkedin' href='https://www.linkedin.com/in/gabesharpton/'><i class="fa fa-linkedin-square"></i></a>
        <Home />
    </nav>
    </div>
  );
}

export default App;
