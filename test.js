// Your code here
const Employee = require("./employee");

const johnWick = new Employee("John Wick", "Dog Lover")

setTimeout(johnWick.sayName, 2000) // undefined says hello

let johnBoundName = johnWick.sayName.bind(johnWick)  // cleaner than making a variable jW.sayName then binding
setTimeout(johnBoundName, 2000)

setTimeout(johnWick.sayOccupation, 3000)

let johnBoundOcc = johnWick.sayOccupation.bind(johnWick)
setTimeout(johnBoundOcc, 3000)
