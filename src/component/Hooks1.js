import React,{useState} from 'react'
import '../App.css'
  
function Hooks1() {
  const [myName,setMyName] = useState('Hello Shadab');
   const changeName = () =>{
    let val = myName;
    if(val=== 'Hello Shadab'){
      setMyName('Makes Simple Life')
    }
    else{
      setMyName('Hello Shadab')
    }
   }

   return (
    <div className="App">
       <h1>{myName}</h1>
       <button className='btn' onClick={changeName}>Click Me</button>
     </div>
  );
}

export default Hooks1;