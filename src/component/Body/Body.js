import React, { useEffect, useState } from 'react';
import Person from '../Person/Person';
import Total from '../Total/Total';
import './Body.css'

const Body = () => {
    const [persons, setPersons] = useState([]);
    const [total, setTotal] = useState([]);

    useEffect(() => {
        fetch('./database.JSON')
            .then(res => res.json())
            .then(data => setPersons(data));
    }, []);

    const handleTotal = (person) => {
        const newTotal = [...total, person]
        setTotal(newTotal);
    }


    return (
        <div className='bodyContainer'>
            <div className='peopleList'>
                {
                    persons.map(person => <Person
                        key={person.id}
                        person={person}
                        handleTotal={handleTotal}
                    ></Person>)
                }
            </div>
            <div className='totalSum'>
                <Total total={total}></Total>
            </div>
        </div>
    );
};

export default Body;