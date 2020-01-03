import React from 'react';

function Users(props){
  //Console.log(props)
  let {names} = props
  return (
    <ul>
    {
      names.map((name,i) => {
        //return <li key={i}>{`${name.first_name} ${name.last_name}`}</li>
        return <li key={i}>{name}</li>
      })
    }
    </ul>
    );
}

export default Users;
