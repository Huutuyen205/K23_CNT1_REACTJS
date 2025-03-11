import React, { useState } from 'react';

export default function NhtUseState() {
    const [nhtCount, setNhtCount] = useState(0);
    const [nhtArray, setNhtArray] = useState([10, 12, 22, 32]);
    const [nhtStudentList, setNhtStudentList] = useState([
        { nhtId: "001", nhtName: "Nguyễn Hữu Tuyên", nhtAge: "18" },
        { nhtId: "002", nhtName: "Nguyễn Hữu Tuyên", nhtAge: "18" }
    ]);

    // Hàm xử lý thêm phần tử vào nhtArray
    const nhtHandleAddlist = () => {
        setNhtArray([...nhtArray, parseInt(Math.random() * 200)]);
    };
    // ham xu ly sk them moi
    const nhtHandleAddNewStudent = ()=>{
        let nhtStudent ={
            nhtId:"004",
            nhtName:"nguyen qunag a",
            nhtAge:"19"
        };
        //them vao state
        setNhtStudentList([
            ...nhtStudentList,
            nhtStudent
        ])


        console.log("list:",nhtStudentList);
    }

    return (
        <div className='alert alert-danger'>
            <h2>useState Demo</h2>
            <div>
                <h3>Count: {nhtCount} </h3>
                <button onClick={() => setNhtCount(nhtCount + 1)}>Tăng</button>
                <button onClick={() => setNhtCount(nhtCount - 1)}>Giảm</button>
            </div>
            <div>
                <h3>Array: {nhtArray.toString()} </h3>
                <button onClick={nhtHandleAddlist}>Thêm phần tử</button>
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
                    <tfoot>
                        <button onClick={nhtHandleAddNewStudent}>
them
                        </button>
                    </tfoot>
                </table>
            </div>
        </div>
    );
}
