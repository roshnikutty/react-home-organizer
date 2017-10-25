import React from 'react';

let SecondFloorRoom = (props) => {
    if (!props.visibility) {
        return null;
    } else {
        return (
            <select id="second" visibile={`${props.visibility}`}>
                <option value="bedroom1"> Nursery </option>
                <option value="bedroom2"> Kid's room </option>
                <option value="bedroom3"> Master bedroom </option>
            </select>
        );
    }
}
export default SecondFloorRoom;