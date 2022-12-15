import React from 'react'

export default function Box(props) {
let result;

if(props.title === 'computer' &&
props.result !== '' &&
props.result !== 'tie'
){
  result = props.result === "win" ? "lose":"win"
}else{
  result= props.result
}
  
  
  return (
    

    <>
      <div className="container">
        <div className={`game ${result}`}>
          <div className="title">{props.title}</div>
          <img src={props.item && props.item.img } alt="가위" />
          <h1>{result}</h1>
        </div>
      </div>
    </>
  )
}
