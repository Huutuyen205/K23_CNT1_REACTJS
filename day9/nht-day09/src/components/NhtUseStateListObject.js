import React, { useState } from 'react';

export default function NhtUseStateListObject() {
    // Danh sách sinh viên
    const listStudent = [
        { nhtId: "SV001", nhtStudentName: "Nguyen Thi Ngoc Mai", nhtAge: 19, nhtclass: "cnt1" },
        { nhtId: "SV002", nhtStudentName: "Ha Thi Luyen", nhtAge: 18, nhtclass: "cnt1" },
        { nhtId: "SV003", nhtStudentName: "Pham Viet Anh", nhtAge: 18, nhtclass: "cnt1" },
        { nhtId: "SV004", nhtStudentName: "Nguyen Huu Tuyen", nhtAge: 18, nhtclass: "cnt1" },
    ];

    // Tạo state
    const [nhtStudents, setNhtStudents] = useState(listStudent);

    // Render danh sách sinh viên
    let nhtElement = nhtStudents.map((nhtItem, index) => {
        return (
            <tr key={nhtItem.nhtId}>
                <td>{index + 1}</td>
                <td>{nhtItem.nhtId}</td>
                <td>{nhtItem.nhtStudentName}</td>
                <td>{nhtItem.nhtAge}</td>
                <td>{nhtItem.nhtclass}</td>
            </tr>
        );
    });

    return (
        <div>
            <h2>Danh sách sinh viên</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>ID</th>
                        <th>Tên</th>
                        <th>Tuổi</th>
                        <th>Lớp</th>
                    </tr>
                </thead>
                <tbody>
                    {nhtElement}
                </tbody>
            </table>
        </div>
    );
}
