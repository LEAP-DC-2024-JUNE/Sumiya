import { useState } from "react";

export default function Home() {
  const [memberShip, setmemberShip] = useState("");
  const handleRadio = (param1) => {
    setmemberShip(param1);
  };
  return (
    <div className="max-w-3xl flex flex-col gap-4">
      <div className="font-bold text-2xl">New Member Registration</div>
      <div className="flex gap-6 ">
        <div className="flex flex-col">
          <span className="font-bold">
            First Name <span className="text-red-600">*</span>
          </span>
          <input
            type="text"
            className="border-2 border-solid border-black rounded-lg"
          ></input>
        </div>
        <div className="flex flex-col">
          <span className="font-bold">
            Last Name<span className="text-red-600">*</span>
          </span>
          <input
            type="text"
            className="border-2 border-solid border-black rounded-lg"
          ></input>
        </div>
      </div>
      <div className="flex gap-6">
        <div className="flex flex-col">
          <span className="font-bold">
            Address<span className="text-red-600">*</span>
          </span>
          <input
            type="text"
            className="border-2 border-solid border-black rounded-lg"
          ></input>
        </div>
        <div className="flex flex-col">
          <span className="font-bold">
            Address 2<span className="text-red-600">*</span>
          </span>
          <input
            type="text"
            className="border-2 border-solid border-black rounded-lg"
          ></input>
        </div>
      </div>

      <div className="flex flex-col">
        <span className="font-bold">
          City<span className="text-red-600">*</span>
        </span>
        <input
          type="text"
          className="border-2 border-solid border-black w-1/3 rounded-lg"
        ></input>
      </div>
      <div className="flex gap-6">
        <div className="flex flex-col">
          <span className="font-bold">
            State/Province<span className="text-red-600">*</span>
          </span>
          <input
            type="text"
            className="border-2 border-solid border-black rounded-lg"
          ></input>
        </div>
        <div className="flex flex-col">
          <span className="font-bold">
            Zip/Postal Code<span className="text-red-600">*</span>
          </span>
          <input
            type="number"
            className="border-2 border-solid border-black w-20 rounded-lg"
          ></input>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="font-bold">
          Phone<span className="text-red-600">*</span>
        </span>
        <input
          type="tel"
          className="border-2 border-solid border-black w-1/3 rounded-lg"
          placeholder="(___)___-______"
        ></input>
      </div>
      <div className="flex flex-col">
        <span className="font-bold">
          Email Addres<span className="text-red-600">*</span>
        </span>
        <input
          type="email"
          className="border-2 border-solid border-black w-1/3 rounded-lg"
        ></input>
      </div>
      <div className="flex flex-col">
        <span className="font-bold">
          Membership Type<span className="text-red-600">*</span>
          <div className="flex gap-2">
            <input
              type="radio"
              name="membershipType"
              value={"Standart"}
              onChange={(event) => handleRadio(event.target.value)}
            ></input>
            <span>Standart</span>
            <input
              type="radio"
              name="membershipType"
              value={"Premium"}
              onChange={(event) => handleRadio(event.target.value)}
            ></input>
            <span>Premium</span>
            <input
              type="radio"
              name="membershipType"
              value={"Classic"}
              onChange={(event) => handleRadio(event.target.value)}
            ></input>
            <span>Classic</span>
          </div>
        </span>
      </div>
      <button onClick={() => console.log(memberShip)}>Submit</button>
    </div>
  );
}
