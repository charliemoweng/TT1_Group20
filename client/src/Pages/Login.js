//import './App.css';
//import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
//const navigate = useNavigate();
import axios from "axios"
import { useEffect, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
// Inside the handleLogin function

//impport {useNavigate}



//const { setAuthState } = useContext(AuthContext);




function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [cookies, setCookie] = useCookies(["user"]);

    const navigate = useNavigate();
    useEffect(() =>
    {
      if (cookies){
        navigate("/dashboard")
      }
    }, [])

   // const { setAuthState } = useContext(AuthContext);
    const login = () => {
      const data = { username: username, password: password }; //pass username and password into data
      var token = axios.post("http://localhost:3001/login", data)
        .then((res)=> {
          if (res.data){
            console.log(res.data);
            setCookie(res.data.token)
            navigate("/dashboard")
          }
        })
        .catch((err) => {
          console.log(err)
          navigate("/login")
        })
    };
   
  return (
    
    <div className="loginContainer">
    <label>Username:</label>
    <input
      type="text"
      onChange= {(e)=>setUsername(e.target.value)}
    />
    <label>Password:</label>
    <input
      type="password"
      onChange= {(e)=>setPassword(e.target.value)}
      />

<button onClick={login} > Login </button>

    </div>


  );
}

export default Login;