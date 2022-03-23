// 27. 가장 큰 수 찾기
function bigNum(str){
  let biggest = Number(str[0]);
  for (let i=1; i<str.length; i++){
    if (Number(str[i]) > biggest){
      biggest = Number(str[i])
    }
  }
  return biggest
}


// https://newbizstart.notion.site/Algorithm-5428fc44fc6e49d5bc9c03267d295843#4dee122226c04485b8f7cebbc2d13849
function grade(score){
  if (score < 0 || score > 100){
    return '잘못된 점수입니다'
  } else if (score >= 90){
    return 'A'
  } else if (score >= 80){
    return 'B'
  } else if (score >= 70){
    return 'C'
  } else if (score >= 60){
    return 'D'
  } else {
    return 'F'
  }
}

// https://newbizstart.notion.site/Algorithm-5428fc44fc6e49d5bc9c03267d295843#add0fda652fa430aaf72deb79c5245fa

const myShopping = [
  { category: "과일", price: 12000 },
  { category: "의류", price:10000 },
  { category: "의류", price: 20000 },
  { category: "장난감", price: 9000 },
  { category: "과일", price: 5000 },
  { category: "의류", price: 10000 },
  { category: "과일", price: 8000 },
  { category: "의류", price: 7000 },
  { category: "장난감", price: 5000 },
  { category: "의류", price: 10000 },
]

let count = 0;
let sum = 0;
let grade = '';

for (let i=0; i<myShopping.length; i++){
  if (myShopping[i].category === '의류'){
    count += 1
    sum += myShopping[i].price
    if (count >= 5){
      grade = 'Gold'
    } else if (count >= 3){
      grade = 'Silver'
    } else {
      grade = 'Bronze'
    }
  }
}
console.log(`의류를 구매한 횟수는 총 ${count}회 금액은 ${sum}이며 등급은 ${grade}입니다.`)