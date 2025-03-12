import React, { useState } from "react";
import NhtAccountAdd from "./components/NhtAccountAdd";
import NhtAccountList from "./components/NhtAccountList";
import "./NhtApp.css";


const NhtApp = () => {
  const [nhtAccounts, setNhtAccounts] = useState([
    { nhtId: "2310900105", nhtName: "Nguyen Huu Tuyen", nhtEmail: "huutuyen123tc@gmail.com", nhtAmount: 5000000 },
    { nhtId: "002", nhtName: "Nguyen Huu B", nhtEmail: "nguyenhuub@example.com", nhtAmount: 2000 },
    { nhtId: "003", nhtName: "Nguyen Huu C", nhtEmail: "nguyenhuuc@example.com", nhtAmount: 3000 },
  ]);

  const addNhtAccount = (newAccount) => {
    setNhtAccounts([newAccount, ...nhtAccounts]); // Thêm tài khoản mới lên đầu danh sách
  };

  return (
    <div className="alert alert-danger">
      <h1>Quản lý tài khoản</h1>
      <NhtAccountAdd addAccount={addNhtAccount} />
      <NhtAccountList nhtAccounts={nhtAccounts} />
     
    </div>
  );
};

export default NhtApp;
