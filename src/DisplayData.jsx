import React,{ useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const DisplayData = ({id,name,job,image,text,randomNum,increaseNum,decreaseNum})=>{
   return (
    <section key={id} className="container">
        <div className="img-container">
            <img src={image} alt={name} />
            <button className="quote-right"><FaQuoteRight/></button>
        </div>                
        
        <h3 style={{fontWeight:'700'}}>{name}</h3>
        <h5>{job}</h5>
        <p>{text}</p>
        <div className="button">
            <button><FaChevronLeft onClick={decreaseNum}/></button>
            <button onClick={increaseNum}><FaChevronRight/></button>
        </div>
        <button className="random-btn" onClick={randomNum}>suprise me</button>
    </section>
   )
}

export default DisplayData;
