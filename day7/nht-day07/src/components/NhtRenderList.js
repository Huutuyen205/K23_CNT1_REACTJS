import React from 'react'

export default function NhtRenderList() {
    const NhtList = ["huu tuyen", "ReactJS","Fit-NTU"];

    const NhtElement = NhtList.map(item=>{
        return <li>{item}</li>
    })

  return (
    <div className='alert alert-success'>
        <h2> Danh sách:</h2>
        <ul>
            {
                NhtList.map(item=>{
                    return <li>{item}</li>
                })
            }
        </ul>
        <hr/>
        {NhtElement}
    </div>
  )
}