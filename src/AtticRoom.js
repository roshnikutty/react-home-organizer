import React from 'react';
import { connect } from 'react-redux';

let AtticRoom = (props) => {
    if (!props.visibility) {
        return null;
    } else {
        return (
            <select id="attic" visibile={`${props.visibility}`} onChange={props.atticChange}>
                <option value="attic_store"> Attic Storage </option>
            </select>
        );
    }
}

// const mapStateToProps = state => ({
//     visibility: state.atticRoomVisibility
// });
export default connect()(AtticRoom);