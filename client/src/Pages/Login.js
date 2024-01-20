//import './App.css';
//import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
//const navigate = useNavigate();
import axios from "axios"



function Login() {

    // axios.post("/login-form", data)
    // .then((response) => {
    //     console.log(response.data);
    //     if (response.data.error) {
    //         alert(response.data.error)
            
    //     }else{
            
    //         //setAuthState(true)
    //         //localStorage.setItem("accessToken",response.data)
    //         navigate("/dashboard");
    //     }
    // })
    // .catch((error) => {
    //     console.error("Error:", error);
    //     alert("You dont exist. Please Sign up instead..."); // Display a generic error message
    // });
   
  return (
    
    <div className="loginContainer">
    <label>Email:</label>
    <input
      type="text"
      
      
    />
    <label>Password:</label>
    <input
      type="text"
      />

<button onClick={Login} > Login </button>

    </div>


  );
}

export default Login;