import React, { Component } from 'react';

// Shows all the words that have been added
function Words(props){
  const { data } = props;
  const words = data.map((word) =>
  <li key={word._id}>
  <button onClick={(e) => props.delete(word._id)}>delete</button>
  {word.word} - {word.translation}
  </li>
  );
    return (
      <div>
      <h3>Learned Words</h3>
      <ul>{words}</ul>
      </div>
    );

}

export default Words;
