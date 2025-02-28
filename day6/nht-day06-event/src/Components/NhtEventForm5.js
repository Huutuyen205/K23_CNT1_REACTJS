import React, { Component } from 'react';

class NhtEventForm5 extends Component {
    constructor(props){
        super(props);
        this.state = {
            NhtName:'tuyen',
            NhtAge:18,
            NhtGender:'Female',
            NhtCourse:'CSS3'
        }
    }

    // Hàm xử lý sự kiện change
    NhtHandleChange = (event)=>{
        // lấy tên điều khiển
        let name = event.target.name;
        // Lấy giá trị trên điều khiển đang thao tác
        let value = event.target.value;

        // Cập nhật state
        this.setState({
            [name]:value,
        })
    }
    // Sự kiện khi submit form
    NhtHandleSubmit = (ev)=>{
        ev.preventDefault();
        alert(this.state.NhtName + "\n" + this.state.NhtAge);

        // Chuyển dữ liệu trên form lên App component (NhtApp);
        this.props.onNhtHandleSubmit(this.state);
    }
    render() {
        return (
            <div className='alert alert-danger'>
                <h2>Form Student Info </h2>
                <form>
                    <div>
                        <label htmlFor='NhtName'>Student Name:</label>
                        <input type='text' name='NhtName' id='NhtName' 
                            value={this.state.NhtName}
                            onChange={this.NhtHandleChange} />
                    </div>
                    <div>
                        <label htmlFor='NhtAge'>Student Age:</label>
                        <input type='text' name='NhtAge' id='NhtAge' 
                            value={this.state.NhtAge}
                            onChange={this.NhtHandleChange} />
                    </div>
                    <div>
                        <label htmlFor='NhtGender'>Student Gender:</label>
                        <div>
                            <input type='radio' name='NhtGender' id='NhtMale' className='mx-2'
                                value={'Male'}
                                checked={this.state.NhtGender === 'Male'}
                                onChange={this.NhtHandleChange} />
                            <label htmlFor='NhtMale'> Male</label>
                        </div>
                        <div>
                            <input type='radio' name='NhtGender' id='NhtFemale' className='mx-2'
                                value={'Female'}
                                checked={this.state.NhtGender === 'Female'}
                                onChange={this.NhtHandleChange} />
                            <label htmlFor='NhtFemale'> Female</label>
                        </div>
                        <div>
                            <input type='radio' name='NhtGender' id='NhtNone' className='mx-2'
                                value={'None'}
                                checked={this.state.NhtGender === 'None'}
                                onChange={this.NhtHandleChange} />
                            <label htmlFor='NhtNone'> None</label>
                        </div>
                    </div>
                    <div>
                        <label htmlFor='NhtCourse'>
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
                    </div>
                    <button onClick={this.NhtHandleSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default NhtEventForm5;