// 카운터 컴포넌트 실습!!!

import { Component } from "react";

interface IState {
  count: number;
}

// 객체지향 프로그래밍에서 사용하는 단순한 클래스를 '컴포넌트 기능으로 확장'하여 사용하기: state나 render 같은 것들은 class가 아니라 리액트에 있는 기능이다!
export default class CounterPage extends Component {
  state = {
    // state라는 이름은 못 바꿈!
    count: 99,
  };

  // 화살표 함수로 바꿔서 동적 -> 정적으로 바꿔주는 방법
  // onClickCounter = () => {
  //   console.log(this);
  //   // console.log("카운터 클릭!!!");
  //   console.log(this.state.count);
  //   this.setState((prev: IState) => ({ // state 만들면 컴포넌트 안에 setState 내장되어 있음
  //     count: prev.count + 1,
  //   }));
  // }

  // 화살표 함수로 바꾸기 싫을 때:
  onClickCounter() {
    console.log(this);
    // console.log("카운터 클릭!!!");
    console.log(this.state.count);
    this.setState((prev: IState) => ({
      // state 만들면 컴포넌트 안에 setState 내장되어 있음
      count: prev.count + 1,
    }));
  }

  render() {
    // render라는 함수가 하나 꼭 필요함! state처럼 이름 못 바꿈!
    return (
      <div>
        <div>현재카운트: {this.state.count}</div>{" "}
        {/* 객체 안에 있기 때문에 state.count가 되고, 자동으로 this가 붙는다. */}
        <button onClick={this.onClickCounter}>카운트 올리기!!!</button>
        {/* 화살표 함수로 바꾸기 싫을 때:
        <button onClick={this.onClickCounter.bind(this)}>카운트 올리기!!!</button>  */}
      </div>
    );
  }
}

// this가 들어가면 내가 속한 곳 전체를 의미함. 그러나 실행 주체에 따라 매번 달라짐. '동적 스코프'라 부름. 그러나 화살표 함수로 바꾸면 this가 누구를 가리키고 있는지 정적으로 변함. 이때의 this를 lexical this라 부름.
// onClickCounter(){}를 onClickCounter = () => {}로 바꿔주기: 기본적으로 최신 자바스크립트는 use strict 모드로 작동한다. use strict 모드에서는 this가 실행되는 환경이 변경될 때, window를 나타내지 않고 undefined를 가리키게 된다. 우리가 마우스로 클릭했을 때, 키보드를 쳤을 때 등등 this를 실행하는 녀석은 window(기본)이다. this가 실행되는 환경이 다르기 때문에 클래스에서는 화살표함수를 사용하거나 bind 명령으로 this를 통일시켜 주어야 한다.
