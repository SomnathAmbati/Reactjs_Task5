import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    maindate: '',
    ageNow: null, // Added a state variable to store the age
  }

  chagedDate = event => {
    this.setState({
      maindate: event.target.value,
    });
  }

  dateSubmitted = event => {
    event.preventDefault(); // Prevent the default form submission

    const { maindate } = this.state;
    const birthDate = new Date(maindate);
    const today = new Date();

    let ageNow = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      ageNow -= 1;
    }

    this.setState({
      ageNow, // Set the age in the state
    });
  }

  render() {
    const { maindate, ageNow } = this.state;

    return (
      <div className='center'>
        <h1>Age Calculator</h1>
        <p> <b>Enter your date of birth</b> </p>
        <form onSubmit={this.dateSubmitted}>
          <input type="date" id='date' onChange={this.chagedDate} value={maindate} /> <br></br><br></br>
          <button type="submit" id='btn'>Calculate Age</button>
        </form>
        {ageNow !== null && <h3>You are {ageNow} years old</h3>}
      </div>
    );
  }
}

export default App;
