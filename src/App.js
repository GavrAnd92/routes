import React from 'react';
import './App.css';
import AboutMe from './components/aboutme';
import List from './components/list';

class App extends React.Component {
  
  render (){
    return (
    <div>
      <AboutMe />
      <List/>

      </div>
  );
  }
}

export default App;
