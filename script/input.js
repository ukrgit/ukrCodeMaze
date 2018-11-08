function Student(firstName,lastName,age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

var s1 = new Student("John","Siena", 25);
var s2 = new Student("Uttam","Rathee",35);
                     
  var studentArr = [];
  studentArr.push(s1);
  studentArr.push(s2);

for(var key in studentArr){
    console.log(studentArr[key]);
}



