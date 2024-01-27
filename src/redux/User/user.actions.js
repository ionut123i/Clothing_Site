import userTypes from "./user.types";
import { auth, handleUserProfile,GoogleProvider } from "../../firebase/utils";

export const setCurrentUser = (user) => ({
  type: userTypes.SET_CURRENT_USER,
  payload: user,
});

export const resetAllAuthForms=()=>({
type:userTypes.RESET_AUTH_FORMS
})


export const signInUser =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      dispatch({
        type: userTypes.SIGN_IN_SUCCESS,
        payload: true,
      });
    } catch (err) {}
  };

export const signUpUser =
  ({ displayName, email, password, confirmPassword }) =>
  async (dispatch) => {
    if (password !== confirmPassword) {
      const err = ["Passwords doesnt match"];
      dispatch({
        type: userTypes.SIGN_UP_ERROR,
        payload: err,
      });
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await handleUserProfile(user, { displayName });
      dispatch({
        type: userTypes.SIGN_UP_SUCCESS,
        payload: true,
      });

      //   reset()
      //   navigate('/')
    } catch (err) {
      //   console.error('Registration Error:', err.message);
      //  setErrors({ errors: [err.message] });
    }
  };

export const resetPassword =
  ({ email }) =>
  async (dispatch) => {
    const config = {
      url: "http://localhost:3000/login",
    };
    try {
      await auth
        .sendPasswordResetEmail(email, config)
        .then(() => {
          dispatch({
            type: userTypes.RESET_PASSWORD_SUCCESS,
            payload: true,
          });
        })
        .catch(() => {
          const err = ["the email wasnt found"];
          dispatch({
            type: userTypes.RESET_PASSWORD_ERROR,
            payload: err,
          });
        });
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
export const signInWithGoogle=()=> async dispatch=>{
 try{

 await  auth.signInWithPopup(GoogleProvider)
 .then(()=>{
  dispatch({
    type: userTypes.RESET_PASSWORD_SUCCESS,
    payload: true,
  });
 })
 }catch(err){

 }


}