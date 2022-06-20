import React from "react";
const Login = () => {
  let [users, setUsers] = React.useState([]);
  let url = "https://reqres.in/api/login";
  fetch(url)
  .then(response => response.json())
  .then(data => {
    setUsers(data);
  })
  .catch(error => {
    console.log(error);
  })
  const verifyUser =()=>{
    console.log(users);
  }
  return <div>
    <h1>Login</h1>
    <label>Email :</label>
    <input placeholder="nameemail@abc.com">

    </input>
    <br />
    <label>Password</label>
    <input placeholder="#1@Acd0">
    </input>
    <br />
    <button onClick={verifyUser}>LOGIN</button>
  </div>;
};

export default Login;