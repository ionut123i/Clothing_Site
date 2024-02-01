import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, } from 'react-router-dom';
import { emailSignInStart, googleSignInStart } from './../../redux/User/user.actions';
import FormInput from "../forms/FormInput";
import AuthWrapper from "../AuthWrapper";
import { useNavigate } from "react-router-dom";
import Button from '../forms/Button';
import "./styles.scss"


const mapState = ({ user }) => ({
  currentUser: user.currentUser
});

const SignIn = (props) => {
  const { currentUser} = useSelector(mapState);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

   useEffect(() => {
    if (currentUser) {
      resetForm();
      // dispatch(resetAllAuthForms())
      navigate("/");
    }
  }, [currentUser]);

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    dispatch(emailSignInStart({ email, password }));


  };

  const handleGoogleSignIn=()=>{
    dispatch(googleSignInStart())
  }

  const configAuthWrapper = {
    headline: "LogIn",
  };

  return (
    <AuthWrapper {...configAuthWrapper}>
      <div className="formWrap">
        <form onSubmit={handleSubmit}>
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
          <Button type="Submit">LogIn</Button>

          <div className="socialSignin">
            <div className="row">
              <Button onClick={handleGoogleSignIn}>SignIn with google</Button>
            </div>
          </div>
          <div className="links">
            <Link to="/registration">Register</Link>
            {` | `}
            <Link to="/recovery">Reset Password</Link>
          </div>
        </form>
      </div>
    </AuthWrapper>
  );
};

export default SignIn;
