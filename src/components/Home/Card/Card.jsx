/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Card.css';

const Card = ({selectedCards,remaining,totalCost, totalHr}) => {
    console.log(selectedCards);
    return (
        <div className='box-card' >
           <h5>Course Name</h5> 
           {
            selectedCards.map((card,index)=>(
               <ol className=''>
                 <li className='box'>{index+1} {card.name}</li>
               </ol>
            ))
           }
           <hr />
           <h5>Total Credit Hour remaining:{remaining}</h5>
           <hr />
           <h5>Total Price:{totalCost}</h5>
           <h5>Total credit hr:{totalHr}</h5>

        </div>
    );
};

export default Card;