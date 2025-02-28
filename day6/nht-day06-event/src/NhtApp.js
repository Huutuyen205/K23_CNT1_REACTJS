import React, { Component } from 'react';
import NhtEventForm1 from './Components/NhtEventForm1';
import NhtEventForm2 from './Components/NhtEventForm2';
import NhtEventForm3 from './Components/NhtEventForm3';
import NhtEventForm4 from './Components/NhtEventForm4';
import NhtEventForm5 from './Components/NhtEventForm5';

class NhtApp extends Component {



  // Hàm xử lý nhận dữ liệu từ form student
  NhtHandleSubmitForm = (param)=>{
    console.log("Student:",param);
  }

  render() {
    return (
      <div className='container border my-3 bg-white'>
          <h1 className='text-center'>Event Form - Demo</h1>
          <hr/>
          <NhtEventForm1 />
          <NhtEventForm2 />
          <NhtEventForm3 />
          <NhtEventForm4 />
          <NhtEventForm5 />
      </div>
    );
  }
}

export default NhtApp;