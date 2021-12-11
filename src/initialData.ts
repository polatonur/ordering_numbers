import { nanoid } from "nanoid";

export type Number = {
  id: string;
  value: number;
};
export type Numbers = Array<Number>;
export type ListOrder = Array<string>;

const initialData = () => {
  const numbers: Numbers = Array(10)
    .fill(0)
    .map((elem, index) => {
      const randomNumber = Math.floor(Math.random() * 100);
      const id = nanoid();
      const newItem = {
        id,
        value: randomNumber,
      };
      return newItem;
    });
  const listOrder: ListOrder = numbers.map((elem) => elem.id);
  const row = {
    title: "Numbers",
    id: "row-1",
    listOrder,
  };
  return {
    numbers,
    row,
  };
};
export default initialData();
