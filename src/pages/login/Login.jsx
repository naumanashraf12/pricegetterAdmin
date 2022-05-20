import "./login.scss";

const Login = () => {
  return (
    <div className="flex">
      <div className="img_login ">
        <img style={{ width: "500px" }} src="./PriceGetter.svg" alt="" />
      </div>
      <div className="inputs">
        <h1 style={{ paddingBottom: "10px" }}> Admin Login</h1>
        <div>
          <h4>Email</h4>
          <input className="login_field" type="text" />
        </div>
        <div>
          <h4>Password</h4>
          <input className="login_field" type="password" />
        </div>
        <button className="login_button"> Submit</button>
      </div>
    </div>
  );
};

export default Login;
