import React from 'react'

export default function Box(props) {
  let result;
  if( props.title === "computer" &&
      props.result !== "" &&
      props.result !== "tie"){
        result =  props.result === "win"?"lose":"win"
      }else{
      result= props.result;
    }
  
  
  return (
    

    <>
    <div className='Boxs'>
      <div className='Box_title'>{props.title}</div>
      <div className="Box">
        <img className='Box-img' src={props.item && props.item.img} alt="가위" />
        <h2>{result}</h2>
    </div>
    </div>
   
    </>
  )
}
