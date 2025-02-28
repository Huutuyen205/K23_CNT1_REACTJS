import React, { Component } from 'react';

class NhtEventForm1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            NhtStudentName:'tuyenmino',
        }
    }
    // Hàm xử lý sự kiện khi dữ liệu trên textbox (NhtStudentName) thay đổi
    NhtHandleChange = (event)=>{
        // Cập nhật lại state
        this.setState({
            NhtStudentName:event.target.value,
        })
    }
    // Khi submit form, lấy dữ liệu và hiển thị
    NhtHandleSubmit = (ev)=>{
        alert('Xin chào:' + this.state.NhtStudentName);
        ev.preventDefault();
    }
    render() {
        return (
            <div className='alert alert-info'>
                <h2>Form Input</h2>
                <form  onSubmit={this.NhtHandleSubmit}>
                    <label htmlFor='NhtStudentName'>
                        <input type='text' name='NhtStudentName' id='NhtStudentName' 
                            value={this.state.NhtStudentName}
                            onChange={this.NhtHandleChange}
                        />
                    </label>
                    <button className='btn btn-primary'>Click here</button>
                </form>
            </div>
        );
    }
}

export default NhtEventForm1;