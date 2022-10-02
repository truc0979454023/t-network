import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { register } from "../redux/actions/authAction";

const Register = () => {
  const initalState = {
    username: "",
    fullname: "",
    email: "",
    password: "",
    cf_password: "",
    gender: "male",
  };

  const [isTogglePassword, setIsTogglePassword] = useState(false);
  const [isToggleConfirmPassword, setIsToggleConfirmPassword] = useState(false);
  const [userData, setUserData] = useState(initalState);

  const { email, password, username, fullname, cf_password } = userData;

  const { auth, alert } = useSelector((state) => state);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    if (auth.token) navigate("/");
  }, [auth.token, navigate]);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(userData));
  };
  return (
    <div className="h-full">
      <div className="flex flex-col h-full gap-2 lg:flex-row bg-login bg-center bg-no-repeat bg-cover justify-center lg:justify-around items-center min-h-screen w-full p-4">
        <div className=" text-center">
          <h3 className="text-[48px] md:text-[62px] tracking-widest text-gray-800 font-semibold mb-6 uppercase">
            T-Network
          </h3>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="w-[360px] md:w-[480px] bg-white flex border-4 border-gray-800 flex-col gap-5 p-4 rounded-md">
            <h3 className=" w-max text-[24px] tracking-widest text-gray-800 font-semibold">
              REGISTER
            </h3>
            <div className="w-full">
              <label
                className="block text-gray-800 text-[14px]"
                htmlFor="fullname"
              >
                Fullname
              </label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                value={fullname}
                onChange={handleChangeInput}
                className=" rounded-sm p-2 border w-full border-gray-300 outline-none"
              />
              {alert.fullname && (
                <small className="text-red-500">{alert.fullname}</small>
              )}
            </div>

            <div className="w-full">
              <label
                className="block text-gray-800 text-[14px]"
                htmlFor="username"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={username.toLowerCase().replace(/ /g, "")}
                onChange={handleChangeInput}
                className=" rounded-sm p-2 border w-full border-gray-300 outline-none"
              />
              {alert.username && (
                <small className="text-red-500">{alert.username}</small>
              )}
            </div>

            <div className="w-full">
              <label
                className="block text-gray-800 text-[14px]"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={handleChangeInput}
                className=" rounded-sm p-2 border w-full border-gray-300 outline-none"
              />
              {alert.email && (
                <small className="text-red-500">{alert.email}</small>
              )}
            </div>
            <div className="w-full relative">
              <label
                className="block text-gray-800 text-[14px]"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type={isTogglePassword ? "text" : "password"}
                id="password"
                name="password"
                value={password}
                onChange={handleChangeInput}
                className=" rounded-sm p-2 border w-full border-gray-300 outline-none"
              />
              <span
                onClick={() => setIsTogglePassword(!isTogglePassword)}
                className="absolute top-1/2 -translate-x-1/2 text-gray-600 cursor-pointer right-0 material-symbols-outlined"
              >
                {isTogglePassword ? "visibility_off" : "visibility"}
              </span>
              {alert.password && (
                <small className="text-red-500">{alert.password}</small>
              )}
            </div>

            <div className="w-full relative">
              <label
                className="block text-gray-800 text-[14px]"
                htmlFor="cf_password"
              >
                Confirm Password
              </label>
              <input
                type={isToggleConfirmPassword ? "text" : "password"}
                id="cf_password"
                name="cf_password"
                value={cf_password}
                onChange={handleChangeInput}
                className=" rounded-sm p-2 border w-full border-gray-300 outline-none"
              />
              <span
                onClick={() =>
                  setIsToggleConfirmPassword(!isToggleConfirmPassword)
                }
                className="absolute top-1/2 -translate-x-1/2 text-gray-600 cursor-pointer right-0 material-symbols-outlined"
              >
                {isToggleConfirmPassword ? "visibility_off" : "visibility"}
              </span>
              {alert.cf_password && (
                <small className="text-red-500">{alert.cf_password}</small>
              )}
            </div>

            <div className="w-full flex justify-between">
              <div className="flex items-center gap-2">
                <label
                  className="block text-gray-800 text-[14px]"
                  htmlFor="male"
                >
                  Male
                </label>
                <input
                  type="radio"
                  name="gender"
                  defaultChecked
                  value="male"
                  onChange={handleChangeInput}
                  className="h-5 w-5 rounded-sm p-2 border border-gray-300 outline-none"
                />
              </div>
              <div className="flex items-center gap-2">
                <label
                  className="block text-gray-800 text-[14px]"
                  htmlFor="female"
                >
                  Female
                </label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={handleChangeInput}
                  className="h-5 w-5 rounded-sm p-2 border border-gray-300 outline-none"
                />
              </div>
              <div className="flex items-center gap-2">
                <label
                  className="block text-gray-800 text-[14px]"
                  htmlFor="other"
                >
                  Other
                </label>
                <input
                  type="radio"
                  name="gender"
                  value="other"
                  onChange={handleChangeInput}
                  className="h-5 w-5 rounded-sm p-2 border  border-gray-300 outline-none"
                />
              </div>
            </div>

            <button
              className=" uppercase bg-blue-900 w-full p-2 rounded-md font-semibold text-white tracking-widest "
              type="submit"
            >
              submit
            </button>
            <div className="w-full h-[1px] bg-gray-200"></div>
            <Link to="/login">
              <p className="uppercase bg-red-500 text-center w-full p-2 rounded-md font-semibold text-white tracking-widest">
                Login
              </p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
