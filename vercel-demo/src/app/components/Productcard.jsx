import Image from "next/image";
export const Productcard = ({ imgSrc, title, description }) => {
  return (
    <div className="500px">
      <Image width={400} height={400} src={imgSrc} />
      <p>{title}</p>
      <p>{description}</p>
    </div>
  );
};
export default Productcard;
