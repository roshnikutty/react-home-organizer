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
import Search from './Search';

import {
  Floor, Basement, First_floor, Second_floor, Attic,
  Place_Action, Add_Item_to_state, Show, Delete, Search_Action
} from './actions/actions';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleBasementChange = this.handleBasementChange.bind(this);
    this.handleFirstFloorChange = this.handleFirstFloorChange.bind(this);
    this.handleSecondFloorChange = this.handleSecondFloorChange.bind(this);
    this.handleAtticChange = this.handleAtticChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleItemChange = this.handleItemChange.bind(this);
    this.handleSearchItemChange = this.handleSearchItemChange.bind(this);
  }
  handleChange(e) {
    e.preventDefault();
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
    document.getElementsByTagName("input")[1].value = "";     //clear input element for place
    document.getElementsByTagName("input")[2].value = "";     //clear input element for item

  }
  handleDeleteItem(e, indexOfItemToDelete) {
    e.preventDefault();
    this.props.dispatch(Delete(indexOfItemToDelete));
  }
  handleSearchItemChange(e) {
    e.preventDefault();
    let searchItem = e.target.value;
    this.props.dispatch(Search_Action(searchItem));
  }
  render() {
    const homeOrg = this.props.homeOrg;
    return [
      <h1 key="A" >Home Organizer</h1>,

      <Search key="J" onChange={this.handleSearchItemChange} />,
      <select key="B" id="floor" onChange={this.handleChange}>
        <option value="na"> Select floor </option>
        <option value="Basement"> Basement </option>
        <option value="First"> First </option>
        <option value="Second"> Second </option>
        <option value="Attic"> Attic </option>
      </select>,

      <BasementRoom key="C" visibility={homeOrg.basementVisibility} basementChange={this.handleBasementChange} />,
      <FirstFloorRoom key="D" visibility={homeOrg.firstFloorVisibility} firstFloorChange={this.handleFirstFloorChange} />,
      <SecondFloorRoom key="E" visibility={homeOrg.secondFloorVisibility} secondFloorChange={this.handleSecondFloorChange} />,
      <AtticRoom key="F" visibility={homeOrg.atticRoomVisibility} atticChange={this.handleAtticChange} />,
      <Place key="G" visibility={homeOrg.placeVisibility} onChange={this.handleInputChange} id="place" />,
      <Item key="H" visibility={homeOrg.itemVisibility} onChange={this.handleItemChange} id="item"
        onClick={(e) => this.handleButtonSubmit(e)} />,
      <Display key="I" onClick={(e, index) => this.handleDeleteItem(e, index)} />
    ];
  }
}
const mapStateToProps = state => ({
  homeOrg: state.homeOrgReducer
});
export default connect(mapStateToProps)(App);