import React from 'react';
import { connect } from 'react-redux';

let BasementRoom = (props) => {

    if (!props.visibility) {
        return null;
    } else {
        return (
            <select id="basement" visibile={`${props.visibility}`} onChange={props.basementChange}>
                <option value="study"> Study Room </option>
                <option value="office"> Home Office </option>
                <option value="laundry"> Laundry Room </option>
                <option value="store"> Store Room </option>
            </select>
        );
    }
}
export default connect()(BasementRoom);