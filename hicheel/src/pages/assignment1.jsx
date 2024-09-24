import { useState } from "react";

export const Assignment1 = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 8];
  const [value, setValue] = useState(0);
  const filteredNumbers = numbers.filter((element) => {
    return element % 2 == value;
  });
  const handleOdd = () => {
    setValue(1);
  };
  const handleEven = () => {
    setValue(0);
  };
  return (
    <div>
      <button onClick={handleOdd}>Sondgoi</button>
      <button onClick={handleEven}>Tegsh</button>
      {filteredNumbers.map((number) => {
        return <p>{number}</p>;
      })}
    </div>
  );
};
export default Assignment1;
