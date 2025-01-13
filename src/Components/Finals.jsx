import React, { useEffect } from 'react'
import './Finals.css'
import { useState } from 'react';

function Finals() {
    const scoreStr = localStorage.getItem('score');
    const scoreArray = scoreStr ? scoreStr.split(',').map(Number) : [];
    const [counter,setCounter] = useState(0);
    const score = () => {
        const score = Array(localStorage.getItem('score'));
        console.log('Final score: ' + score)
        let counter =0 ;
        scoreArray.map((i,index) => {if (scoreArray[index]===1){
            console.log('Found correct ')
            const c = counter++;
            setCounter(c);
        }})
    console.log(counter)
    var x=counter/6 *100;
    console.log(parseFloat(x).toFixed(2)+"%");
  }

  useEffect(() => {
    score()
  },[])

  return (
    <div className=' d-flex justify-content-center final h1'>
        {counter!=0 ? <div> {(parseFloat( ((counter + 1)/6) *100 ).toFixed(2))} % </div>  : <div>0.00%</div> }
    </div>
  )
}

export default Finals