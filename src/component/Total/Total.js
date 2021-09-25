import React from 'react';
import TotalSelected from '../TotalSelected/TotalSelected';

const Total = (props) => {

    const { total } = props;
    let totalsalary = 0;
    for (const salary of total) {
        totalsalary = totalsalary + salary.id;
    }
    return (
        <div>
            <h2>Total : {total.length}</h2>
            <h2>{totalsalary}</h2>

            <div className='selctedList'>
                {
                    total.map(person => <TotalSelected
                        key={person.name}
                        person={person}
                    ></TotalSelected>)
                }
            </div>
        </div>
    );
};

export default Total;