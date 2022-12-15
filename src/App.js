import { useState } from 'react';
import './App.css';
import Box from './component/Box';
import { FaHandPaper ,FaHandScissors,FaHandRock, FaUserAltSlash} from 'react-icons/fa';

let Choice={
  scissors:{
    name:'Scissors',
    img :'https://blog.kakaocdn.net/dn/HfURw/btqXKvOTNWK/gWTwPXEg9QzSV0ilOuwuak/img.png'
  },
  rock:{
  name:'Rock',
  img : 'https://blog.kakaocdn.net/dn/pSJwo/btqXJV1lACE/nx5XrxkCLWXh9UsnoS8vbK/img.png'
  },
  paper:{
    name:'Paper',
    img : 'https://blog.kakaocdn.net/dn/bmjB2s/btqXHhp6kpG/TH14W4U612SxKo9uuR2sB0/img.png'
  }
}

function App() {
  const [userSelect,setUserSetect] = useState('null')
    const[computerSelect,setCompuerSelect] =useState('null')
    const[result,setresult] = useState('')

    const play = (userChoice) =>{
      setUserSetect(Choice[userChoice])
    let computerChice = randomChoice()
    setCompuerSelect(computerChice)

    let judgment = winlose(Choice[userChoice],computerChice)
    setresult(judgment)
    }
    
    const winlose= (user,computer)=>{
        console.log("유저",user,"컴퓨터",computer)

        if(user.name === computer.name){
          return "tie"
        }else if(user.name ==="Scissors")
        return computer.name === "Paper" ? "win":"lose"
        else if(user.name === "Paper")
        return computer.name === "Rock"?"win" : "lose"
        else if(user.name === "Rock")
        return computer.name ===  "Scissors"?"win":"lose"
      }
   
  
const randomChoice = () =>{
  let itemArray = Object.keys(Choice);
  console.log(itemArray)
  let randomItem = Math.floor(Math.random()*itemArray.length)
  console.log(randomItem)
  let final = itemArray[randomItem]
  return Choice[final]
}
  
  

return (
   <>
   <div className='BOX_list'>
   <Box title={"user"}  item={userSelect}  result={result}/>
   <Box title={"computer"} item={computerSelect} result={result}/>
  </div>
  <div className="btnBox">
  <button onClick={()=>play("scissors")}  ><FaHandScissors/></button>
  <button onClick={()=>play("rock")}><FaHandRock/></button>
  <button onClick={()=>play("paper")} ><FaHandPaper/></button>
  </div>
  </>

  ); 

  }
export default App;
