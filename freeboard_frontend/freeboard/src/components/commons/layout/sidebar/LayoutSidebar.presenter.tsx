import * as S from "./LayoutSidebar.styles";

// const getDate = (date) => {
//   const newdate = new Date(date);
//   const yyyy = String(newdate.getFullYear()).slice(2);
//   const mm = String(newdate.getMonth() + 1).padStart(2, "0");
//   const dd = String(newdate.getDate()).padStart(2, "0");
//   return `${yyyy}-${mm}-${dd}`;
// };

export default function LayoutSidebarUI() {
  // const todayViewedItemsSidebar = JSON.parse(
  //   localStorage.getItem(getDate(new Date())) || "[]"
  // );
  // console.log(todayViewedItemsSidebar);
  return (
    <S.Wrapper>
      <h3>최근 본 상품</h3>
      <S.Box></S.Box>
      <S.Box></S.Box>
      <S.Box></S.Box>
    </S.Wrapper>
  );
}
