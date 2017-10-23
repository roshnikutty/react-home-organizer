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
  }
  render() {
    return (
      <div>
        <h1>Home Organizer</h1>

        <select id="floor">
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
