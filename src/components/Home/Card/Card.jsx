/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Card.css';

const Card = ({selectedCards}) => {
    console.log(selectedCards);
    return (
        <div >
           <h5>Course Name</h5> 
           {
            selectedCards.map(card=>(
               <ol>
                 <li>{card.name}</li>
               </ol>
            ))
           }
           <hr />
        </div>
    );
};

export default Card;