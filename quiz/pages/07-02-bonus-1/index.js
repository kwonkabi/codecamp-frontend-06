const classmates = [
	{ name: '철수', age: 10, school: '토끼초등학교' },
	{ name: '영희', age: 13, school: '다람쥐초등학교' },
	{ name: '훈이', age: 11, school: '토끼초등학교' }
]

// 필터링, 매핑

let classmates1 = classmates.filter((el) => (el['school'] === '토끼초등학교'))

classmates1 = classmates1.map((el) => ({name: el.name, age: el.age, school: el.school, candy: 10}))


// [
//   {
//     name: '철수',
//     age: 10,
//     school: '토끼초등학교',
//     candy: 10
//   },
//   {
//     name: '훈이',
//     age: 11,
//     school: '토끼초등학교',
//     candy: 10
//   }
// ]


const classmates2 = [
	{ name: '철수', age: 10, school: '토끼초등학교' },
	{ name: '영희', age: 13, school: '다람쥐초등학교' },
	{ name: '훈이', age: 11, school: '토끼초등학교' }
]

// 필터링, 매핑

let classmates3 = classmates.filter((el) => (el['school'] === '다람쥐초등학교'))

classmates3 = classmates2.map((el) => (el['name'] + '어린이'))

// [ '영희어린이' ]
