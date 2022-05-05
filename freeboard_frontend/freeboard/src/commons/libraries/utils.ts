export const getDate = (date: string) => {
  const newdate = new Date(date);
  const yyyy = String(newdate.getFullYear()).slice(2);
  const mm = String(newdate.getMonth() + 1).padStart(2, "0");
  const dd = String(newdate.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
};

export const getDate2 = (date) => {
  const newdate = new Date(date);
  const yyyy = newdate.getFullYear();
  const mm = newdate.getMonth() + 1;
  const dd = newdate.getDate();
  return `${yyyy}.${mm}.${dd}`;
};

export const getToday = () => {
  const now = Date();
  const newDate = new Date(now);
  const yyyy = newDate.getFullYear();
  const m1 = newDate.getMonth() + 1;
  const mm = m1.toString().padStart(2, "0");
  const dd = newDate.getDate().toString().padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
};

export const getPrice = (price) => {
  return String(price).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원";
};
