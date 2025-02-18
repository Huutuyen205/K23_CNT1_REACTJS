
import React from 'react'

export default function NhtfunccompObj(props) {
  return (
    <div>
        <h2>props is object</h2>
        <p><b>info:</b></p>
        <p>Fullname: {props.renderInfo.fullname}</p>
        <p>age: {props.renderInfo.age}</p>
        <p>phone: {props.renderInfo.phone}</p>
    </div>
  )
}