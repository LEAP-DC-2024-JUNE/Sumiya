export const Vip = ({ login, vip }) => {
  return (
    <div>{login && vip ? <div>Vipaccess</div> : <div>Notaccess</div>}</div>
  );
};
export default Vip;
