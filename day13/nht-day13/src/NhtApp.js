import React from 'react'
import NHTReadApiLocal from './components/NhtReadApiLocal'
import NhtReadMockAPI from './components/NhtReadMockAPI'
import NhtCreateMockAPI from './components/NhtCreateMockAPI'





export default function NhtApp() {
  return (
    <div className='container border my-3 p-3'>
      <h1>react nguyen huu tuyen</h1>
      <hr/>
<NHTReadApiLocal/>
<hr/>
<h2>doc du lieu tu moc api</h2>
<NhtReadMockAPI/>
<NhtCreateMockAPI/>

    </div>
   
  )
}
