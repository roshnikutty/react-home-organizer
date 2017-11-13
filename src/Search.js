import React from 'react';
import { connect } from 'react-redux';

let Search = (props) => {
    return(
        <div>
            <input type="text" size="50" placeholder="Search"/>
            {/* <button type="submit" onClick={handleSubmit(e)}></button> */}
        </div>
    )
}

export default connect()(Search);