import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./login.scss";
import { clearErrors, Logins } from "../../store/authSlice";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const {
    isAuth,
    loading,
    token: tk,
    error,
  } = useSelector((state) => state.auth);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(Logins(formData));
  };
  useEffect(() => {
    if (isAuth && !token) {
      localStorage.setItem("token", tk);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Admin Sign In Successfully!!!",
        showConfirmButton: true,
        timer: 2000,
      });
      navigate("/home");
    }
    if (error) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: error,
        showConfirmButton: true,
        timer: 2000,
      });
      dispatch(clearErrors());
    }
    if (localStorage.getItem("token") || isAuth) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Admin Sign In Successfully!!!",
        showConfirmButton: true,
        timer: 2000,
      });
      navigate("/home");
    }
  }, [dispatch, isAuth, error]);
  return (
    <div className="flex">
      <div className="img_login ">
        <img style={{ width: "500px" }} src="./PriceGetter.svg" alt="" />
      </div>
      <div className="inputs">
        <form
          onSubmit={handleSubmit}
          onChange={({ target: { name: nm, value } }) => {
            setFormData({ ...formData, [nm]: value });
          }}
        >
          <h1 style={{ paddingBottom: "10px" }}> Admin Login</h1>
          <div>
            <h4>Email</h4>
            <input
              className="login_field"
              type="text"
              name="email"
              value={formData.email}
            />
          </div>
          <div>
            <h4>Password</h4>
            <input
              className="login_field"
              type="password"
              name="password"
              value={formData.password}
            />
          </div>
          <button type="submit" className="login_button">
            {" "}
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
