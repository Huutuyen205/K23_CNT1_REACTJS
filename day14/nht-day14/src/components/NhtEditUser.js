import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function NhtEditUser() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [user, setUser] = useState({
        nht_name: "",
        nht_email: "",
        nht_phone: "",
        NhtActive: false,
        NhtLocked: false,
    });

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const NhtApiOnline = "https://67da254c35c87309f52b1df7.mockapi.io/K23CNT1_NguyenHuuTuyen_2310900105/nht_users";

    // Lấy dữ liệu user theo ID
    useEffect(() => {
        if (!id) {
            setError("ID không hợp lệ!");
            setLoading(false);
            return;
        }

        axios.get(`${NhtApiOnline}/${id}`)
            .then(response => {
                setUser(response.data);
            })
            .catch(error => {
                setError("Lỗi khi tải dữ liệu user");
                console.error(error);
            })
            .finally(() => setLoading(false));
    }, [id]);

    // Xử lý thay đổi input
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setUser(prevState => {
            if (name === "NhtActive") {
                return { ...prevState, NhtActive: checked, NhtLocked: !checked }; 
            } else if (name === "NhtLocked") {
                return { ...prevState, NhtLocked: checked, NhtActive: !checked }; 
            }
            return { ...prevState, [name]: type === "checkbox" ? checked : value };
        });
    };

    // Gửi dữ liệu cập nhật
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        axios.put(`${NhtApiOnline}/${id}`, user)
            .then(() => {
                alert("Cập nhật thành công!");
                navigate("/ListUsers");
            })
            .catch(error => {
                setError("Lỗi khi cập nhật user");
                console.error(error);
            })
            .finally(() => setLoading(false));
    };

    if (loading) {
        return <div className="text-center">Đang tải dữ liệu...</div>;
    }

    if (error) {
        return <div className="text-danger text-center">{error}</div>;
    }

    return (
        <div className="container mt-4">
            <div className="card shadow-lg p-3 mb-5 bg-white rounded">
                <div className="card-header bg-warning text-white text-center">
                    <h3>Cập Nhật User</h3>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Full Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="nht_name"
                                value={user.nht_name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                name="nht_email"
                                value={user.nht_email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Phone</label>
                            <input
                                type="text"
                                className="form-control"
                                name="nht_phone"
                                value={user.nht_phone}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3 form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                name="NhtActive"
                                checked={user.NhtActive}
                                onChange={handleChange}
                            />
                            <label className="form-check-label">Hoạt động</label>
                        </div>
                        <div className="mb-3 form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                name="NhtLocked"
                                checked={user.NhtLocked}
                                onChange={handleChange}
                            />
                            <label className="form-check-label">Khóa</label>
                        </div>
                        <button type="submit" className="btn btn-success" disabled={loading}>
                            {loading ? "Đang lưu..." : "Lưu thay đổi"}
                        </button>
                        <button type="button" className="btn btn-secondary ms-2" onClick={() => navigate("/ListUsers")}>
                            Hủy
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
