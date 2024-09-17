import Productcard from "../components/Productcard";
import Eyeglass from "../public/Eyeglass.png";
export const Products = () => {
  let number = 1;
  const Productitems = [
    {
      imgSrc: Eyeglass,
      title: number,
      description: "Sexbomb",
    },
    {
      imgSrc: Eyeglass,
      title: "Kibal batal",
      description: "Kibal black",
    },
    {
      imgSrc: Eyeglass,
      title: "Very nice",
      description: "Salt maalat",
    },
    {
      imgSrc: Eyeglass,
      title: "Kulangot",
      description: "Salt",
    },
    {
      imgSrc: Eyeglass,
      title: "Sipon Malapot",
      description: "salt",
    },
    {
      imgSrc: Eyeglass,
      title: "Pitaklan",
      description: "Black Kibal",
    },
  ];
  return (
    <div className="flex w-full">
      {Productitems.map((item, index) => {
        return (
          <Productcard
            key={index}
            imgSrc={item.imgSrc}
            title={item.title}
            description={item.description}
          />
        );
      })}
    </div>
  );
};
export default Products;
