

import React, { useEffect, useState } from "react";
import AuthWrapper from "./../AuthWrapper";
import FormInput from "./../forms/FormInput";
import Button from "./../forms/Button";
import { useDispatch,useSelector } from "react-redux";
import { resetPasswordStart,resetUserState} from "../../redux/User/user.actions";
import { useNavigate } from "react-router-dom";





const mapState=({user})=>({
 resetPasswordSuccess:user.resetPasswordSuccess,
 userErr:user.userErr
})

const  EmailPassword =props=> {
  const {resetPasswordSuccess,userErr}=useSelector(mapState)
  const dispatch=useDispatch()
  const [email,setEmail]=useState('')
  const [errors,setErrors]=useState([])
  const navigate = useNavigate();


  useEffect(() => {
    if (resetPasswordSuccess) {
      dispatch(resetUserState());
      navigate('/login');
    }

  }, [resetPasswordSuccess]);


useEffect(()=>{
if(Array.isArray(userErr) && userErr.length>0){
  setErrors(userErr)
}

},[userErr])

  const  handleSubmit = (e) => {
    e.preventDefault();
 dispatch(resetPasswordStart({email}))
 
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

