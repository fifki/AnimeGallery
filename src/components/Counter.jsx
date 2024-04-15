import React from 'react'
import './style.css'
const Counter = () => {
//for const we can put let or any other type it will still function 
  //we only can put 2items in the array 
  //one is the vule we are changing 
  //and the other 
  //is the mothode we are using to change
  //useState is a function (hook bcs it starts by use) that exist 
  // in the lib of react it takes an array of 
  //lenghts 2  the zero is value by default
  const [contur,setCounter] = React.useState(0);
  function increment(){
    setCounter(contur + 1);
  }
  function dicrement(){
    if(contur > 0){
    setCounter(contur - 1);
    }
  }
  // only one element in return 
  return (
   <div className='section'>
    {/* we use className instad of class because class is a  keywoed by js */}
    <button onClick={increment}>+</button>
    <button onClick={dicrement}>-</button>
      <h1>{contur}</h1>
   </div>
  );
  
}

export default Counter