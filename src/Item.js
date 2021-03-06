import React from 'react';
import { connect } from 'react-redux';

let Item = (props) => {
    if (!props.visibility) {
        return null
    } else {
        return (<div>
            <input type="text" size="50" visibility={`${props.visibility}`} placeholder="Enter item" 
            onChange={props.onChange} />
            <button onClick={props.onClick}> Add Item </button>
        </div>
        )
    }
}

export default connect()(Item);