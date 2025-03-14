import React, { useState } from 'react';

export default function NhtUseState() {
    const [nhtCount, setNhtCount] = useState(0);
    const [nhtArray, setNhtArray] = useState([10, 12, 22, 32]);
    const [nhtStudentList, setNhtStudentList] = useState([
        { nhtId: "001", nhtName: "Nguyễn Hữu Tuyên", nhtAge: "18" },
        { nhtId: "002", nhtName: "Nguyễn Văn A", nhtAge: "19" }
    ]);

    // State để lưu input từ người dùng
    const [newStudent, setNewStudent] = useState({
        nhtId: "",
        nhtName: "",
        nhtAge: ""
    });

    // Xử lý nhập liệu
    const handleChange = (event) => {
        const { name, value } = event.target;
        setNewStudent(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Hàm xử lý thêm sinh viên mới từ input
    const nhtHandleAddNewStudent = () => {
        if (!newStudent.nhtId || !newStudent.nhtName || !newStudent.nhtAge) {
            alert("Vui lòng nhập đầy đủ thông tin!");
            return;
        }

        // Cập nhật danh sách sinh viên
        setNhtStudentList(prevList => [...prevList, newStudent]);

        // Reset input sau khi thêm
        setNewStudent({ nhtId: "", nhtName: "", nhtAge: "" });
    };

    return (
        <div className='alert alert-danger'>
            <h2>useState Demo</h2>

            <div>
                <h3>Count: {nhtCount} </h3>
                <button onClick={() => setNhtCount(nhtCount + 1)}>Tăng</button>
                <button onClick={() => setNhtCount(nhtCount - 1)}>Giảm</button>
            </div>

            <div>
                <h3>Danh sách sinh viên</h3>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Tên</th>
                            <th>Tuổi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {nhtStudentList.map((nhtStudent, index) => (
                            <tr key={index}>
                                <td>{nhtStudent.nhtId}</td>
                                <td>{nhtStudent.nhtName}</td>
                                <td>{nhtStudent.nhtAge}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Form nhập thông tin sinh viên mới */}
            <div>
                <h3>Thêm Sinh Viên</h3>
                <input 
                    type="text" 
                    name="nhtId" 
                    placeholder="ID" 
                    value={newStudent.nhtId} 
                    onChange={handleChange} 
                />
                <input 
                    type="text" 
                    name="nhtName" 
                    placeholder="Tên" 
                    value={newStudent.nhtName} 
                    onChange={handleChange} 
                />
                <input 
                    type="number" 
                    name="nhtAge" 
                    placeholder="Tuổi" 
                    value={newStudent.nhtAge} 
                    onChange={handleChange} 
                />
                <button onClick={nhtHandleAddNewStudent}>Thêm</button>
            </div>
        </div>
    );
}
