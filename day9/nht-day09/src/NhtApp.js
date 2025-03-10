import React from 'react'
import NhtUseState from './components/NhtUseState'
import NhtUseEffect1 from './components/NhtUseEffect1'
import NhtUseStateListObject from './components/NhtUseStateListObject'

export default function NhtApp() {
  return (
    <div className='container border mt-3'>
      <h1>react hook</h1>
      <NhtUseState/>
      <NhtUseEffect1/>
      <NhtUseStateListObject/>
    </div>
  )
}
