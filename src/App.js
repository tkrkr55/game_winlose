import { useState } from 'react';
import './App.css';
import Box from './component/Box';

let 선택 = {
  Sicssor : {
    name : '가위',
    img : 'https://cdn.crowdpic.net/detail-thumb/thumb_d_4ABE250623ED062CF7DBB6CFB93E364E.jpg'
  },
 Rock : {
  name : '주먹',
  img : 'https://src.hidoc.co.kr/image/lib/2020/7/16/1594882105658_0.jpg'
 }
,
paper : {
  name : '보',
  img : 'https://korearps.kr/wp-content/uploads/sites/75/2020/03/slider-pic-102.png'
}

}

function App() {

  const[choice,setChoice]=useState(null)
  const[computerChoice,setComputerChoice]=useState(null)
  const[result,setResult] = useState('')
  const 클릭 = (실행)  =>{
    setChoice(선택[실행])
  
    let computers = rendomChoice();
    setComputerChoice(computers)
    console.log(computers)
     //유저가 선택한 값과 컴퓨터가 선택한 값을 가져온다.
    let 결과값 =   setResult(judgement(선택[실행],computers))
    console.log("어떤거니?",결과값)
  }

  const judgement = (user,computer)=>{
    console.log("유저",user,"컴퓨터",computer)

    if(user.name == computer.name){return "tie"
  } else if(user.name =="주먹")
  return computer.name == "가위"?"win":"lose"
  else if(user.name == "가위")
  return computer.name == "보"?"win":"lose"
  else if(user.name == "보")
  return computer.name == "주먹"?"win":"lose"
}
  const rendomChoice = () =>{
   let arry = Object.keys(선택)
   console.log(arry)
   let Arryrendom = Math.floor( Math.random()*arry.length)
   console.log(Arryrendom)
   let final = arry[Arryrendom]
   return 선택[final]

  }
  return (
    <>
    <div className='BOX_list'>
      <Box title="user" item={choice} result={result}/>
      <Box title="computer" item={computerChoice} result={result} />
      
    </div>
    <div className="btnlist">
    <button className='btn' onClick={()=>클릭("Sicssor") }>가위</button>
  <button className='btn' onClick={()=>클릭("Rock")}>바위</button>
  <button className='btn' onClick={()=>클릭("paper")}>보</button>
  </div>
  </>
  ); 

  }
export default App;
