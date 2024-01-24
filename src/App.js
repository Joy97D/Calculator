import './App.css';
import {outputscreen as Out} from './components/outputscreen';
import { useEffect, useState } from 'react';

function App() {
  const [first,setfirst]=useState(0)
  const [firstset, setfirstset]=useState(false)
  const [second,setsecond]=useState(null)
  const [operation, setoperation]=useState(null)
  const [cal,setcal]=useState(false)
  const [dec,setdec]=useState(false)
  const [result,setresult]=useState(null)
  const handleclick=(val)=>{
    if(!firstset){
      if(cal){
        setresult(null)
        setcal(false)
      }
      if(val==='.')
      {
        setfirst(first+val)
        setdec(true)
      }
      else if(!dec && first >=0){
      setfirst((first*10)+val)}
      else if(!dec && first<0){
        setfirst((first*10)-val)
      }
      else if(dec && first >=0){
        setfirst(first+(val))
      }
      else if(dec && first<0){
        setfirst(first-(val))
      }
    }
    else if(firstset){
      if(cal){
        setresult(null)
        setcal(false)
      }
       if(val==='.')
       {
         setsecond(second+val)
         setdec(true)
       }
       else if(!dec && second >=0){
       setsecond((second*10)+val)}
       else if(!dec && second <0)
       {
        setsecond((second*10)-val)
       }
       else if(dec && second >=0){
        setsecond(second+(val))
      }
      else if(dec && second<0){
        setsecond(second-(val))
      }
    }
  }
  const handlecal=()=>{
    if(operation==='X')
    {
      setresult(Number(first*second))
      setcal(true)
      setfirst(0)
      setfirstset(false)
      setsecond(null)
    }
    else if(operation==='-')
    {
      var num=Number(first)-Number(second)
      setresult(Math.round(num*10)/10)
      setfirstset(false)
      setcal(true)
      setfirst(0)
      setsecond(null)
    }
    else if(operation==='+')
    {
      var num=Number(first)+Number(second)
      setresult(Math.round(num*10)/10)
      setcal(true)
      setfirstset(false)
      setfirst(0)
      setsecond(null)
    }
    else if(operation==='/' && second!==0)
    {
      setresult(first/second)
      setcal(true)
      setfirstset(false)
      setfirst(0)
      setsecond(null)
    }
    else if(operation==='%')
    {
      setresult(first*second/100)
      setcal(true)
      setfirstset(false)
      setfirst(0)
      setsecond(null)
    }
    setoperation(null)
  }
  const clear=()=>{
    setfirst(0)
    setsecond(null)
    setoperation(null)
    setfirstset(false)
    setdec(false)
  }
  const handlenegation=()=>{
    if(cal){
      setresult(result*-1)
    }
    else if(firstset)
    {
      setsecond(second*-1)
    } 
    else if(!cal){
      setfirst(first*-1)
    }

  }
  useEffect(()=>{
    if(operation!==null && second===null)
    {
      setresult(`${first} ${operation}`)
    }
    else if(operation!==null && !cal)
    {
      setresult(`${first} ${operation} ${second}`)
    }
  },[operation,second])
  return (
    <div className="App">
      <h1>Calculator</h1>
      <div className='dsad'>
        <Out result={result} first={first} second={second}/>
        <div className='section'>
          <button className='button' onClick={()=>{
            clear()
            setresult(null)
          }}>AC</button>
          <button className='button' onClick={()=>handlenegation()}>+/-</button>
          <button className='button' onClick={()=>
           {
            if(cal){
              console.log(result)
            setfirst(result)
            setfirstset(true)
            setdec(false) 
            // setfirst(result)
            setoperation('%')}
            else if(first!==0){
              setfirstset(true)
              setdec(false)
              setoperation('%')
            }
            }}>%</button>
          <button className='button-orange' onClick={()=>
          {
            if(cal){
              console.log(result)
            setfirst(result)
            setfirstset(true)
            setdec(false) 
            setoperation('/')}
            else if(first!==0){
              setfirstset(true)
              setdec(false)
              setoperation('/')
            }
            }}>/</button>
          </div>
          <div className='section'>
          <button className='button' onClick={()=>handleclick(7)}>7</button>
          <button className='button' onClick={()=>handleclick(8)}>8</button>
          <button className='button' onClick={()=>handleclick(9)}>9</button>
          <button className='button-orange' onClick={()=>
           {
            if(cal){
              console.log(result)
            setfirst(result)
            setfirstset(true)
            setdec(false) 
            // setfirst(result)
            setoperation('X')}
            else if(first!==0){
              setfirstset(true)
              setdec(false)
              setoperation('X')
            }
            }}>X</button>
          </div>
          <div className='section'>
          <button className='button' onClick={()=>handleclick(4)}>4</button>
          <button className='button' onClick={()=>handleclick(5)}>5</button>
          <button className='button' onClick={()=>handleclick(6)}>6</button>
          <button className='button-orange'  onClick={()=>
           {
            if(cal){
              console.log(result)
            setfirst(result)
            setfirstset(true)
            setdec(false) 
            // setfirst(result)
            setoperation('-')}
            else if(first!==0){
              setfirstset(true)
              setdec(false)
              setoperation('-')
            }
            }}>-</button>
          </div>
          <div className='section'>
          <button className='button' onClick={()=>handleclick(1)}>1</button>
          <button className='button' onClick={()=>handleclick(2)}>2</button>
          <button className='button' onClick={()=>handleclick(3)}>3</button>
          <button className='button-orange'  onClick={()=>
           {
            if(cal){
              console.log(result)
            setfirst(result)
            setfirstset(true)
            setdec(false) 
            // setfirst(result)
            setoperation('+')}
            else if(first!==0){
              setfirstset(true)
              setdec(false)
              setoperation('+')
            }
            }}>+</button>
          </div>
          <div className='section'>
          <button className='button-2' onClick={()=>handleclick(0)}>0</button>
          <button className='button' onClick={()=>handleclick('.')}>.</button>
          <button className='button-orange' onClick={()=>handlecal()}>=</button>
          </div>
        </div>
    </div>
  );
}

export default App;
