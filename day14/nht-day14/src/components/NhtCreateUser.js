import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function NhtCreateUserApi() {
    const [nht_name, setNhtFullName] = useState('');
    const [nht_email, setNhtEmail] = useState('');
    const [nht_phone, setNhtPhone] = useState('');
    const [NhtActive, setNhtActive] = useState(true);
    
    const navigate = useNavigate(); 
    const NhtCreateUserApi = "https://67da254c35c87309f52b1df7.mockapi.io/K23CNT1_NguyenHuuTuyen_2310900105/nht_users";

    const NhtHandleSubmit = (event) => {
        event.preventDefault();
        let NhtNewUser = { nht_name, nht_email, nht_phone, NhtActive };
        
        axios
            .post(NhtCreateUserApi, NhtNewUser)
            .then((Nht_response) => {
                console.log("User created:", Nht_response.data);
                navigate('/ListUsers'); 
            })
            .catch((error) => {
                console.error("Error creating user:", error);
            });
    };

    return (
        <div className='container mt-4'>
            <div className='card shadow-lg p-4 bg-light rounded-4'>
                {/* Header với kiểu giống ảnh */}  
                <div className="card-header bg-success bg-opacity-25 text-dark fw-bold rounded-2 text-center">
                    <h3>Thêm mới thông tin User</h3>
                </div>

                <div className="card-body">
                    <form>
                        <div className='mb-3'>
                            <label htmlFor="nht_name" className="form-label fw-bold">Full Name</label>
                            <input type='text' id="nht_name" className="form-control"
                                value={nht_name} onChange={(ev) => setNhtFullName(ev.target.value)} />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="nht_email" className="form-label fw-bold">Email</label>
                            <input type='email' id="nht_email" className="form-control"
                                value={nht_email} onChange={(ev) => setNhtEmail(ev.target.value)} />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="nht_phone" className="form-label fw-bold">Phone</label>
                            <input type='tel' id="nht_phone" className="form-control"
                                value={nht_phone} onChange={(ev) => setNhtPhone(ev.target.value)} />
                        </div>
                        <div className='mb-3'>
                            <label className="form-label fw-bold">Active</label><br />
                            <div className="form-check form-check-inline">
                                <input type='radio' name='NhtActive' id="NhtActive_hd" value={'true'}
                                    className="form-check-input"
                                    onChange={(ev) => setNhtActive(ev.target.value === 'true')} />
                                <label htmlFor="NhtActive_hd" className="form-check-label text-primary"> Hoạt động</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input type='radio' name='NhtActive' id="NhtActive_kh" value={'false'}
                                    className="form-check-input"
                                    onChange={(ev) => setNhtActive(ev.target.value === 'false')} />
                                <label htmlFor="NhtActive_kh" className="form-check-label text-danger"> Khóa</label>
                            </div>
                        </div>

                        <div className="d-flex justify-content-between">
                            <button className="btn btn-success px-4" onClick={NhtHandleSubmit}>Create</button>
                            <button className="btn btn-danger px-4" onClick={() => navigate('/ListUsers')}>Back</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
