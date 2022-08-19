import React from 'react';

const Spinner = props => {
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">{props.message}</div>
        </div>
    );
};

//If Spinner message is not defined this default will be used
Spinner.defaultProps = {
    message: 'Loading...'
};

export default Spinner;