import React, { Component } from "react";
import NhtControl from "./components/Nhtcontrol";
import NhtStudentsList from "./components/NhtStudentsList";
import NhtForm from "./components/NhtForm";

class NhtApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      NhtStudents:[
        {NhtId:"SV001",NhtStudentName:"Nguyen thi ngoc mai",NhtAge:19,NhtGender:"nu",NhtBirthday:"03/10/2005",NhtBirthPlace:"HD", NhtAddress:"Tòa VCN, 25 Vũ Ngọc Phan"},
        {NhtId:"SV002",NhtStudentName:"Ha Thi Luyen ",NhtAge:18,NhtGender:"Nữ",NhtBirthday:"16/04/2005",NhtBirthPlace:"YB", NhtAddress:"HD"},
        {NhtId:"SV003",NhtStudentName:"Pham Viet Anh",NhtAge:18,NhtGender:"Nam",NhtBirthday:"01/08/2005",NhtBirthPlace:"YB", NhtAddress:"HD"},
        {NhtId:"SV004",NhtStudentName:"Nguyen Huu Tuyen",NhtAge:18,NhtGender:"Nam",NhtBirthday:"01/09/2005",NhtBirthPlace:"VP", NhtAddress:"88"},
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
          Nguyen huu tuyen123
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