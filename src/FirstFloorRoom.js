import React from 'react';

let FirstFloorRoom = (props) => {
    if (props.firstFloorVisibility === false) {
        return null;
    } else {
        return (
            <select visibility={props.firstFloorVisibility}>
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