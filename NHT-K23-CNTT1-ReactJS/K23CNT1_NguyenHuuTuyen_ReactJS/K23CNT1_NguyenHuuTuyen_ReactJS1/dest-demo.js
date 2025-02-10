//array
var arr =[10,20,25,15];
// destructuring
var [a,b]=arr;//=> a=10,b=20
console.log("a=",a);
console.log("b=",b);
[a,b,c,d]= arr;
console.log("a=",a);
console.log("b=",b);
console.log("c=",c);
console.log("d=",d);
//object
const student ={
    name :"tuyen",
    Age:20,
    phone :"0941033632",
    email:"huutuyen123tc@gmail.com"
}
var{name,phone}=student;
console.log("name=",name);
console.log("phone=",phone);
//chat gpt
