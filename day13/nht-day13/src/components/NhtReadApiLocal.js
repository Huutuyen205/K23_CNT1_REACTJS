import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function NhtReadApiLocal() {
    // Khởi tạo state
    const [nhtListUser, setNhtListUser] = useState([]);
    
    // Đọc dữ liệu từ API local và set cho nhtListUser
    const apiUrl = "http://localhost:3001/users";

    // Lấy danh sách từ apiUrl
    useEffect(() => {
        axios
            .get(apiUrl)
            .then((nhtResponse) => {
                setNhtListUser(nhtResponse.data);
            })
            .catch((error) => {
                console.log("Lỗi");
            });
    }, []);

    return (
        <div>
            <h2>Đọc dữ liệu từ API Local</h2>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>FullName</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        nhtListUser.map((nhtItem, index) => {
                            return (
                                <tr key={index}>
                                    <td>{nhtItem.fullName}</td>
                                    <td>{nhtItem.age}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}
