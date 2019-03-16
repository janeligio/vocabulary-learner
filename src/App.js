import React, { Component } from 'react';
import Title from './components/Title.js';
import CurrentDate from './components/CurrentDate.js';
import Words from './components/Words.js';
import InputWord from './components/InputWord.js';

class App extends Component {
  state = {
    language: 'Spanish',
  }
  render() {

    const date = new Date();
    return (
      <div className="App">
        <Title language={ this.state.language } />
        <CurrentDate />
        <InputWord />
        <Words />
      </div>
    );
  }
}

export default App;
