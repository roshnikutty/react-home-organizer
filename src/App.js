import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import BasementRoom from './BasementRoom';
import FirstFloorRoom from './FirstFloorRoom';
import SecondFloorRoom from './SecondFloorRoom';
import AtticRoom from './AtticRoom';
import { Floor } from './actions/actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    e.preventDefault();
    let floor_type = document.getElementById("floor").value;
    this.props.dispatch(Floor(floor_type));                 //dispatch from the store is passed as a prop
  }

  render() {
    return (
      <div>
        <h1>Home Organizer</h1>

        <select id="floor" onChange={this.handleChange}>
          <option value="na"> Select floor </option>
          <option value="Basement"> Basement </option>
          <option value="First"> First </option>
          <option value="Second"> Second </option>
          <option value="Attic"> Attic </option>
        </select>

        <BasementRoom visibility={this.props.basementVisibility} />
        <FirstFloorRoom visibility={this.props.firstFloorVisibility} />
        <SecondFloorRoom visibility={this.props.secondFloorVisibility} />
        <AtticRoom visibility={this.props.atticRoomVisibility} />

      </div>
    );
  }
}
const mapStateToProps = state => ({
  basementVisibility: state.basementVisibility,
  firstFloorVisibility: state.firstFloorVisibility,
  secondFloorVisibility: state.secondFloorVisibility,
  atticRoomVisibility: state.atticRoomVisibility
});

export default connect(mapStateToProps)(App);
