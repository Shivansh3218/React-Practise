import React ,  {useState,useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

function Useeffect() {
// let [posts , setPosts]=useState([]);
let [post , setPost]=useState([]);
// let[id, setId] =useState((1))

// useEffect(()=>{
//    axios.get('https://jsonplaceholder.typicode.com/posts/1')
//    .then(response=>{
//     console.log(response.data)
//     setPostas[ ...response.data])
//     })
// },[])

useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response=> {
        console.log(response.data)
       setPost([...response.data])
   })
},[])
  return (
    <div>
           <ul>
          <li>
            <Link to="/">Hook</Link></li>
            {/* <li><Link to="/">Checkbox</Link></li> */}
            <li><Link to="/Keyboard">Keyboard</Link></li>
            <li> <Link to="/LoginPage">LoginPage</Link></li>
            <li> <Link to="/Useeffect">Useeffect</Link></li>
            <li> <Link to="/Welcome">Welcome</Link></li>
        </ul>
      <h1>USE EFFECT </h1>
   {
    post.map((post)=>(//-----------------Doubt why use paranthesis here 
        // console.log(post.body)
        <div >
            <h1 key={post.id}>{post.title}</h1>
            {/* <p>{post.body}</p> */}
        </div>
    
    ))
   }
    </div>

  )
}

export default Useeffect