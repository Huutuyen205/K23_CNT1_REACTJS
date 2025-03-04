import React from "react";

// Dữ liệu ban đầu với các thuộc tính đổi tên
const initialState = [
  {
    nht_productId: "P001",
    nht_productName: "IPhone11",
    nht_quantity: 15,
    nht_price: 1000,
  },
  {
    nht_productId: "P002",
    nht_productName: "IPhone12",
    nht_quantity: 20,
    nht_price: 1250,
  },
  {
    nht_productId: "P003",
    nht_productName: "IPhone13",
    nht_quantity: 10,
    nht_price: 1500,
  },
  {
    nht_productId: "P004",
    nht_productName: "IPhone14",
    nht_quantity: 15,
    nht_price: 2000,
  },
];

// Component hiển thị danh sách sản phẩm
const NhtListComp = () => {
  return (
    <div >
      <h2 >Danh Sách Sản Phẩm</h2>
      <table >
        <thead >
          <tr>
            <th>Mã Sản Phẩm</th>
            <th>Tên Sản Phẩm</th>
            <th>Số Lượng</th>
            <th>Giá</th>
          </tr>
        </thead>
        <tbody>
          {initialState.map((item) => (
            <tr key={item.nht_productId}>
              <td>{item.nht_productId}</td>
              <td>{item.nht_productName}</td>
              <td>{item.nht_quantity}</td>
              <td>{item.nht_price} $</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NhtListComp;
