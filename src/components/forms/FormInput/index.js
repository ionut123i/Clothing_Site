import React from 'react'
import './styles.scss'


const FormInput = ({hadndleChange,label,...otherProps}) => {
  return (
    <div className='formRow'>
      {label &&(
        <label>
        {label}
        </label>
      )}
      <input className='formInput' onChange={hadndleChange} {...otherProps}/>
    </div>
  )
}

export default FormInput
