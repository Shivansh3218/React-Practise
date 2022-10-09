import React, { useState } from "react";

function Todo() {
  let [name, setName] = useState({
    firstname: "",
    lastname: "",
    email: "",
    team: "",
  });
  let [editable,setEditable]=useState(-1)
  let [para, setpara] = useState([]);

  let addpara = (e) => {
    e.preventDefault();
    setpara([...para, name]);
    setName({firstname:"",lastname:"",email:"",team:""})
    console.log(para)
  };

  let editTodo = (index) => {
   console.log(index);
   console.log(para[index]);
   setEditable(index);
  
   
  }

  let saveItem= (index) => { 
    para[index].firstname = name.firstname;
    para[index].lastname = name.lastname;
    para[index].email = name.email;
    para[index].team = name.team;
    setEditable(-1)
  }
  return (
    <>
    <h1>TODO </h1>
      <form>
        <div className="form_class">
            <h3>First Name</h3>
          <input value={name.firstname}
            type="text"
            onChange={(e) => {
              setName({ ...name,firstname: e.target.value });
            }}
          />  <h3>last Name</h3>
          <input
          value={name.lastname}
            type="text"
            onChange={(e) => {
              setName({ ...name,lastname: e.target.value });
            }}
          />
          <h3>email</h3>
          <input
          value={name.email}
            type="text"
            onChange={(e) => {
              setName({...name, email: e.target.value });
            }}
          />
          <h3>team</h3>
          <input
            type="text"
            value={name.team}
            onChange={(e) => {
              setName({...name, team: e.target.value });
            }}
          />
          <button onClick={addpara}>Submit</button>
        </div>
      </form>

      {para.map((item,index) => {
        
         return (
          editable!==index?
          <div className="content">
            <p>{item.firstname}</p>
            <p>{item.lastname}</p>
            <p>{item.email}</p>
            <p>{item.team}</p>
            <button onClick={()=>{
            editTodo(index);
              
                
            }}>edit</button>
            <button   onClick={() => {
              let filteredItems = para.filter((value) => value !== item);
              setpara([...filteredItems])
             }}>delete</button>
          </div>:  <div className="content">
            <input onChange={(e)=>{
            setName({ ...name,firstname: e.target.value });
            }} type="text"/>
            <input onChange={(e)=>{
            setName({ ...name,lastname: e.target.value });
            }} type="text"/>
            <input onChange={(e)=>{
            setName({ ...name,email: e.target.value });
            }} type="text"/>
            <input onChange={(e)=>{
            setName({ ...name,team: e.target.value });
            }} type="text"/>
            <button onClick={()=>{
           
              saveItem(index);
                
            }}>save</button>
            <button   onClick={() => {
              let filteredItems = para.filter((value) => value !== item);
              setpara([...filteredItems])
             }}>delete</button>
          </div>

        );
      })}
    </>
  );
}
export default Todo