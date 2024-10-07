import FooterIcon from "@/icons/Footericon";
export const Bottomfooter = () => {
  return (
    <div className="flex justify-between ">
      <FooterIcon />
      <div className="flex gap-8">
        <span>Terms of Use</span>
        <span>Privacy Policy</span>
        <span>Cookie Policy</span>
      </div>
    </div>
  );
};
export default Bottomfooter;
