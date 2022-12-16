import React,{useState, useEffect} from 'react'

function Timer() {
const [time,setTime]= useState(new Date())
const [seconds, setSeconds] = useState("")
// const date = new Date()
setTimeout(()=>{
    setTime(new Date())
},1000)

  return (
    <div>
      {/* <h1>{date.getHours()}</h1>
      <h1>{date.getMinutes()}</h1>
      <h1>{seconds}</h1> */}
      {time.toLocaleTimeString()}
    </div>
  )
}

export default Timer