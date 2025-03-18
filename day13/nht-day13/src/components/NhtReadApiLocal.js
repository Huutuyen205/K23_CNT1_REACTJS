import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function NHTReadApiLocal() {
  const [nhtListUser, setNhtListUser] = useState([]);

  const apiUrl = "http://localhost:3001/users"; 

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((nhtResponse) => {
        setNhtListUser(nhtResponse.data);
      })
      .catch((error) => {
        console.error("Lỗi khi gọi API:", error);
      });
  }, []);

  return (
    <div>
      <h2>Đọc dữ liệu từ API Local</h2>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Age</th>
            <th>Class</th>
          </tr>
        </thead>
        <tbody>
          {nhtListUser.map((nhtItem, index) => (
            <tr key={index}>
              <td>{nhtItem.fullName}</td>
              <td>{nhtItem.age}</td>
              <td>{nhtItem.class}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
