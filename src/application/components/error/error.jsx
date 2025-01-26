import React from 'react';

const Error = ({text = 'Error' } ) => {
    return (
        <a-entity position="3 0 -10" scale="10 10 10" text={`value: ${text}; color: black;`} />
    );
};

export default Error;