import React, { Component } from 'react';
import Moment from 'react-moment';

// Shows all the words that have been added
function Words(props){
  const { data } = props;
  const words = data.map((word) =>
  <tr key={word._id}>
      <td>
        <h4>
          <div className="content">
            { word.word }
          </div>
        </h4>
      </td>
      <td>
        { word.translation}
      </td>
      <td>
        <Moment format="MM/DD/YYYY">{word.date}</Moment>
      </td>
      <td>
        <button className="ui tiny red button" onClick={(e) => props.delete(word._id)}>x</button>
      </td>
    </tr>
  );
    return (
      <div className="WordsContainer">
      <h3 style={{ paddingTop:"30px"}}>Learned Words</h3>
      <table className="ui very basic collapsing celled table">
        <thead>
          <tr>
            <th>Term</th>
            <th>Translation</th>
            <th>Created</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
        { words }
        </tbody>
      </table>
      </div>
    );

}

export default Words;
