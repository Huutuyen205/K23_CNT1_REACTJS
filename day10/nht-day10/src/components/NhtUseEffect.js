import React, { useState, useEffect } from 'react';

export default function NhtUseEffect() {
    // Khởi tạo state
    const [nhtCount, setNhtCount] = useState(0);
    const [nhtArray, setNhtArray] = useState([10, 12, 20, 22]);

    // useEffect không có dependency array -> chạy mỗi lần render
    useEffect(() => {
        console.log("Đây là useEffect một tham số");
    });

    // useEffect theo dõi sự thay đổi của nhtArray
    useEffect(() => {
        console.log("Đây là useEffect 2 tham số, tham số thứ 2 là mảng [nhtArray]");
    }, [nhtArray]);

    // useEffect theo dõi sự thay đổi của nhtCount
    useEffect(() => {
        console.log("Đây là useEffect 2 tham số, tham số thứ 2 là mảng [nhtCount]");
    }, [nhtCount]);

    // Hàm xử lý sự kiện khi thêm mới phần tử vào mảng
    const nhtHandleAddList = () => {
        setNhtArray([...nhtArray, parseInt(Math.random() * 100)]);
    };

    return (
        <div className='alert alert-info' style={{ backgroundColor: 'lightblue', padding: '20px' }}>
            <h2>Demo useEffect</h2>
            <h3>Count: {nhtCount}</h3>
            <button onClick={() => setNhtCount(nhtCount + 1)}>Click here</button>
            <h3>Array: {nhtArray.toString()}</h3>
            <button onClick={nhtHandleAddList}>Thêm</button>
        </div>
    );
}
