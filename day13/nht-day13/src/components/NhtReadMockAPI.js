import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function NhtReadMockAPI() {
    // khoi tao state 
    const [nhtListUser,setNhtListUser]=useState([]   )
        // api 
        const nhtApiOnline ="https://67d98d4e00348dd3e2ab99b5.mockapi.io/K23Cnt1_nguyenhuutuyen/nht_users"
    // doc du lieu tu api= axios
    useEffect(() => {
        axios.get(nhtApiOnline)
          .then((nhtResponse) => {
            setNhtListUser(nhtResponse.data);
          })
          .catch((error) => {
            console.error("Lỗi khi gọi API:", error);
          });
      }, []); // ✅ Thêm mảng dependencies rỗng
      
        // view data
        const nhtElementUser = nhtListUser.map((nht_item,index)=>{
            return(
                <tr>
                    <td>{nht_item.nhtId}</td>
                    <td>{nht_item.nhtFullName}</td>
                    <td>{nht_item.nhtAge}</td>
                    <td>{nht_item.nhtActive}</td>
                    <td>
                        <button>sửa</button>
                        <button>xóa</button>
                    </td>



                </tr>
            )
        })
  return (
    <div className='alert alert-danger '>
        <h2>danh sách</h2>
        <h2>Đọc dữ liệu từ API Local</h2>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Age</th>
            <th>Active</th>
            <th>Id</th>
          </tr>
        </thead>
        <tbody>
          {
            nhtElementUser
          }
        </tbody>
      </table>
        
    </div>
  )
}
