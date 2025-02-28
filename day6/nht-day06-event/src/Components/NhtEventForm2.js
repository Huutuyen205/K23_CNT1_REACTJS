import React, { Component } from 'react';

class NhtEventForm2 extends Component {
    constructor(props){
        super(props);
        this.state={
            NhtCourse: 'CSS3',
        }
    }
    // Hàm xử lý sự kiện khi thay đồi khóa học
    NhtHandleChange = (event)=>{
        // Cập nhật lại state
        this.setState({
            NhtCourse:event.target.value,
        })
    }

    // Hàm xử lý sự kiện khi submit form
    NhtHandleSubmit = (event)=>{
        alert("Khóa học bạn chọn:" + this.state.NhtCourse);
        event.preventDefault();
    }
    render() {
        return (
            <div className='alert alert-danger'>
                 <h2>Form Select</h2>
                <form  >
                    <label htmlFor=''>
                      <select name='NhtCourse' id='NhtCourse' 
                            value={this.state.NhtCourse}
                            onChange={this.NhtHandleChange} >
                        <option value={'HTML5'}>HTML5</option>
                        <option value={'CSS3'}>CSS3</option>
                        <option value={'Javascript'}>Javascript</option>
                        <option value={'Jquery'}>Jquery</option>
                        <option value={'Bootstrap'}>Bootstrap</option>
                      </select>
                    </label>
                    <button className='btn btn-primary' onClick={this.NhtHandleSubmit}>Click here</button>
                </form>
            </div>
        );
    }
}

export default NhtEventForm2;













