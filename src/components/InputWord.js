import React, { Component} from 'react';

class InputWord extends Component {
  render() {
    return (
      <div>
      <h3>Input a word or phrase.</h3>
      <InputField />
      </div>
    );
  }
}

function InputField(props) {
  return (
    <div>

    <form>
    <div>
    <label for="word">Word/Phrase</label>
    <input type="text" id="word" name="word" required maxlength="100" size="15" />
    </div>
    <div>
    <label for="translation">Translation</label>
    <input type="text" id="translation" name="translation" required maxlength="100" size="15" />
    </div>

    <input type="submit" value="Submit" />

    </form>

    </div>
  );
}

export default InputWord;
