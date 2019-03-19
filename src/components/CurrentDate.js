import React, { Component } from 'react';

class CurrentDate extends Component {


  toMonth(n) {
    switch (n){
        case 0:
        return 'January';
        break;
        case 1:
        return 'February';
        break;
        case 2:
        return 'March';
        break;
        case 3:
        return 'April';
        break;
        case 4:
        return 'May';
        break;
        case 5:
        return 'June';
        break;
        case 6:
        return 'July';
        break;
        case 7:
        return 'August';
        break;
        case 8:
        return 'September';
        break;
        case 9:
        return 'October';
        break;
        case 10:
        return 'November';
        break;
        case 11:
        return 'December';
        break;
        default:
    }

  }

  toDay(n) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[n];
  }
  render() {

    const currDate = new Date();
    const date = currDate.getDate();
    const month = this.toMonth(currDate.getMonth());
    const year = currDate.getFullYear();
    const day = this.toDay(currDate.getDay());
    //const dateObject = new Date()
    //const month = this.toMonth();
    //const day = dateObject.getDate();
    //const year = dateObject.getFullYear();
    //const date = "${month} ${day}, ${year}";
    return <h2 className="Date">{day} {month} {date}, {year}</h2>;

  }
}

export default CurrentDate;
