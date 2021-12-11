export type Numbers = number[];

const initialData = () => {
  const numbers: Numbers = Array(10)
    .fill(0)
    .map((elem, index) => index);
  const row = {
    title: "Numbers",
    id: "row-1",
    numbers,
  };

  return {
    numbers,
    row,
  };
};
export default initialData();
