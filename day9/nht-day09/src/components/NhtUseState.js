import React, { useState } from 'react';

export default function NhtUseState() {
    const [count, setCount] = useState(0);

    const NhtHandleTang = () => {
        setCount(prev => prev + 1); // Cập nhật state đúng cách
    };

    const danh_sach = [100, 120, 150, 200];
    const [list, setList] = useState(danh_sach);

    const NhtHandleAddNewRandom = () => {
        setList(prev => [...prev, Math.floor(Math.random() * 1000)]);
    };

    return (
        <div className='alert alert-info'>
            <h2>Sử dụng useState</h2>
            <div>
                <p>Count: {count}</p>
                <button onClick={NhtHandleTang}>Tăng</button>
                <button onClick={() => setCount(prev => prev - 1)}>Giảm</button>
                <button onClick={() => setCount(0)}>Đặt lại</button>    
            </div>
            <div>
                <h3>List: {list.toString()}</h3> 
                <button onClick={NhtHandleAddNewRandom}>Thêm số ngẫu nhiên</button>
            </div>
        </div>
    );
}
