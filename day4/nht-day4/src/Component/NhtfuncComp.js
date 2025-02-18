import React from 'react'

export default function NhtfuncComp(props) {
  return (
    <div>
        <h2> Demo: function component this.props.first</h2>
        <p>Lấy sữ liệu từ props để hiển thị</p>
        <p>Name: {props.name}</p>
        <p>address: {props.address}</p>
        <p>company: {props.company}</p>
        <p>note: {props.note}</p>
    </div>
  )
}