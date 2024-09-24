import { useState } from "react";

export const Assignment4 = () => {
  const array = [
    { name: "Laptop", price: 1200, available: true },
    { name: "Phone", price: 800, available: false },
    { name: "Tablet", price: 400, available: true },
  ];
  const [goods, setGoods] = useState(false);
  const products = array.filter((element) => {
    return goods == true
      ? element.available == true
      : element.available == false;
  });
  const handleGoods = (param1) => {
    return setGoods(param1);
  };
  return (
    <div>
      <div>
        <button className="border-2" onClick={() => handleGoods(true)}>
          Idewxtei baraa
        </button>
        <button className="border-2" onClick={() => handleGoods(false)}>
          Duussan baraa
        </button>
      </div>
      {products.map((product) => {
        return (
          <div>
            <p>{product.name}</p>
            <p>{product.price}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Assignment4;
