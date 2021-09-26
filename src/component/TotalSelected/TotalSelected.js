import React from 'react';
import './TotalSelected.css'

// get data and make a list of persons.

const TotalSelected = (props) => {
    const { name, img } = props.person;
    return (
        <div className="card sideCard m-2 h-50">
            <div className="row g-0 bg-dark">
                <div className="col-md-4">
                    <img className='img-fluid' src={img} alt="" />
                </div>
                <div className="col-md-8">
                    <div class="card-body">
                        <small>{name}</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TotalSelected;