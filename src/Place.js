import React from 'react';
import { connect } from 'react-redux';

let Place = (props) => {
    if (!props.visibility) {
        return null;
    } else {
        return (<div>
            <input type="text"  size="50" visibile={`${props.visibility}`} placeholder="Enter place" onChange={props.onChange}/>
        </div>
        )
    }
}

// const mapStateToProps = (state) => ({
//     visibility: state.placeVisibility
// });

export default connect()(Place);