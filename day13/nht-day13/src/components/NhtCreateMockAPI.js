import React, { useState } from 'react';
import axios from 'axios';

export default function NhtCreateMockAPI() {
    // Khởi tạo state
    const [nhtFullName, setNhtFullName] = useState('');
    const [nhtAge, setNhtAge] = useState(0);
    const [nhtActive, setNhtActive] = useState(true);

    // API post
    const nhtCreateUserApi = "https://67d98d4e00348dd3e2ab99b5.mockapi.io/K23Cnt1_nguyenhuutuyen/nht_users";

    // Khi submit form
    const nhtHandleSubmit = (event) => {
        event.preventDefault();
        console.log("nhtActive:", nhtActive);
        let nhtNewUser = { nhtFullName, nhtAge, nhtActive };
        console.log(nhtNewUser);

        // Ghi dữ liệu vào API
        axios
            .post(nhtCreateUserApi, nhtNewUser)
            .then((nht_response) => {
                console.log("Thêm thành công!", nht_response.data);
            })
            .catch((error) => {
                console.error("Lỗi khi thêm người dùng:", error);
            });
    };

    return (
        <div className='alert alert-info'>
            <h2>Thêm mới users</h2>
            <hr />
            <form>
                <div className='mb-1'>
                    <label htmlFor="nhtFullName">Full Name</label>
                    <input 
                        type='text' name='nhtFullName' id="nhtFullName"
                        value={nhtFullName}
                        onChange={(ev) => setNhtFullName(ev.target.value)} 
                    />
                </div>
                <div className='mb-1'>
                    <label htmlFor="nhtAge">Age</label>
                    <input 
                        type='number' name='nhtAge' id="nhtAge"
                        value={nhtAge}
                        onChange={(ev) => setNhtAge(ev.target.value)} 
                    />
                </div>
                <div className='mb-1'>
                    <label>Active</label>
                    <input 
                        type='radio' name='nhtActive' id="nhtActive_hd" value={'true'} 
                        onChange={(ev) => setNhtActive(ev.target.value === 'true')} 
                    />
                    <label htmlFor="nhtActive_hd"> Hoạt động</label>

                    <input 
                        type='radio' name='nhtActive' id="nhtActive_kh" value={'false'} 
                        onChange={(ev) => setNhtActive(ev.target.value === 'false')} 
                    />
                    <label htmlFor="nhtActive_kh"> Khóa</label>
                </div>
                <button onClick={nhtHandleSubmit}>Create</button>
            </form>
        </div>
    );
}
