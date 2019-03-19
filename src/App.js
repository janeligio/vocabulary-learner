import React, { Component } from 'react';
import AppHeader from './components/Title.js';
import Words from './components/Words.js';
import InputWord from './components/InputWord.js';
import axios from 'axios'; // Will allow us to make HTTP requests to our server

import './App.css';


class App extends Component {
  state = {
    language: 'Spanish',
    data: []
  }
  componentDidMount() {
    this.getDatabase();
    // Updates db every second
    this.timerID = setInterval(this.getDatabase, 500);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  postDatabase = (data) => {
    const url = "http://localhost:5000/api/translations"; // site that doesn’t send Access-Control-*
    axios.post(url, data)
    .then( (response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  getDatabase = () => {
    const url = "http://localhost:5000/api/translations"; // site that doesn’t send Access-Control-*
    axios.get(url)
    .then(response => {
      // handle success
      this.setState({data: response.data})
    })
    .catch((error) => {
      // handle error
      console.log(error);
    })
  }

  removeDatabase = (id) => {
    const url = "http://localhost:5000/api/translations/";
    const fullUrl = url + id;
    axios.delete(fullUrl)
      .then(response => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    return (
      <div className="App">
        <AppHeader language={ this.state.language } />
      <div className="container">
        <div className="ui grid">
          <div className="six wide column">
            <InputWord post={ this.postDatabase}/>
          </div>
        <div className="six wide column words">
          <Words data={ this.state.data } delete={(e) => this.removeDatabase(e) }/>
        </div>
        <div className="sixe wide column">
        </div>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
