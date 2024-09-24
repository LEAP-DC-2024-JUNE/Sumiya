export const Assignment3 = () => {
  const people = [
    { name: "John", age: 17 },
    { name: "Jane", age: 22 },
    { name: "Tom", age: 15 },
    { name: "Emma", age: 30 },
  ];
  const filteredPeople = people.filter((element) => {
    return element.age >= 18;
  });
  return (
    <div>
      {filteredPeople.map((person) => {
        return (
          <div>
            <p>{person.name}</p>
            <p>{person.age}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Assignment3;
