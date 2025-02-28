import React, { Component } from 'react';

class NhtClassCompEventProps extends Component {

    // Hàm xử lý sự kiện
    NhtEventHandleClick1 = ()=>{
        alert("Hello...." + this.props.NhtRenderTitle);
    }
    render() {
        return (
            <div className='alert alert-danger'>
                <button className='btn btn-primary' onClick={this.NhtEventHandleClick1}>Button 1</button>
            </div>
        );
    }
}

export default NhtClassCompEventProps;