import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import BasementRoom from './BasementRoom';
import FirstFloorRoom from './FirstFloorRoom';
import SecondFloorRoom from './SecondFloorRoom';
import AtticRoom from './AtticRoom';
import Place from './Place';
import Item from './Item';
import { Floor, Basement, First_floor, Second_floor, Attic, Place_Action, Add_Item_to_state } from './actions/actions';

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
    this.handleButtonSubmit = this.handleButtonSubmit.bind(this);
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
    return room_type;
  }
  handleFirstFloorChange(e) {
    e.preventDefault();
    let room_type = e.target.value;
    this.props.dispatch(First_floor(room_type));
    return room_type;
  }

  handleSecondFloorChange(e) {
    e.preventDefault();
    let room_type = e.target.value;
    this.props.dispatch(Second_floor(room_type));
    return room_type;
  }

  handleAtticChange(e) {
    e.preventDefault();
    let room_type = e.target.value;
    this.props.dispatch(Attic(room_type));
    return room_type;
  }

  handleInputChange(e) {
    e.preventDefault();
    let placeValue = e.target.value;
    this.props.dispatch(Place_Action(placeValue));
    return placeValue;

  }
  handleItemChange(e) {
    e.preventDefault();
    let itemValue = e.target.value;
    this.props.dispatch(Add_Item_to_state(itemValue));
    return itemValue;
  }
  handleButtonSubmit(e) {
    e.preventDefault();
    let stateValues = {};
    console.log(this.props);
    console.log(`hi`);
    stateValues.floor_type_state = this.props.floor_type_state;
    stateValues.room_type_state = this.props.room_type_state;
    stateValues.place = this.props.place;
    stateValues.item = this.props.item;
    // this.props.dispatch(AddAndShow(stateValues))
    console.log(stateValues);    
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

        <BasementRoom visibility={this.props.basementVisibility} basementChange={this.handleBasementChange} />
        <FirstFloorRoom visibility={this.props.firstFloorVisibility} firstFloorChange={this.handleFirstFloorChange} />
        <SecondFloorRoom visibility={this.props.secondFloorVisibility} secondFloorChange={this.handleSecondFloorChange} />
        <AtticRoom visibility={this.props.atticRoomVisibility} atticChange={this.handleAtticChange} />
        <Place visibility={this.props.placeVisibility} onChange={this.handleInputChange} />
        <Item visibility={this.props.itemVisibility} onChange={this.handleItemChange} 
        onSubmit={this.props.handleButtonSubmit}/>
      </div>
    );
  }
}

export default connect()(App);
