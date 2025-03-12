import React from "react";

const NhtAccountList = ({ nhtAccounts }) => {
  return (
    <div>
      <h2>Danh sách tài khoản</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Stt</th>
            <th>ID</th>
            <th>Tên</th>
            <th>Email</th>
            <th>Số dư</th>
          </tr>
        </thead>
        <tbody>
          {nhtAccounts.map((nhtItem, index) => (
            <tr key={nhtItem.nhtId}>
              <td>{index + 1}</td>
              <td>{nhtItem.nhtId}</td>
              <td>{nhtItem.nhtName}</td>
              <td>{nhtItem.nhtEmail}</td>
              <td>{nhtItem.nhtAmount} VND</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NhtAccountList;
