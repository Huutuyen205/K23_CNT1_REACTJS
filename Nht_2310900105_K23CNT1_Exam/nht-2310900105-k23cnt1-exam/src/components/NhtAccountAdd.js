import React, { useState } from "react";

const NhtAccountAdd = ({ addAccount }) => {
  const [nhtName, setNhtName] = useState("");
  const [nhtEmail, setNhtEmail] = useState("");
  const [nhtAmount, setNhtAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addAccount({
      nhtId: Date.now().toString(),
      nhtName,
      nhtEmail,
      nhtAmount: Number(nhtAmount),
    });
    setNhtName("");
    setNhtEmail("");
    setNhtAmount("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Tên" value={nhtName} onChange={(e) => setNhtName(e.target.value)} required />
      <input type="email" placeholder="Email" value={nhtEmail} onChange={(e) => setNhtEmail(e.target.value)} required />
      <input type="number" placeholder="Số dư" value={nhtAmount} onChange={(e) => setNhtAmount(e.target.value)} required />
      <button type="submit">Thêm tài khoản</button>
    </form>
  );
};

export default NhtAccountAdd;
