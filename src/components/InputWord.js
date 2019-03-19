import React, { Component} from 'react';
import {HotKeys} from 'react-hotkeys';

class InputWord extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      word: '',
      translation: '',
    };

    this.keyMap = {
      a: 'ctrl+\'+a',
      e: 'ctrl+\'+e',
      i: 'ctrl+\'+i',
      o: 'ctrl+\'+o',
      u: 'ctrl+\'+u',
      questionMark: 'ctrl+/',
      bang: 'ctrl+1',
      germanU: 'ctrl+shift+u',
      n: 'alt+n',
      tab: 'tab'
    }

    this.handlers = {
      'a': (event) => this.handleHotKey(event),
      'e': (event) => this.handleHotKey(event),
      'i': (event) => this.handleHotKey(event),
      'o': (event) => this.handleHotKey(event),
      'u': (event) => this.handleHotKey(event),
      'questionMark': (event) => this.handleHotKey(event),
      'bang': (event) => this.handleHotKey(event),
      'germanU': (event) => this.handleHotKey(event),
      'n': (event) => this.handleHotKey(event),
      'tab': (event) => this.handleHotKey(event)

    };

    //this.handleHotKey = this.handleHotKey.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.putChar = this.putChar.bind(this);
    //this.handleKeyDown = this.handleKeyDown.bind(this);

  }

  componentDidMount() {
    document.getElementById('word').focus();
  }

  handleHotKey = (e) => {
      e.preventDefault();
      let char = '';
      switch(e.key){
        case 'a': char += 'á';
          break;
        case 'e': char += 'é';
          break;
        case 'i': char += 'í';
          break;
        case 'o': char += 'ó';
          break;
        case 'u': char += 'ú';
          break;
        case '/': char += '¿';
          break;
        case '1': char += '¡';
          break;
        case 'U': char += 'ü';
          break;
        case 'n': char += 'ñ';
          break;
        case 'Tab': document.getElementById('translation').focus();
          break;
        default:
        break;
      }
      let updated = this.state.word + char;
      this.setState({
        word: updated
      });
  }

  putChar(char, event){
    event.preventDefault();
    let updated = this.state.word + char;
    this.setState({
      word: updated
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const data = { word: this.state.word, translation: this.state.translation };
    console.log(this.props);

    this.props.post(data);
    this.setState({
      word: '',
      translation: ''
    });
  }

  handleChange(event){
    event.preventDefault();

    let field = event.target.name;
    let val = event.target.value;
    if(field == 'word'){
      this.setState({
        word: val
      });
    } else {
      this.setState({
        translation: val
      });
    }

    //this.setState({wordVal: event.target.value});
  }

  render() {
    return (
      <div className="InputField">
      <h3 className="InputField-Header">Input a word or phrase.</h3>
      <form className="ui form" onSubmit={this.handleSubmit}>
      <div className="field">
      <label htmlFor="word">Word/Phrase</label>
      <HotKeys keyMap={this.keyMap} handlers={this.handlers}>
      <input type="text" id="word" name="word" value={ this.state.word } required maxLength="100" size="30"
        onChange={this.handleChange} />
      </HotKeys>
        <div>
        <button className="ui button char" onClick={this.putChar.bind(this, 'á')}>á</button>
        <button className="ui button char" onClick={this.putChar.bind(this, 'é')}>é</button>
        <button className="ui button char" onClick={this.putChar.bind(this, 'í')}>í</button>
        <button className="ui button char" onClick={this.putChar.bind(this, 'ó')}>ó</button>
        <button className="ui button char" onClick={this.putChar.bind(this, 'ú')}>ú</button>
        <button className="ui button char" onClick={this.putChar.bind(this, '¿')}>¿</button>
        <button className="ui button char" onClick={this.putChar.bind(this, '¡')}>¡</button>
        <button className="ui button char" onClick={this.putChar.bind(this, 'ü')}>ü</button>
        <button className="ui button char" onClick={this.putChar.bind(this, 'ñ')}>ñ</button>
        </div>
      </div>

      <div className="field">
      <label htmlFor="translation">Translation</label>
      <input type="text" id="translation" 
        value={ this.state.translation } name="translation" 
        required maxLength="100" size="30"
        onChange={this.handleChange} />
      </div>
      <input className="ui button" type="submit" value="Submit" />


      </form>

      </div>
    );
  }
}


export default InputWord;
