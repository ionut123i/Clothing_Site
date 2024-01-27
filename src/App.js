// import "./default.scss";
// import MainLayout from "./layouts/MainLayout";
// import Homepage from "./pages/Homepage";
// import HomepageLayout from "./layouts/HomepageLayout";
// import Registration from "./pages/Registration";
// import { Route, Routes, Navigate } from "react-router-dom";
// import Login from "./pages/Login";
// import { auth, handleUserProfile } from "./firebase/utils";
// import { useEffect } from "react";
// import Recovery from "./pages/Recovery";
// import { setCurrentUser } from "./redux/User/user.actions";
// import { connect } from "react-redux";
// import Dashboard from "./pages/Dashboard";

// import WithAuth from "./hoc/withAuth";


// const App = (props) => {
//   const { setCurrentUser, currentUser } = props;

//   useEffect(() => {
//     const authListener = auth.onAuthStateChanged(async (userAuth) => {
//       if (userAuth) {
//         const userRef = await handleUserProfile(userAuth);
//         userRef.onSnapshot((snapshot) => {
//           props.setCurrentUser({
//             id: snapshot.id,
//             ...snapshot.data(),
//           });
//         });
//       }

//       setCurrentUser(userAuth);
//     });

//     return () => {
//       authListener();
//     };
//   }, []);

//   return (
//     <div className="App">
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <HomepageLayout>
//               <Homepage />
//             </HomepageLayout>
//           }
//         />
//         <Route
//           path="/registration"
//           element={
//             currentUser ? (
//               <Navigate to="/" />
//             ) : (
//               <MainLayout>
//                 <Registration />
//               </MainLayout>
//             )
//           }
//         />
//         <Route
//           path="/login"
//           element={
//             currentUser ? (
//               <Navigate to="/" />
//             ) : (
//               <MainLayout>
//                 <Login />
//               </MainLayout>
//             )
//           }
//         />
       
//         <Route
//         path="/recovery"
//         element={
//           <MainLayout>
//             <Recovery />
//           </MainLayout>
//         }
//       />
//       <Route
//       path="/dashboard"
//       element={
//         <WithAuth>
//         <MainLayout>
//           <Dashboard/>
//         </MainLayout>
//         </WithAuth>
//       }
//     />
//       </Routes>
//     </div>
//   );
// };

// const mapStateToProps = ({ user }) => ({
//   currentUser: user.currentUser,
// });

// const mapDispatchToProps = (dispatch) => ({
//   setCurrentUser: (user) => dispatch(setCurrentUser(user)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(App);


import React, { useEffect } from "react";
import "./default.scss";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";
import { auth, handleUserProfile } from "./firebase/utils";
import { setCurrentUser } from "./redux/User/user.actions";
import MainLayout from "./layouts/MainLayout";
import Homepage from "./pages/Homepage";
import HomepageLayout from "./layouts/HomepageLayout";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Recovery from "./pages/Recovery";
import Dashboard from "./pages/Dashboard";


const App = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    const authListener = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot((snapshot) => {
          dispatch(setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          }));
        });
      }

      dispatch(setCurrentUser(userAuth));
    });

    return () => {
      authListener();
    };
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <HomepageLayout>
              <Homepage />
            </HomepageLayout>
          }
        />
        <Route
          path="/registration"
          element={
           
            
              <MainLayout>
                <Registration />
              </MainLayout>
           
          }
        />
        <Route
          path="/login"
          element={
            
              <MainLayout>
                <Login />
              </MainLayout>
            
          }
        />
        <Route
          path="/recovery"
          element={
            <MainLayout>
              <Recovery />
            </MainLayout>
          }
        />
        <Route
          path="/dashboard"
          element={
            
              <MainLayout>
                <Dashboard />
              </MainLayout>
          
          }
        />
      </Routes>
    </div>
  );
};

export default App;







