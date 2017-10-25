import React from 'react';

let FirstFloorRoom = (props) => {
    if (!props.visibility) {
        return null;
    } else {
        return (
            <select id="first" visible={`${props.visibility}`}>
                <option value="kitchen"> Kitchen </option>
                <option value="living"> Living Room </option>
                <option value="dining"> Dining Room </option>
                <option value="sunroom"> Sun Room </option>
                <option value="mudroom"> Mud Room</option>
                <option value="garage"> Garage</option>
            </select>
        );
    }
}
export default FirstFloorRoom;