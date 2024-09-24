export const Items = ({ listitems }) => {
  if (listitems.length === 0) return <div>cart is empty</div>;
  return <div>{listitems}</div>;
};
export default Items;
