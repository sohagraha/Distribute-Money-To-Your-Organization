import React, { useEffect, useState } from 'react';
import Person from '../Person/Person';
import Total from '../Total/Total';
import './Body.css'

//Body 
const Body = () => {
    const [persons, setPersons] = useState([]);
    const [total, setTotal] = useState([]);

    // data fetch from json file 
    useEffect(() => {
        fetch('./database.JSON')
            .then(res => res.json())
            .then(data => setPersons(data));
    }, []);

    // this helps to find the total selected person and sending amount total
    const handleTotal = (person) => {
        const newTotal = [...total, person]
        setTotal(newTotal);
    }


    return (
        <div className='bodyContainer'>
            <div className='row row-cols-1 row-cols-md-3 g-4 ms-4'>
                {/* pass data from body to Person component with "handeltotal" */}
                {
                    persons.map(person => <Person
                        key={person.id}
                        person={person}
                        handleTotal={handleTotal}
                    ></Person>)
                }
            </div>

            <div className='totalSum'>
                {/* pass array from Body to Total Component  */}
                <Total total={total}></Total>
            </div>
        </div>
    );
};

export default Body;