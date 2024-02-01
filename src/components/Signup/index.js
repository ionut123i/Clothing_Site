// import React,{useState,useEffect} from "react";
// import "./styles.scss";
// import FormInput from "../forms/FormInput";
// import {  useDispatch,useSelector } from "react-redux";
// import { signUpUser } from "../../redux/User/user.actions";
// import Button from "../forms/Button";
// import AuthWrapper from "../AuthWrapper";
// import { useNavigate } from "react-router-dom";




// const mapState=({user})=>({
//  signUpSuccess:user.signUpSuccess,
//  signUpError:user.signUpError
// })

// const Signup =props=> {
// const dispatch=useDispatch()
// const {signUpSuccess,signUpError}=useSelector(mapState)
// const [displayName,setDisplayName]=useState("")
//  const [email,setEmail]=useState("")
//  const [password,setPassword]=useState("")
//  const [confirmPassword,setConfirmPassword]=useState("")
//  const [errors,setErrors]=useState([])

//  useEffect(()=>{
//    if(signUpSuccess){
//      reset()
//      navigate("/")
//    }
//  },[signUpSuccess])


//  useEffect(()=>{
//   if(Array.isArray(signUpError)&& signUpError.length>0){
//     setErrors(signUpError)
//   }

//  },[signUpError])

//  const navigate=useNavigate()

// const reset=()=>{
//   setDisplayName("")
//   setEmail("")
//   setPassword("")
//   setConfirmPassword("")
//   setErrors([])
// }

//  const handleSubmit= event=>{
//   event.preventDefault()
//  dispatch(signUpUser({
//   displayName,
//   email,
//   password,
//   confirmPassword
//  }))


// }

// }

 


//  const configAuthWrapper={
//   headline:"Registration"
//  }
 
//   return(
//     <AuthWrapper {...configAuthWrapper}>
     
       
//         <div className="formWrap">

//         {errors.length>0&&(
//           <ul>
//           {errors.map((err,index)=>{
//           return (
//             <li key={index}>
//             {err}
//             </li>
//           )
//           })}
//           </ul>
//         )}

//         <form onSubmit={handleSubmit}>
       
//         <FormInput 
//         type="text"
//         name="displayName"
//         value={displayName}
//         placeholder="Full name"
//         onChange={e=>setDisplayName(e.target.value)}
//         />

//         <FormInput 
//         type="email"
//         name="email"
//         value={email}
//         placeholder="Email"
//         onChange={e=>setEmail(e.target.value)}
//         />
//         <FormInput 
//         type="password"
//         name="password"
//         value={password}
//         placeholder="Password"
//         onChange={e=>setPassword(e.target.value)}
//         />
//         <FormInput 
//         type="password"
//         name="confirmPassword"
//         value={confirmPassword}
//         placeholder="Confirm Password"
//         onChange={e=>setConfirmPassword(e.target.value)}
//         />
//         <Button type="submit">
//         Register
//         </Button>
//         </form>
//         </div>
//         </AuthWrapper>
//   )
  
  


// export default Signup;

import React, { useState, useEffect } from "react";
import "./styles.scss";
import FormInput from "../forms/FormInput";
import { useDispatch, useSelector } from "react-redux";
import {  signUpUserStart } from "../../redux/User/user.actions";
import Button from "../forms/Button";
import AuthWrapper from "../AuthWrapper";
import { useNavigate } from "react-router-dom";

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
  userErr: user.userErr,
});

const Signup = (props) => {
  const dispatch = useDispatch();
  const { currentUser,userErr } = useSelector(mapState);
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    if (currentUser) {
      reset();
      
      navigate("/");
    }
  }, [currentUser]);

  useEffect(() => {
    if (Array.isArray(userErr) && userErr.length > 0) {
      setErrors(userErr);
    }
  }, [userErr]);

  const navigate = useNavigate();

  const reset = () => {
    setDisplayName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setErrors([]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      signUpUserStart({
        displayName,
        email,
        password,
        confirmPassword,
      })
    );
  };

  const configAuthWrapper = {
    headline: "Registration",
  };

  return (
    <AuthWrapper {...configAuthWrapper}>
      <div className="formWrap">
        {errors.length > 0 && (
          <ul>
            {errors.map((err, index) => {
              return (
                <li key={index}>
                  {err}
                </li>
              );
            })}
          </ul>
        )}

        <form onSubmit={handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            placeholder="Full name"
            onChange={(e) => setDisplayName(e.target.value)}
          />

          <FormInput
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button type="submit">
            Register
          </Button>
        </form>
      </div>
    </AuthWrapper>
  );
};

export default Signup;


