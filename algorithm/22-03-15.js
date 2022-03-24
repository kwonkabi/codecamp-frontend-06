// 3. 배열의 선언과 할당
const fruits = []
fruits.push("사과", "바나나", "파인애플")

// 4. 배열의 기능
// 1)
const newFruits = [];
newFruits.push(fruits[fruits.length-1])
// 2)
newFruits = fruits.slice(-1)

// 8. 객체의 선언과 할당
const student = {}
// 1)
student.name = "철수"
// 2)
student = {"name : 철수"}

// 9. 객체의 키 & 값 추가
student.school = school