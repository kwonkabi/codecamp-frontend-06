// 데코레이터는 뭘까요?

function qqq(aaaaa: any) {
  console.log("=================");
  console.log(aaaaa);
  console.log("=================");
}

@qqq
class Product {}
