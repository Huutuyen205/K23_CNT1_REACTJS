import React, { Component } from 'react';

class NhtRenderListStudent extends Component {
    constructor(props){
        super(props);
        this.state = {
            NhtStudents:[
                {tcvId:"NTU001",NhtName:"Nguyen huu tuyen", NhtAge:46, NhtClass:"K23CNT1"},
                {tcvId:"NTU002",NhtName:"Nguyễn Nguyen huu tuyen A", NhtAge:22, NhtClass:"K23CNT1"},
                {tcvId:"NTU003",NhtName:"Nguyễn Nguyen huu tuyen B", NhtAge:21, NhtClass:"K23CNT1"},
                {tcvId:"NTU004",NhtName:"Nguyễn Nguyen C", NhtAge:23, NhtClass:"K23CNT1"},
            ],
        }
    }
    render() {
        let NhtElement = this.state.NhtStudents.map((NhtItem, index)=>{
            return(
                    <tr>
                        <td>{index+1}</td>
                        <td>{NhtItem.tcvId}</td>
                        <td>{NhtItem.NhtName}</td>
                        <td>{NhtItem.NhtAge}</td>
                        <td>{NhtItem.NhtClass}</td>
                        <td>
                            <button>Sửa</button>
                            <button>Xóa</button>
                        </td>
                    </tr>
            )
        })
        return (
            <div className='alert alert-info'>
                <h2>Danh sách sinh viên</h2>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>NhtId</th>
                            <th>NhtName</th>
                            <th>NhtAge</th>
                            <th>NhtClass</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {NhtElement}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default NhtRenderListStudent;