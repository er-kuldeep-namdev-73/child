import React from 'react'

const Input = ({name,placeholder,className,type,pattern,accept,myref}) => {
  return (
    <div>
        <input type={type} placeholder={placeholder} className={className} name={name} pattern={pattern} accept={accept} ref={myref}/>
    </div>
  )
}

export default Input