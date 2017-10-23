import React from 'react';

let AtticRoom = (props) => {
    if (props.atticRoomVisibility === false) {
        return null;
    } else {
        return (
            <select visibility={props.atticRoomVisibility}>
                <option value="attic_store"> Attic Storage </option>
            </select>
        );
    }
}
export default AtticRoom;