import React from 'react';
import TotalSelected from '../TotalSelected/TotalSelected';
import './Total.css'

const Total = (props) => {

    const { total } = props;
    let totalsalary = 0;
    // find the total some of salary 
    for (const salary of total) {
        totalsalary = totalsalary + salary.salary;
    }
    return (
        <div className="card text-center ms-3 me-3 background">
            <div className="card-header text-black text-white">
                <h1 className='fw-bold border b-3 bg-secondar'>Total</h1>
                <div className='bg-dark'>
                    <h2 className='bg-dark'>Transection : {total.length}</h2>
                    <h5 className='pb-2'>Total Send : {totalsalary} TK</h5>
                </div>
                <h1 className='fw-bold border b-3 bg-secondar'>Transection History</h1>
            </div>

            {/* find the total list*/}
            <div className='selctedList'>
                {
                    // pass the single person details from Total to Totalselected component to show the list of selected person
                    total.map(person => <TotalSelected
                        key={person.sl}
                        person={person}
                    ></TotalSelected>)
                }
            </div>
        </div>
    );
};

export default Total;