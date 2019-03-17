import React, { Component} from 'react';

class InputWord extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      word: '',
      translation: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.putChar = this.putChar.bind(this);

  }
  putChar(char, event){
    let updated = this.state.word + char;
    this.setState({
      word: updated
    });
  }
  
  handleSubmit(event){
    event.preventDefault();
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
      <div>
      <h3>Input a word or phrase.</h3>
      <form onSubmit={this.handleSubmit}>
      <div>
      <div><label htmlFor="word">Word/Phrase</label></div>
      <input type="text" id="word" name="word" value={ this.state.word } required maxLength="100" size="30"
        onChange={this.handleChange} />
        <div>
        <button onClick={this.putChar.bind(this, 'á')}>á</button>
        <button onClick={this.putChar.bind(this, 'é')}>é</button>
        <button onClick={this.putChar.bind(this, 'í')}>í</button>
        <button onClick={this.putChar.bind(this, 'ó')}>ó</button>
        <button onClick={this.putChar.bind(this, 'ú')}>ú</button>
        <button onClick={this.putChar.bind(this, '¿')}>¿</button>
        <button onClick={this.putChar.bind(this, '¡')}>¡</button>
        <button onClick={this.putChar.bind(this, 'ü')}>ü</button>
        <button onClick={this.putChar.bind(this, 'ñ')}>ñ</button>
        </div>
      </div>
      <div>
      <div><label htmlFor="translation">Translation</label></div>
      <input type="text" id="translation" value={ this.state.translation }name="translation" required maxLength="100" size="30"
        onChange={this.handleChange} />
      </div>

      <input type="submit" value="Submit" />

      </form>

      </div>
    );
  }
}


export default InputWord;
