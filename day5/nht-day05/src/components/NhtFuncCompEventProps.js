import React from 'react'

export default function NhtFuncCompEventProps({ NhtProps }) {
    // Hàm xử lý sự kiện
    const NhtHanldeButtonClick1 = ()=>{
        alert("Dữ liệu từ props:" + NhtProps.NhtRenderName);
        console.log("Xin chào:", NhtProps.NhtRenderName);
    }

    const NhtHanldeButtonClick2 = (param)=>{
        // Lấy dữ liệu từ props
        alert("Dữ liệu từ props (Button 2 click):" + NhtProps.NhtRenderName);
        // Dữ liệu từ tham số
        console.log('====================================');
        console.log("Hi:", param);
        console.log('====================================');
    }

    return (
        <div className="alert alert-info">
            <button className='btn btn-primary mx-1'
                onClick={NhtHanldeButtonClick1}>Button 1</button>

            <button className='btn btn-success mx-1'
                onClick={() => NhtHanldeButtonClick2("Button 2")}>Button 2</button>
        </div>
    );
}
