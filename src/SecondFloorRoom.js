import React from 'react';
import { connect } from 'react-redux';

let SecondFloorRoom = (props) => {
    if (!props.visibility) {
        return null;
    } else {
        return (
            <select id="second" visibile={`${props.visibility}`} onChange={props.secondFloorChange}>
                <option value="bedroom1"> Nursery </option>
                <option value="bedroom2"> Kid's room </option>
                <option value="bedroom3"> Master bedroom </option>
            </select>
        );
    }
}
const mapStateToProps = state => ({
    visibility: state.secondFloorVisibility
});
export default connect(mapStateToProps)(SecondFloorRoom);