import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function NhtEditUser() {
     const nhtUser = {
            id:0,
            'nht_name':'',
            'nht_email':'',
            'nht_phone':'',
            'nht_active':true
        }
    
        const [nht_user, setNht_User] = useState(nhtUser);
        const nhtApi = "https://67e19d9958cc6bf785268471.mockapi.io/K23Cnt1_NguyenHuuTuyen_2310900105/nht_user"

        const {id} = useParams();

        useEffect(()=>{
            axios.get(nhtApi+"/"+`${id}`)
            .then(nht_response => {
                // Xử lý dữ liệu trả về từ API
                console.log(nht_response.data); // Dữ liệu từ API
                setNht_User(nht_response.data)
            })
            .catch(error => {
                // Xử lý lỗi
                console.error('Có lỗi xảy ra:', error);
            });
        },[])
        const navigate = useNavigate();
        const nhtHandlSubmit = (ev)=>{
            ev.preventDefault();
            console.log(nht_user);
            axios
            .put(nhtApi+`/${id}`, nht_user)
            .then((nht_response) => {
                alert('Cập nhật thành công!');
                navigate('/nht-list-user'); // Sau khi lưu, chuyển về trang danh sách
            })
        }
  return (
    <div>
      <h2>Sửa thông tin user</h2>
      <form>
        <div className="mb-3 row">
          <label htmlFor="nht_name" className="col-sm-2 col-form-label">FullName</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="nht_name"
                name="nht_name"
                value={nht_user.nht_name} 
                onChange={(ev)=>setNht_User({...nht_user,nht_name:ev.target.value})} 
                />
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="nht_email" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="nht_email" 
             name="nht_email"
             value={nht_user.nht_email} 
             onChange={(ev)=>setNht_User({...nht_user,nht_email:ev.target.value})} 

             />
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="nht_phone" className="col-sm-2 col-form-label">Phone</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="nht_phone" 
             name="nht_phone"
             value={nht_user.nht_phone} 
             onChange={(ev)=>setNht_User({...nht_user,nht_phone:ev.target.value})} 
             />
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="nht_active" className="col-sm-2 col-form-label">Active</label>
          <div className="col-sm-10">
            <input type="radio" id="nht_active_true"  className="mx-3"   
                onChange={(ev)=>setNht_User({...nht_user,nht_active:ev.target.value})}
                value={true}
                name="nht_active"  /> 
            <label htmlFor="nht_active_true">Hoạt động</label>
            <input type="radio" id="nht_active_false"  className="mx-3"
                onChange={(ev)=>setNht_User({...nht_user,nht_active:ev.target.value})}
                value={false} 
                name="nht_active" /> 
            <label htmlFor="nht_active_false">Tạm khóa</label>
          </div>
        </div>

        <div className="mb-3 row">
            <label htmlFor="" className="col-sm-2 col-form-label"></label>
            <div className="col-sm-10">
                <button className="btn btn-primary mx-2 px-3" name="btnnhtCreate" 
                    onClick={nhtHandlSubmit}
                    >Update</button>
                <button className="btn btn-secondary mx-2 px-3" name="btnNhtBack">Back</button>
            </div>
        </div>
      </form>
    </div>
  )
}