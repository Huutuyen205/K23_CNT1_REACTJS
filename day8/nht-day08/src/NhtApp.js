import React, { Component } from "react";
import NhtControl from "./components/Nhtcontrol";
import NhtStudentsList from "./components/NhtStudentsList";
import NhtForm from "./components/NhtForm";

class NhtApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      NhtStudents:[
        {NhtId:"SV001",NhtStudentName:"Trịnh Văn Chung",NhtAge:46,NhtGender:"Nam",NhtBirthday:"25/05/1979",NhtBirthPlace:"HN", NhtAddress:"Tòa VCN, 25 Vũ Ngọc Phan"},
        {NhtId:"SV002",NhtStudentName:"Chu Nguyên Chương",NhtAge:188,NhtGender:"Nữ",NhtBirthday:"25/05/1179",NhtBirthPlace:"HP", NhtAddress:"Trung quốc"},
        {NhtId:"SV003",NhtStudentName:"Tần Thủy Hoàng",NhtAge:55,NhtGender:"Nam",NhtBirthday:"25/05/1079",NhtBirthPlace:"TpHCM", NhtAddress:"Trung Quốc"},
        {NhtId:"SV004",NhtStudentName:"Hoàng Thùy Linh",NhtAge:55,NhtGender:"Nam",NhtBirthday:"25/05/1079",NhtBirthPlace:"TpHCM", NhtAddress:"Hồ chí minh"},
      ],
      NhtStudent:"",

    }
  }

  // Hàm xử lý sự kiện view Student
  NhtHandleView = (NhtStudent)=>{
    this.setState({
      NhtStudent:NhtStudent,
    })
  }

  render() {
    // log
    console.log("View Student:", this.state.NhtStudent);
    
    return (
      <div>
        <h1 className="text-center">
          Trịnh Văn Chung - K23CNT3 - Mini Project1
        </h1>
        <section className="container-fluid mt-3">
          <div className="row">

            <div className="col-lg-7 grid-margin stretch-card">
              <div className="card">

                {/* header */}
                <NhtControl  />
                {/* danh sách sinh vien  */}
                <NhtStudentsList  renderNhtStudents={this.state.NhtStudents} onNhtHandleView={this.NhtHandleView}/>
              </div>
            </div>

            <div className="col-5 grid-margin">
              {/* form  */}
              <NhtForm  renderNhtStudent = {this.state.NhtStudent}/>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default NhtApp;