import { render } from "@testing-library/react";
import JestUnitTestSnapshotPage from "../../pages/34-03-jest-unit-test-snapshot";

it("컴포넌트가 기존이랑 바뀐 게 없는지 비교해보기 - 스냅샷 테스트 ", () => {
  const result = render(<JestUnitTestSnapshotPage />);
  expect(result.container).toMatchSnapshot();
  // 처음엔 스냅샷 찍은 게 없으니 무조건 통과, 두 번째 테스트부터 변동사항 있으면 에러 띄움
});
