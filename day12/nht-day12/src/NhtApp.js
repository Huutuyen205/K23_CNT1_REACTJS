import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NhtHome from "./components/NhtHome";
import NhtGioiThieu from "./components/NhtGioiThieu";
import NhtSanPham from "./components/NhtSanPham";
import NhtTinTuc from "./components/NhtTinTuc";
import NhtLienHe from "./components/NhtLienHe";
import "./Style.css";

function NhtApp() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Trang chủ</Link></li>
            <li><Link to="/gioi-thieu">Giới thiệu</Link></li>
            <li><Link to="/san-pham">Sản phẩm</Link></li>
            <li><Link to="/tin-tuc">Tin tức</Link></li>
            <li><Link to="/lien-he">Liên hệ</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<NhtHome />} />
          <Route path="/gioi-thieu" element={<NhtGioiThieu />} />
          <Route path="/san-pham" element={<NhtSanPham />} />
          <Route path="/tin-tuc" element={<NhtTinTuc />} />
          <Route path="/lien-he" element={<NhtLienHe />} />
        </Routes>
      </div>
    </Router>
  );
}

export default NhtApp;
