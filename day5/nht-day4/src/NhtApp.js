import NhtClassComp from './Component/NhtClassComp';
import NhtfuncComp from './Component/NhtfuncComp';
import NhtfunccompObj from './Component/NhtfunccompObj';

function NhtApp() {
  //object
  const users ={
    fullname: 'tuyen',
    age:20,
    phone:"6666"
  }
  return (
    <div className="container border mt-3">
      <h1>Demo component</h1>
      <hr/>
        <div className="alert alert-danger">
           <NhtfuncComp name="tuyen" address="huu nguyen" company="Devmaster" />
           <hr/>
           <NhtfuncComp name="gg" address="Vinh Quynh" company="dd" />

        </div>
        <div className="alert alert-info">
          <NhtfunccompObj renderInfo={users} />
        </div>
        <NhtClassComp />
        {/*Chuyển sữ liệu từ NvkApp xuống NvkClassComp*/}
        <NhtClassComp renderName="K23CNT1" renderUser={users} />
    </div>
  );
}

export default NhtApp;