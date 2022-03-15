const Obj = {
  name : "철슈",
  age : 12,
  school : {
    name : "다람쥐초등학교",
    location : "구로구",
  }
}

let a = "name";
let b = "age";

Obj.name;
Obj["name"]; // 변수로 활용 가능
Obj[a];

Obj.age;
Obj["age"];
Obj[b];

Obj.dog = "별이";
Obj

delete Obj.dog
Obj

delete Obj.age
Obj

Obj.school.teacher = "훈이";
Obj

delete Obj.school.teacher
Obj