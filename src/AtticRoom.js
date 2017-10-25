import React from 'react';

let AtticRoom = (props) => {
    if (!props.visibility) {
        return null;
    } else {
        return (
            <select id="attic" visibile={`${props.visibility}`}>
                <option value="attic_store"> Attic Storage </option>
            </select>
        );
    }
}
export default AtticRoom;