// export default function QuizButtonPage() {
//   const onClickButton = (event) => {
//     console.log(event.target.id);
//   };

//   return (
//     <button id="123" onClick={onClickButton}>
//       CLICK!
//     </button>
//   );
// }

export default function QuizHofButtonPage() {
  const onClickButton = (id) => (event) => {
    console.log(id);
  };

  return <button onClick={onClickButton(123)}>CLICK!</button>;
}
