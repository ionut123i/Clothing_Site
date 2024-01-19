import React from "react";
import "./styles.scss";
import Button from "../forms/Button";
import {signInWithGoogle} from './../../firebase/utils' 


const SignIn = () => {


 const handleSubmit=async e=>{
  e.preventDefault()
 }


  return (
    <div className="signin">
      <div className="wrap">
        <h2>LogIn</h2>

        <div className="formWrap">
          <form onSubmit={handleSubmit}>
            <div className="socialSignin">
              <div className="row">
                <Button onClick={signInWithGoogle}>SignIn with google</Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
