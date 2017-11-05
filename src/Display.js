import React from 'react';
import { connect } from 'react-redux';
import { Show } from './actions/actions';

let Display = (props) => {
    // let output = props.dispatch(Show());          //output will be current state
    //     console.log(output);
    let output = props.output;

    if ((Object.values(output)).length === 0) {
        return (
            <div>
                <p>There are no items to show.</p>
                <p> Add stuff yo! </p>
            </div>);
    } else {
        let listDisplay = Object.keys(output).map(function (item_data) {
            return( <li key={Date.now()}>
                <div>
                    <strong>Floor </strong> {item_data.floor_type_state} <br/>
                    <strong>Room </strong> {item_data.room_type_state} <br/>
                    <strong>Place </strong> {item_data.place} <br/>
                    <strong>Item </strong> {item_data.item} <br/>
                </div>
            </li>)
        });
        let outputDisplay = <ul>${listDisplay}</ul>;
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