import React, { Component } from "react";

class NhtStudent extends Component {
    constructor(props){
        super(props);
    }

    // Hàm xử lý chức năng xem
    NhtHandleView = (NhtStudent)=>{
        // Chuyển lên NhtStudentList
        this.props.onNhtHandleView(NhtStudent);
    }
  render() {
    // lấy đối tượng dữ liệu chuyển từ NhtStudentList
    let {renderNhtStudent, key} = this.props;
    console.log("Student:",renderNhtStudent);
    
    return (
      <>
        <tr>
          <td>{key}</td>
          <td>{renderNhtStudent.NhtId}</td>
          <td>{renderNhtStudent.NhtStudentName}</td>
          <td>{renderNhtStudent.NhtAge}</td>
          <td>{renderNhtStudent.NhtGender}</td>
          <td>
            <div className="template-demo">
              <button type="button" className="btn btn-danger btn-icon-text" 
                    onClick={()=>this.NhtHandleView(renderNhtStudent)}
                    >
                Xem
              </button>
              <button type="button" className="btn btn-warning btn-icon-text">
                Sửa
              </button>
              <button type="button" className="btn btn-success btn-icon-text">
                Xóa
              </button>
            </div>
          </td>
        </tr>
      </>
    );
  }
}

export default NhtStudent;





