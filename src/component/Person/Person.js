import React from 'react';
import './Person.css'

const Person = (props) => {
    const { name, img, id, email } = props.person;
    return (
        <div className='personCard'>
            <img src={img} alt="" />
            <h2 className='detailsTxt'>{name}</h2>
            <h2 className='detailsTxt'>{id}</h2>
            <h3 className='detailsTxt'>Email : {email}</h3>
            <button onClick={() => props.handleTotal(props.person)} className='calc'>Add for Calculate</button>
        </div>
    );
};

export default Person;