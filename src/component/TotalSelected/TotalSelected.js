import React from 'react';

const TotalSelected = (props) => {
    const { name } = props.person;
    console.log(props.person);
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};

export default TotalSelected;