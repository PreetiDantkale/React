import React, { useState , useEffect} from 'react';
//import React from 'react';

//import logo from './logo.svg';
import './App.css';
import Users from './components/users.js';

function App(){
  const [users , setUsers] = useState(["Josh","software","pvt","ltd"]);
  const [userName , setUserName] = useState("")

  const updateUser = () => {
    setUsers([...users, userName])
    setUserName("")
  }

const handleInputChange = (e) => setUserName(e.target.value)
  // useEffect(() =>{
  //   fetch('http://localhost:3000/users').then((jsonResponse) => {
  //     return jsonResponse.json();
  //   }).then((parsedResponse) =>{
  //     console.log(parsedResponse);
  //     setUsers(parsedResponse)
  //   }).catch((error) =>{
  //     console.error("error");
  //   })
  // });

  //const users = ["josh", "software", "pvt", "ltd"];
  return (
    <>
     <input type = "text" name = "names" onChange={handleInputChange} value={userName}/>
     <button type="submit" onClick={updateUser}>Add</button>
     <Users names = {users} />
     </>
  );
 }

export default App;
