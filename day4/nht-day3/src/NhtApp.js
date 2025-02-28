import NhtClasscomp from "./components/NhtClasscomp";
import NhtFuncComp from "./components/NhtFuncComp";
import NhtJsxExpression from "./components/NhtJsxExpression";


function NhtApp() {
  return (
    <div className="container border mt-3 bg-white">
      <h1>react js leson3-nguyễn hữu tuyên</h1>
      <NhtJsxExpression />
      <hr/>
      {/*sử dụng function comp*/}
      <NhtFuncComp />
      {/*sử dung clss*/}
      <NhtClasscomp/>
    </div>
  );
}

export default NhtApp;
