import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from './Redux/counterSlice'






function Counter() {
  const [amount,setAmount]=useState("")
   const {count}=useSelector(state=>state.counterReducer)
   const dispatch=useDispatch()
   const handleincrementByAmount=()=>{
    if(amount){

      dispatch(incrementByAmount(parseInt(amount)))
    }
    else{
      alert("please enter the values..!")
    }
   }
   

  return (
    <>
    <div className='text-white text-center p-5 d-flex align-items-center justify-content-center w-100 flex-column 'style={{minHeight:'100vh',backgroundColor:'black'}}>
        <h1>counter App</h1>
       <div className="mt-5 border rounded border-white p-5">

        <h1>{count}</h1>
        <div className='mt-5 d-flex justify-content-around align-items-center'>
         <button onClick={()=>dispatch(increment())} className='btn btn-warning'>increment</button>
         <button onClick={()=>dispatch(reset())} className='btn btn-danger'>reset</button>
         <button onClick={()=>dispatch(decrement())} className='btn btn-success'>decrement</button>
        </div>

        <div className='mt-5 d-flex justify-content-center'>
           <input onChange={(e)=>setAmount(e.target.value)} type="text" className='form-control' placeholder='enter the data' />
           <button onClick={handleincrementByAmount} className='btn btn-primary ms-3'>increment by amount</button>
        </div>
       </div>
    </div>
    </>
  )
}

export default Counter
