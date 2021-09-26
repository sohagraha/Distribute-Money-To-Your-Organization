import React from 'react';
import './Person.css'

// here show every single person details in a card 

const Person = (props) => {
    const { name, img, id, email, departmen, faculty, designation, salary, phone } = props.person;
    return (
        <div className="col">
            <div className='card cards'>
                <img className='mx-auto' src={img} alt="" />
                <h5 className='fw-bold mt-3 ms-3 me-3'>{name}</h5>
                <p className='detailsTxt designation w-50 mx-auto'>{designation}</p>
                <h5 className=' m-2'>ID : {id}</h5>
                <div className='d-flex justify-content-around'>
                    <div>
                        <h6 className='detailsTxt df ps-2 pe-2'>Dept. : {departmen}</h6>
                    </div>
                    <div>
                        <h6 className='detailsTxt df'>Faculty : {faculty}</h6>
                    </div>

                </div>
                <h5 className='df fw-bold mt-1'>Amount : <span className='txt-color'>{salary}</span> TK</h5>
                <h5 className='mt-2'><i className="fas fa-envelope txt-color"></i> {email}</h5>
                <h5 className='mt-2'><i className="fas fa-phone-square-alt txt-color"></i> {phone}</h5>
                {/* onClick function called when the button is clicked and "handeltotal" help to detecd the clicked iteam */}
                <button onClick={() => props.handleTotal(props.person)} className='calc w-75 mx-auto fw-bold'>Send Money <i className="fas fa-paper-plane"></i></button>

                <h3><a className='text-dec' target='blank' href="https://github.com/"><i className="fab fa-github-square text-black"></i> </a><a className='text-dec' target='blank' href="https://www.linkedin.com/"> <i className="fab fa-linkedin text-black"></i> </a></h3>
            </div>
        </div>
    );
};

export default Person;