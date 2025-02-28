import React, { Component } from 'react';

class NhtClassCompEvent1 extends Component {
    // Hàm xử lý sự kiện
    NhtEventHandleClick1 = ()=>{
        alert("Button 1 clicked");
    }

    NhtEventHandleClick2 = (name)=>{
        alert("Button 2 clicked; name="+name);
    }

    render() {
        return (
            <div className="alert alert-danger">
                <button className='btn btn-primary mx-1' onClick={this.NhtEventHandleClick1}>Button 1</button>
                <button className='btn btn-success mx-1' 
                    onClick={()=>this.NhtEventHandleClick2("Chung Trịnh")}>Button 2</button>
            </div>
        );
    }
}

export default NhtClassCompEvent1;