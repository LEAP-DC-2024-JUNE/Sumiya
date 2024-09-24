import { useState } from "react";

export const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const handleLastName = (param1) => {
    setLastName(param1);
  };
  const handleFirstName = (param1) => {
    setFirstName(param1);
  };
  const handleEmail = (param1) => {
    setEmail(param1);
  };
  console.log(firstName, lastName);
  return (
    <div>
      <input
        className="border-2 text-red-500"
        type="text"
        placeholder="LastName"
        onChange={(event) => handleLastName(event.target.value)}
      ></input>
      <input
        className="border-2"
        type="text"
        placeholder="FirstName"
        onChange={(event) => handleFirstName(event.target.value)}
      ></input>
      <input
        className="border-2"
        type="email"
        placeholder="Email"
        onChange={(event) => handleEmail(event.target.value)}
      ></input>
    </div>
  );
};
export default Form;
