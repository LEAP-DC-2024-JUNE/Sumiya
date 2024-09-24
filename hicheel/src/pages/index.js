// import Image from "next/image";
// import localFont from "next/font/local";
// import Vip from "../components/Vip";
// import Items from "../components/Items";
// // import Items from "../components/Items";
import { useState } from "react";

export const Home = () => {
  //   let loggedin = true;
  //   let isVip = false;
  //   let listofItems = [1, 2];
  //   return (
  //     <div>
  //       <Vip login={loggedin} vip={isVip} />
  //       <Items listitems={listofItems} />
  //     </div>
  //   );
  // };
  // const [click, setClick] = useState(
  //   <div className="border-2 bg-red-500">On</div>
  // );
  // const handleClick = () => {
  //   setClick(<div className="border-2 bg-green-500">Off</div>);
  // };
  const array = [1, 2, 3, 4];
  const info = [
    {
      name: "Dul",
      age: 18,
    },
    {
      name: "Sumiya",
      age: "19",
    },
  ];
  const filteredinfo = info.filter((element) => {
    return element.age > 18;
  });
  return (
    <div>
      {/* <button onClick={handleClick}>{click}</button> */}
      {array.filter((element) => {
        return element > 2;
      })}
      <div>
        <p>NASAND HURSEN</p>
        <div>
          {filteredinfo.map((person) => {
            return (
              <div>
                <p>{person.name}</p>
                <p>{person.age}</p>
              </div>
            );
          })}
        </div>
      </div>
      <input
        className="bg-slate-400"
        type="password"
        placeholder="******"
      ></input>
      <input className="bg-transparent" type="number" placeholder="123"></input>
    </div>
  );
};
export default Home;
