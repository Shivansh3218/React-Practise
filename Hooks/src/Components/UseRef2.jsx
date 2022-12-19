import React,{useState, useRef, useEffect} from "react";

const UseRefs = ()=>{
    const [name,setName] = useState("")
    // const [count,setCount] = useState(0)
    const count = useRef(0)
    const initalvalue = useRef("")


useEffect(()=>{
    initalvalue.current.focus()
    // setCount((count)=>count+1)
    count.current+=1
},)

const handleClick= ()=>{
    console.log(initalvalue.current)
    
}

return(
    <>
    <input  ref={initalvalue}  type="text" onChange={(e)=>setName(e.target.value)}/>
    <h1>My count is {count.current}</h1>

    <input type="text"  />
    <button onClick={handleClick}>Submit</button>
    </>
)
}
export default UseRefs