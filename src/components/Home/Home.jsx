/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react';
import './Home.css';
import Card from './Card/Card';
// import {FaBeer,BsBook } from 'react-icons/fa';

const Home = () => {
    const[allCards, setAllCards] = useState([]);
    const[selectedCards, setSelectedCards] = useState([]);



 useEffect(()=>{
  fetch('./data.json')
  .then(res=> res.json())
  .then(data=> setAllCards(data))
 },[]);
//  console.log(allCards)

const handelSelector = (card) => {

    const isExist = selectedCards.find((item)=>item.id == card.id);

    if(isExist){
  return('booked');
    }else{
        setSelectedCards([...selectedCards,card]);
    }
  
};
console.log(selectedCards);



    return (
        <div className='container'>
              <h1>Course Registration</h1>
              <div className='home-container'>
               <div className="card-container">
               {
                allCards.map(card=> (
                    <div className='card'>
                    <div className='card-img'>
                        <img src={card.imgage} alt="" />

                    </div>
                    <h3>{card.name}</h3>
                    <p>It is a long established fact that a reader
                      will be distracted by the readable content
                      of a page when looking at its layout.</p>
                      <div className="card-info">
                        <p>$ price:15000</p>
                        <p>{card.credit}hr</p>
                            
                      </div>
                      <div>
                        <button onClick={()=>handelSelector(card)} className='btn'>select</button>
                      </div>


                </div>
                ))
               }
               </div>
                <div className="cart">
                  <Card selectedCards={selectedCards}></Card>
                </div>

              </div>
        </div>
    );
};

export default Home;