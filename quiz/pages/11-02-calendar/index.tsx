// import { Calendar } from 'antd';
// import styled from '@emotion/styled';

// const CalendarWrapper = styled.div`
// width: 300px;
// border: 1px solid #f0f0f0;
// border-radius: 2px;
// `

// export default function onPanelChange(value, mode) {
//   return(
//     <CalendarWrapper>
//       <Calendar fullscreen={false} onPanelChange={onPanelChange} />
//     </CalendarWrapper>
//   )
// }

import { DatePicker } from 'antd';
import { useState } from 'react';

export default function Calendar() {

  const [dateString, setDateString] = useState()
  
  const onChange = (date: any, dateString: any) => {
    console.log(date, dateString);
    setDateString(dateString)
  }

  return (
    <>
      <DatePicker onChange={onChange} />
      <div>{dateString}</div>
      <div>{dateString && dateString.slice(5, 7)}</div>
    </>
  )
}