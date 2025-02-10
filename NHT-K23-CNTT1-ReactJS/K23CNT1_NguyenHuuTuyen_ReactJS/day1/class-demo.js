class person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
  }
  
  // Tạo một instance (đối tượng) từ class
  const person1 = new person("tuyen", 18);
  
  person1.greet(); // Output: Hello, my name is Alice and I'm 25 years old.
  