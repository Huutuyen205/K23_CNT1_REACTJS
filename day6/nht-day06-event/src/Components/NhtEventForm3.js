import React, { Component } from 'react';

class NhtEventForm3 extends Component {
    constructor(props){
        super(props);
        this.state = {
            NhtGioiTinh:'Nam',
        }
    }

    // Hàm xử lý sự kiện change
    NhtHandleChange = (event)=>{
        this.setState({
            NhtGioiTinh:event.target.value,
        })
    }

    // Hàm xử lý sự kiện submit form
    NhtHandleSubmit = (event)=>{
        event.preventDefault();
        alert("Giới tính của bạn là: " + this.state.NhtGioiTinh)
    }
    render() {
        return (
            <div className='alert alert-success'>
                <h2> Form input - radio</h2>
                <form>
                    <div>
                        <label htmlFor=''>Giới tính:</label> 
                        <input type='radio' name='NhtGioiTinh'  id='NhtNam' className='mx-2'
                            value="Nam" checked={this.state.NhtGioiTinh === 'Nam'} onChange={this.NhtHandleChange}/> 
                            <label htmlFor='NhtNam'>Nam</label>  
                        <input type='radio' name='NhtGioiTinh'  id='NhtNu' className='mx-2'
                            value="Nữ" checked={this.state.NhtGioiTinh === 'Nữ'} onChange={this.NhtHandleChange}/> 
                            <label htmlFor='NhtNu'>Nữ</label>  
                        <input type='radio' name='NhtGioiTinh' id='NhtKhac' className='mx-2'
                            value="Khác" checked={this.state.NhtGioiTinh === 'Khác'} onChange={this.NhtHandleChange}/> 
                            <label htmlFor='NhtKhac'>Khác</label>
                    </div>
                    <button onClick={this.NhtHandleSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default NhtEventForm3;