export const Login = ({ login }) => {
  if (login) {
    return <div>Logged In</div>;
  }
  return <div>Please login</div>;
};
export default Login;
