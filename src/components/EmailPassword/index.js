// import React, { Component } from "react";
// import { useNavigate } from 'react-router-dom';

// import "./styles.scss";
// import AuthWrapper from "./../AuthWrapper";
// import FormInput from "./../forms/FormInput";
// import Button from "./../forms/Button";
// import {auth} from './../../firebase/utils'


// const initialState={
//     email:""
// }
// const { navigate } = this.props;


// class EmailPassword extends Component {

//   navigate = useNavigate();

// constructor(props){
//     super(props)
//     this.state={
//         ...initialState
//     }
//     this.handleChange=this.handleChange.bind(this)
// }


// handleChange(e){
//     const {name,value}= e.target
//     this.setState({
//         [name]:value
//     })
// }

// // handleSubmit= async(e)=>{
// //   e.preventDefault()

// //   try {
// //     const {email}=this.state
// //     const config={
// //         url:"http://localhost:3000/login"
// //     }

// //   await auth.sendPasswordResetEmail(email,config)
// //   .then(()=>{
// //    this.props.navigate.push("/login")
// //   }).catch(()=>{
// //     console.log("Something went wrong")
// //   })
// //   } catch (error) {
    
// //   }
// // }
// handleSubmit = async (e) => {
//   e.preventDefault();

//   try {
//     const { email } = this.state;
//     const config = {
//       url: "http://localhost:3000/login",
//     };

//     await auth.sendPasswordResetEmail(email, config).then(() => {
//       this.props.navigate('/login'); // Use navigate directly without push
//     }).catch(() => {
//       console.log("Something went wrong");
//     });
//   } catch (error) {
//     console.error("An error occurred:", error);
//   }
// }


//   render() {

// const {email}=this.state

//     const configAuthWrapper = {
//       headline: "Email Password",
//     };

//     return (
//       <AuthWrapper {...configAuthWrapper}>
//         <div className="formWrap">
//           <form onSubmit={this.handleSubmit}>
//           <FormInput
//           type="email"
//           name="email"
//           value={email}
//           placeholder="Email"
//           onChange={this.handleChange}
//           />
//           <Button type="submit">
//           Email Password
//           </Button>
//           </form>
//         </div>
//       </AuthWrapper>
//     );
//   }
// }

// export default  EmailPassword;

import React, { useEffect, useState } from "react";
import AuthWrapper from "./../AuthWrapper";
import FormInput from "./../forms/FormInput";
import Button from "./../forms/Button";
import { useDispatch,useSelector } from "react-redux";
import { resetAllAuthForms, resetPassword } from "../../redux/User/user.actions";
import { useNavigate } from "react-router-dom";





const mapState=({user})=>({
  resetPasswordSuccess:user.resetPasswordSuccess,
  resetPasswordError:user.resetPasswordError
})

const  EmailPassword =props=> {
  const {resetPasswordSuccess,resetPasswordError}=useSelector(mapState)
  const dispatch=useDispatch()
  const [email,setEmail]=useState('')
  const [errors,setErrors]=useState([])
  const navigate = useNavigate();


useEffect(()=>{
if(resetPasswordSuccess){
  dispatch(resetAllAuthForms())
  navigate("/login")
}
},[resetPasswordSuccess])


useEffect(()=>{
if(Array.isArray(resetPasswordError) && resetPasswordError.length>0){
  setErrors(resetPasswordError)
}

},[resetPasswordError])

  const  handleSubmit = (e) => {
    e.preventDefault();
 dispatch(resetPassword({email}))
 
  };

 


    const configAuthWrapper = {
      headline: "Email Password",
    };

    return (
      <AuthWrapper {...configAuthWrapper}>
        <div className="formWrap">
        {errors.length>0&&(
          <ul>
          {errors.map((e,index)=>{
            return(
              <li key={index}>
              {e}
              </li>
            )
          })}
          </ul>
        )}
          <form onSubmit={handleSubmit}>
            <FormInput
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              onChange={e=>setEmail(e.target.value)}
            />
            <Button type="submit">
              Email Password
            </Button>
          </form>
        </div>
      </AuthWrapper>
    );
  }


export default EmailPassword;

