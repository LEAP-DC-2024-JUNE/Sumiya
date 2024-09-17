import Image from "next/image";
import localFont from "next/font/local";
import Login from "../components/Login";
import Vip from "../components/Vip";
// import Items from "../components/Items";

export const Home = () => {
  let loggedin = true;
  let isVip = false;
  // let listofItems = [];
  return (
    <div>
      <Vip login={loggedin} vip={isVip} />
      {/* <Items /> */}
    </div>
  );
};

export default Home;
