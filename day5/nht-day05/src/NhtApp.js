import React, { Component } from 'react';
import NhtFuncCompEvent1 from './components/NhtFuncCompEvent1';
import NhtClassCompEvent1 from './components/NhtClassCompEvent1';
import NhtFuncCompEventProps from './components/NhtFuncCompEventProps';
import NhtClassCompEventProps from './components/NhtClassCompEventProps';
import NhtClassCompEventState from './components/NhtClassCompEventState';
import NhtClassCompEventPostData from './components/NhtClassCompEventPostData';

class NhtApp extends Component {
    constructor(props){
        super(props);
        this.state = {
            NhtNoiDung:"Chưa có gì",
        }
    }
    // Hàm xử lý sự kiện khi component con chuyển dữ liệu lên
    NhtHandleDataToApp = (content)=>{
        alert(content);
        this.setState({
            NhtNoiDung:content,
        })
    }
    render() {
        return (
            <div className='container border mt-3'>
                <h1 className='text-center alert alert-info my-2'>K23CNT1 -nguyen huu tuyen </h1>
                <hr/>
                <div>
                    <h2>Function Component  - Event</h2>
                    <NhtFuncCompEvent1 />
                </div>
                <hr/>
                <div>
                    <h2>Class Component - Event</h2>
                    <NhtClassCompEvent1 />
                </div>
                <hr/>
                <div>
                    <h2>Function Component - Event; props</h2>
                    <NhtFuncCompEventProps NhtRenderName="nguyen huu tuyen" />
                </div>
                <hr/>
                <div>
                    <h2>Class Component - Event; props</h2>
                    <NhtClassCompEventProps NhtRenderTitle = "Welcome to Chung Chunng"/>
                </div>

                <div>
                    <h2>Class Component - Event; state</h2>
                    <NhtClassCompEventState />
                </div>
                <div>
                    <h1>{this.state.NhtNoiDung}</h1>
                    <h2>Class Component - Event; Post Data to App </h2>
                    <NhtClassCompEventPostData onNhtDataToApp={this.NhtHandleDataToApp} />
                </div>
            </div>
        );
    }
}

export default NhtApp;