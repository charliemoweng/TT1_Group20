//import './App.css';
//import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
//const navigate = useNavigate();
import axios from "axios"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

//impport {useNavigate}



//const { setAuthState } = useContext(AuthContext);




function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
   // const { setAuthState } = useContext(AuthContext);
    let navigate = useNavigate();
    const login = () => {
      const data = { username: username, password: password }; //pass username and password into data
      axios.post("http://localhost:3001/login", data).then((response) => {
        //if accesstoken is valid, user will be logged in
          console.log(response.data);
        
      });
    };
   
  return (
    
    <div className="loginContainer">
    <label>Username:</label>
    <input
      type="text"
      
      
    />
    <label>Password:</label>
    <input
      type="password"
      />

<button onClick={Login} > Login </button>

    </div>


  );
}

export default Login;