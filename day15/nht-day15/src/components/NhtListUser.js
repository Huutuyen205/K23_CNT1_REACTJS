import React, { useEffect, useState } from 'react'
import axios from "axios";

import { useNavigate } from 'react-router-dom'

export default function NhtListUser() {
    // state
    const [nhtListUser, setNhtListUser] = useState([])
    const nhtApi = "https://67e19d9958cc6bf785268471.mockapi.io/K23Cnt1_NguyenHuuTuyen_2310900105/nht_user"

    useEffect(()=>{
        axios.get(nhtApi)
        .then(nht_response => {
            // Xử lý dữ liệu trả về từ API
            console.log(nht_response.data); // Dữ liệu từ API
            setNhtListUser(nht_response.data)
        })
        .catch(error => {
            // Xử lý lỗi
            console.error('Có lỗi xảy ra:', error);
        });
    },[])
   
    

    const nhtHandleDelete = async (nhtId)=>{
        if(window.confirm('Bạn có muốn xóa không?')){
            await axios.delete(nhtApi+"/"+nhtId);

            let nhtListUserDelete = nhtListUser.filter(x=>x.id !=nhtId);
            setNhtListUser(nhtListUserDelete);
        }
    }
    const navigate = useNavigate();
    const nhtHandleUpdate = (nhtId) =>{
        navigate(`/nht-edit-user/${nhtId}`);
    }
  return (
    <div>
        <h2>Danh sách user</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>User Id</th>
                    <th>FullName</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Active</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {/* // hiển thị danh sách user */}
                {
                    nhtListUser.map((nhtUserItem,index)=>{
                        return (
                            <tr>
                                <td>{nhtUserItem.id}</td>
                                <td>{nhtUserItem.nht_name}</td>
                                <td>{nhtUserItem.nht_email}</td>
                                <td>{nhtUserItem.nht_phone}</td>
                                <td>
                                    {nhtUserItem.nht_active?
                                    <span className='badge text-bg-success'>Hoạt động</span>
                                    :<span className='badge text-bg-danger'>Tạm khóa</span>}
                                </td>
                                <td>
                                    <button onClick={()=>nhtHandleUpdate(nhtUserItem.id)}>Edit</button>
                                    <button onClick={(ev)=> nhtHandleDelete(nhtUserItem.id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}