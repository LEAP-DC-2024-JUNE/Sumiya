import { useState } from "react";
export const Assignment2 = () => {
  const arr = ["apple", "banana", "kiwi", "pear"];
  const [value, setValue] = useState(4);
  const filteredarr = arr.filter((element) => {
    return element.length > value;
  });
  const handleChangeValue = (param1) => {
    setValue(param1);
  };

  return (
    <div>
      <div>Filter String by length</div>
      <button className="border-2 " onClick={() => handleChangeValue(4)}>
        4
      </button>
      <button className="border-2 " onClick={() => handleChangeValue(5)}>
        5
      </button>
      <button className="border-2 " onClick={() => handleChangeValue(2)}>
        2
      </button>
      {filteredarr.map((element) => {
        return <p>{element}</p>;
      })}
    </div>
  );
};
export default Assignment2;
