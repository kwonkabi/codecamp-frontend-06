import Presenter from "./presenter";

// container 부분
export default function Container() {
  return (
    <>
      {/* <Presenter child="철수" /> */}
      {Presenter({ child: "철수" })}
    </>
  );
}
