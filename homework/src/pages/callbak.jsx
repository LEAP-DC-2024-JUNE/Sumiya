export const Callbak = () => {
  const handleClick = (callback, param2) => {
    console.log("button daragdtsan");
    callback();
    console.log(param2);
  };
  const Loghelloworld = () => {
    console.log("Hello");
  };
  return (
    <div>
      <button onClick={() => handleClick(Loghelloworld)}>Click me</button>
      <button
        onClick={() =>
          handleClick(() => {
            console.log("callback ajilla");
          }, "Leap")
        }
      >
        click me 2dh arga
      </button>
    </div>
  );
};
export default Callbak;
