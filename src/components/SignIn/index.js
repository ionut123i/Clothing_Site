import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { signInUser,signInWithGoogle,resetAllAuthForms } from "../../redux/User/user.actions";
import { Link } from "react-router-dom";
import "./styles.scss";
import Button from "../forms/Button";

import FormInput from "../forms/FormInput";
import AuthWrapper from "../AuthWrapper";
import { useNavigate } from "react-router-dom";

const mapState = ({ user }) => ({
  signInSuccess: user.signInSuccess,
});

const SignIn = (props) => {
  const { signInSuccess } = useSelector(mapState);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

   useEffect(() => {
    if (signInSuccess) {
      resetForm();
      dispatch(resetAllAuthForms())
      navigate("/");
    }
  }, [signInSuccess]);

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    dispatch(signInUser({ email, password }));


  };

  const handleGoogleSignIn=()=>{
    dispatch(signInWithGoogle())
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
