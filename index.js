//factory functions syntax for creating objects
const className = (prop1, prop2) => {
  return {
    prop1,
    prop2,
    methodName() {
      console.log(this.prop1, this.prop2);
    }
  };
}

const instance = className('a', 'b');
instance.methodName();

//factory functions syntax for creating objects
// and using the prototype chain to add methods that are 
// shared across all instances of the object
// // this will be confusing if you do not know what you are doing. You'll see this and think it's a functions but it's not. It's a class.
// // to adjust this we would make the name of the function a capital letter to indicate that it's a class.
// function ClassName(prop1, prop2) {
//   this.prop1 = prop1;
//   this.prop2 = prop2;
// }

// ClassName.prototype.methodName = function() {
//   console.log(this.prop1, this.prop2);
// };

// const instance = new ClassName('a', 'b');
// instance.methodName();




























// // Generic Class Syntax
// class ClassName {
//   constructor(prop1, prop2) {
//     this.prop1 = prop1;
//     this.prop2 = prop2;
//   }

//   methodName() {
//     console.log(this.prop1, this.prop2)
//   }
// }

// const instance = new ClassName('a', 'b');
// instance.methodName();
