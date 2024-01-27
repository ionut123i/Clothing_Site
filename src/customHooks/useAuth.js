// import {  useSelector } from "react-redux";
// import { useEffect } from "react";

// const mapState=({user})=>({
//     currentUser:user.currentUser
// })

// const useAuth=props=>{
//     const {currentUser}=useSelector(mapState)

// useEffect(()=>{
//     if(!currentUser){
//         props.history.push
//     }
// },[currentUser])

//     return currentUser
// }

// export default useAuth

// import { useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom';

// const mapState = ({ user }) => ({
//   currentUser: user.currentUser
// });

// const useAuth = props => {
//   const { currentUser } = useSelector(mapState);
//   const history = useHistory();

//   useEffect(() => {
//     if (!currentUser) {
//       history.push('/login');
//     }

//   }, [currentUser]);

//   return currentUser;
// };

// export default useAuth;




import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const mapState = ({ user }) => ({
  currentUser: user.currentUser
});

const useAuth = () => {
  const { currentUser } = useSelector(mapState);
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate('/login');
    }
  }, [currentUser, navigate]);

  return currentUser;
};

export default useAuth;
