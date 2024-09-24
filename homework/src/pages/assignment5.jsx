import { useState } from "react";

export const Assignment5 = () => {
  const students = [
    { name: "Alice", grade: 58 },
    { name: "Bob", grade: 72 },
    { name: "Charlie", grade: 85 },
    { name: "David", grade: 45 },
  ];
  const [value, setValue] = useState(false);
  const passedStudents = students.filter((element) => {
    return value == true ? element.grade >= 60 : element.grade <= 60;
  });
  const handleClick = (param1) => {
    return setValue(param1);
  };
  return (
    <div>
      <div>
        <button onClick={() => handleClick(true)}>Tentssen</button>
        <button onClick={() => handleClick(false)}>Tentseegui</button>
      </div>
      <div>
        {passedStudents.map((student) => {
          return (
            <div>
              <p>{student.name}</p>
              <p>{student.grade}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Assignment5;
