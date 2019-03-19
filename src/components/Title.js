import React, { Component } from 'react';
import CurrentDate from './CurrentDate';
function AppHeader(props) {
  return (
    <div className="AppHeader">
    <span><h1>{ props.language } Learner</h1></span>
    <span><CurrentDate /></span>
    </div>
);
}

export default AppHeader;
