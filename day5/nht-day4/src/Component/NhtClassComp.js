import React, { Component } from 'react'

export default class NhtClassComp extends Component {
    constructor(props){
        super(props);
        //khởi tạo state
        this.state = {
            fullname:"tuyen",
            age:20,
            phone:"0999"
        }
    }
    //Hàm xử lí sự kiện
    changeInfo = (ev)=>{
        //Cập nhập state
        this.setState({
            fullname:"hhh"
        })
    }
  render() {
    
    return (
      <div className='alert alert-success'>
            <h2>Trình bày dữ liệu từ state</h2>
            <p>info states (fullname): {this.state.fullname}</p>
            <p>info states (age): {this.state.age}</p>
            <p>info states (phone): {this.state.phone}</p>

            <hr/>
            <button className='btn btn-primary' onClick={this.changeInfo}>Change info</button>
            <hr/>
            <h3>Lấy dữ liệu từ props</h3>
            <p>Name: {this.props.renderName}</p>
            
            <p>FullName: {this.props.renderUser ?this.props.renderUser.fullname:''}</p>
            <p>age: {this.props.renderUser ?this.props.renderUser.age:''}</p>
            <p>phone: {this.props.renderUser ?this.props.renderUser.phone:''}</p>
      </div>
    )
  }
}