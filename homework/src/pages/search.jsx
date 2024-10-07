import { useState } from "react";
export const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const people = [
    { name: "Anar", age: 20, class: "Leap-Dc" },
    { name: "Sumiya", age: 18, class: "Leap-Dc" },
    { name: "Bold", age: 16, class: "Leap-Dc" },
  ];
  const filteredValue = people.filter((person) =>
    person.name.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase())
  );
  //   person.name.toUpperCase() == inputValue.toUpperCase()
  return (
    <div>
      <input
        type="text"
        className="border-2"
        onChange={(event) => setInputValue(event.target.value)}
      ></input>
      {filteredValue.length == 0
        ? people.map((person) => {
            return (
              <div>
                {" "}
                <p>{person.name}</p> <p>{person.age}</p> <p>{person.class}</p>
              </div>
            );
          })
        : filteredValue.map((person) => {
            return (
              <div>
                <p>{person.name}</p> <p>{person.class}</p>{" "}
              </div>
            );
          })}
    </div>
  );
};
export default Search;
