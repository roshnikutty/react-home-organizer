import React from 'react';
import { connect } from 'react-redux';

let Display = (props) => {
    let output = Object.keys(props.output).map(key => props.output[key])
console.log({output});
    if (output.length === 0) {
        return (
            <div>
                <p>There are no items to show.</p>
                <p> Add stuff yo! </p>
            </div>);
    } else {
        let listDisplay = output.map(function (item_data, index) {
            return (<li key={index} className="card">
                <div>
                    <strong>Floor </strong> {item_data.floor_type_state} <br />
                    <strong>Room </strong> {item_data.room_type_state} <br />
                    <strong>Place </strong> {item_data.place} <br />
                    <strong>Item </strong> {item_data.item} <br />
                    <button onClick={(e)=>props.onClick(e, index)}> Delete </button>
                </div>
            </li>)
        });
        let outputDisplay = <ul>{listDisplay}</ul>;
        return (
            <div>
                <p>Here's the list of stuff you added.</p>
                {outputDisplay}
            </div>
        );
    }
}

let mapStateToProps = (state) => ({
    output: state.homeOrgArrayReducer
})
export default connect(mapStateToProps)(Display)