import { useState } from 'react'
import reviews from './data'; 
import Reviews from './Reviews';
import DisplayData from './DisplayData';

function App() {
    const[ isNumber , setIsNumber ] = useState(0)
    const [ showData , isShowData ] = useState(reviews)

    const checkNumber = (number) =>{
        if(number>3) return 0
        if(number<0) return showData.length-1
        return number;
    }
    const decreaseNum = () =>{
        setIsNumber((index)=>{
            const newNumber = index-1
            return checkNumber(newNumber)
        })
    }
    const increaseNum =()=>{
        setIsNumber((index)=>{
            const newNumber = index + 1
            return checkNumber(newNumber) 
        })
    }
    const randomNumber = () =>{
        let randomNum = Math.floor(Math.random()*showData.length)
        if(isNumber === randomNum){
            randomNum = isNumber + 1 
        }
        setIsNumber(checkNumber(randomNum))
    }
 return (
 <>
 <Reviews/>
 <DisplayData  {...showData[isNumber]} randomNum={randomNumber} checkNumber={checkNumber} increaseNum={increaseNum} decreaseNum={decreaseNum}/>
 </>
 )
}

export default App
