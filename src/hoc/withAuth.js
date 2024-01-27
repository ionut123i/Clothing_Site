// import React from 'react'
// import { useAuth } from '../customHooks'
// import {withRouter} from 'react-router-dom'


// const WithAuth=props=>useAuth(props)&&props.children

// export default withRouter (WithAuth)


import { useAuth } from './../customHooks';

const WithAuth = props => useAuth(props) && props.children;

export default WithAuth;