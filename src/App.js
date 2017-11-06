import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import BasementRoom from './BasementRoom';
import FirstFloorRoom from './FirstFloorRoom';
import SecondFloorRoom from './SecondFloorRoom';
import AtticRoom from './AtticRoom';
import Place from './Place';
import Item from './Item';
import Display from './Display';
import {
  Floor, Basement, First_floor, Second_floor, Attic,
  Place_Action, Add_Item_to_state, Show, Delete
} from './actions/actions';

class App extends Component {
  constructor(props) {
    // var inputValues = {};
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleBasementChange = this.handleBasementChange.bind(this);
    this.handleFirstFloorChange = this.handleFirstFloorChange.bind(this);
    this.handleSecondFloorChange = this.handleSecondFloorChange.bind(this);
    this.handleAtticChange = this.handleAtticChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleItemChange = this.handleItemChange.bind(this);
    // this.handleDeleteItem = this.handleDeleteItem.bind(this);
  }
  handleChange(e) {
    e.preventDefault();
    // let floor_type = document.getElementById("floor").value;
    let floor_type = e.target.value;
    this.props.dispatch(Floor(floor_type));                 //dispatch from the store is passed as a prop
  }
  handleBasementChange(e) {
    e.preventDefault();
    let room_type = e.target.value;
    this.props.dispatch(Basement(room_type));
  }
  handleFirstFloorChange(e) {
    e.preventDefault();
    let room_type = e.target.value;
    this.props.dispatch(First_floor(room_type));
  }

  handleSecondFloorChange(e) {
    e.preventDefault();
    let room_type = e.target.value;
    this.props.dispatch(Second_floor(room_type));
  }

  handleAtticChange(e) {
    e.preventDefault();
    let room_type = e.target.value;
    this.props.dispatch(Attic(room_type));
  }

  handleInputChange(e) {
    e.preventDefault();
    let placeValue = e.target.value;
    this.props.dispatch(Place_Action(placeValue));
  }
  handleItemChange(e) {
    e.preventDefault();
    let itemValue = e.target.value;
    this.props.dispatch(Add_Item_to_state(itemValue));
  }
  handleButtonSubmit(e) {
    e.preventDefault();
    this.props.dispatch(Show(this.props.homeOrg));
  }
  handleDeleteItem(e, indexOfItemToDelete) {
    e.preventDefault();
    this.props.dispatch(Delete(indexOfItemToDelete));
  }
  render() {
    const homeOrg = this.props.homeOrg;
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

        <BasementRoom visibility={homeOrg.basementVisibility} basementChange={this.handleBasementChange} />
        <FirstFloorRoom visibility={homeOrg.firstFloorVisibility} firstFloorChange={this.handleFirstFloorChange} />
        <SecondFloorRoom visibility={homeOrg.secondFloorVisibility} secondFloorChange={this.handleSecondFloorChange} />
        <AtticRoom visibility={homeOrg.atticRoomVisibility} atticChange={this.handleAtticChange} />
        <Place visibility={homeOrg.placeVisibility} onChange={this.handleInputChange} />
        <Item visibility={homeOrg.itemVisibility} onChange={this.handleItemChange}
          onClick={(e) => this.handleButtonSubmit(e)} />
        <Display onClick={(e, index) => this.handleDeleteItem(e, index)} />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  homeOrg: state.homeOrgReducer
});
export default connect(mapStateToProps)(App);