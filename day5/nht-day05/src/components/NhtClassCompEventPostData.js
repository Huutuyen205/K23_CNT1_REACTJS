import React, { Component } from "react";

class NhtClassCompEventPostData extends Component {
    constructor(props){
        super(props);
    }

    // Hàm xử lý sự kiện
    NhtEventHandleClick = ()=>{
        // Chuyển dữ liệu lên App thông qua props
        this.props.onTvcDataToApp("Dữ liệu từ component con - NhtClassCompEventPostData");
    }
  render() {
    return (
      <div className="alert alert-success">
        <button className="btn btn-primary"
            onClick={this.NhtEventHandleClick}>
                Button 1 - Chuyển dữ liệu lên App
        </button>
      </div>
    );
  }
}

export default NhtClassCompEventPostData;
