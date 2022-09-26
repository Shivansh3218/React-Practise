import React,{useState} from 'react'

export default function Hook() {
let[name,setName]= useState({firstname:"",lastname:""})
let[item,setitem]=useState([])
  return (
    <form >
        <input type="text" onChange={(e)=>{
            setName({firstname:e.target.value})

        }} value={name.firstname} />
        <input type="text" onChange={(e)=>setName({lastname:e.target.value})}  value={name.lastname}/>
        <button onClick={()=>{

        }}>submit</button>


        <h1>Your First Name is: {name.firstname}</h1>
        <h1>Your Last Name is: {name.lastname}</h1>
        <h1>{JSON.stringify(name)}</h1>
    </form>



  )
}
