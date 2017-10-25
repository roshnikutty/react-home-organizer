import React, { Component } from 'react';
import './App.css';
import BasementRoom from './BasementRoom';
import FirstFloorRoom from './FirstFloorRoom';
import SecondFloorRoom from './SecondFloorRoom';
import AtticRoom from './AtticRoom';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      basementVisibility: false,
      firstFloorVisibility: false,
      secondFloorVisibility: false,
      atticRoomVisibility: false
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    e.preventDefault();
    if (document.getElementById("floor").value === "0") {
      this.setState({
        basementVisibility: true,
        firstFloorVisibility: false,
        secondFloorVisibility: false,
        atticRoomVisibility: false
      })
    }
    if (document.getElementById("floor").value === "1") {
      this.setState({ 
        basementVisibility: false,
        firstFloorVisibility: true,
        secondFloorVisibility: false,
        atticRoomVisibility: false })
    }
    if (document.getElementById("floor").value === "2") {
      this.setState({ 
        basementVisibility: false,
        firstFloorVisibility: false,
        secondFloorVisibility: true,
        atticRoomVisibility: false })
    }
    if (document.getElementById("floor").value === "3") {
      this.setState({ 
        basementVisibility: false,
        firstFloorVisibility: false,
        secondFloorVisibility: false,
        atticRoomVisibility: true })
    }
  }

  render() {
    return (
      <div>
        <h1>Home Organizer</h1>

        <select id="floor" onChange={this.handleChange}>
          <option value="na"> Select floor </option>
          <option value="0"> Basement </option>
          <option value="1"> First </option>
          <option value="2"> Second </option>
          <option value="3"> Attic </option>
        </select>

        <BasementRoom visibility={this.state.basementVisibility} />
        <FirstFloorRoom visibility={this.state.firstFloorVisibility} />
        <SecondFloorRoom visibility={this.state.secondFloorVisibility} />
        <AtticRoom visibility={this.state.atticRoomVisibility} />

      </div>
    );
  }
}

export default App;
