import React from 'react'
import Header from './../components/Header/index'
import Footer from '../components/Footer'

function MainLayout(props) {
  return (
    <div >
      <Header {...props}/>
      <div className='main'>
        {props.children}
      </div>
      <Footer/>
    </div>
  )
}

export default MainLayout
