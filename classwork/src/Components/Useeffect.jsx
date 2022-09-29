import React ,  {useState,useEffect} from 'react'
import axios from 'axios'

function Useeffect() {
// let [posts , setPosts]=useState([]);
let [post , setPost]=useState([]);
let[id, setId] =useState((1))

// useEffect(()=>{
//    axios.get('https://jsonplaceholder.typicode.com/posts/1')
//    .then(response=>{
//     console.log(response.data)
//     setPostas[ ...response.data])
//     })
// },[])

useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(response=> {
        console.log(response.data)
       setPost([...response.data])
   })
},[])
  return (
    <div>
   {
    // posts.map((post)=>(  //-----------------Doubt why use paranthesis here
        // console.log(post.body)
        <div >
            <p>{JSON.stringify(post)}</p>
            <p>{post}</p>
        </div>
    
        // ))
   }
    </div>

  )
}

export default Useeffect