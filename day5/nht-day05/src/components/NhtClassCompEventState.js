import React, { Component } from 'react';

class NhtClassCompEventState extends Component {
    constructor(props){
        super(props);
        this.state = {
            NhtFullName:"Nguyen huu tuyen",
            NhtAge:18,
        }
    }

    // Hàm xử lý sự kiện
    tvcEventHandleClick1 = ()=>{
        // Lấy dữ liệu trong state
        alert("FullName: " +this.state.NhtFullName + "\n Age:" + this.state.NhtAge);
    }
    render() {
        return (
            <div className='alert alert-danger'>
                <button className='btn btn-primary' onClick={this.NhtEventHandleClick1}>Button 1 - Dữ liệu trong state</button>
            </div>
        );
    }
}

export default NhtClassCompEventState;