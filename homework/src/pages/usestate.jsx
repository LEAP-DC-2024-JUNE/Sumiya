const { useState } = require("react");

const state = () => {
  const [click, setClick] = useState(false);
  const clickOn = () => {
    setClick(!click);
  };

  return (
    <div>
      <button
        onClick={clickOn}
        style={{
          border: "2px solid red",
          padding: "10px",
        }}
        className={'${click ? "bg-green-600" : "bg-red-600"}'}
      >
        {click ? "On" : "Off"}
      </button>
    </div>
  );
};
export default state;
