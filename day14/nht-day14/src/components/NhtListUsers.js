import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import NhtHome from './NhtHome';
import NhtListUsers from './NhtListUsers';
import NhtCreateUser from './NhtCreateUser';
import NhtEditUser from './NhtEditUser'; // Import trang sửa user


export default function NhtNavBar() {
  return (
    <div className='container my-3'>
      <nav className="nht-navbar">
        <ul className="nht-menu">
          <li><Link to="/Home">🏠 Trang chủ</Link></li>
          <li><Link to="/ListUsers">📜 Danh sách User</Link></li>
          <li><Link to="/CreateUser">➕ Thêm mới User</Link></li>
        </ul>
      </nav>
      <hr />
      <div>
        <Routes>
          <Route path="/Home" element={<NhtHome />} />
          <Route path="/ListUsers" element={<NhtListUsers />} />
          <Route path="/CreateUser" element={<NhtCreateUser />} />
          <Route path="/EditUser/:id" element={<NhtEditUser />} />  {/* Route mới */}
        </Routes>
      </div>
    </div>
  );
}
