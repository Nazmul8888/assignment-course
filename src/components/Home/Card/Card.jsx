/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Card.css';

const Card = ({selectedCards,remaining,totalCost}) => {
    console.log(selectedCards);
    return (
        <div className='box-card' >
           <h5>Course Name</h5> 
           {
            selectedCards.map(card=>(
               <ol>
                 <li>{card.name}</li>
               </ol>
            ))
           }
           <hr />
           <h5>Total Credit Hour:{remaining}</h5>
           <hr />
           <h5>Total Price:{totalCost}</h5>
        </div>
    );
};

export default Card;