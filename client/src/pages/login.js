import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { login } from "../redux/actions/authAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const initalState = { email: "", password: "" };
  const [userData, setUserData] = useState(initalState);
  const { email, password } = userData;

  const [isTogglePassword, setIsTogglePassword] = useState(false);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { auth } = useSelector((state) => state);

  useEffect(() => {
    if (auth.token) navigate("/");
  }, [auth.token, navigate]);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(userData));
  };
  return (
    <div className="flex flex-col gap-2 lg:flex-row justify-center lg:justify-between items-center w-full min-h-screen h-full p-4">
      <div className=" text-center">
        <h3 className="text-[48px] md:text-[62px] tracking-widest text-gray-800 font-semibold mb-6 uppercase">
          T-Network
        </h3>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="w-[360px] md:w-[480px] bg-white flex border-4 border-gray-800 flex-col gap-5 p-4 rounded-md">
          <h3 className=" w-max text-[24px] tracking-widest text-gray-800 font-semibold">
            LOGIN
          </h3>
          <div className="w-full">
            <label className="block text-gray-800 text-[14px]" htmlFor="email">
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
          </div>
          <button
            className=" uppercase bg-blue-900 w-full p-2 rounded-md font-semibold text-white tracking-widest "
            type="submit"
          >
            submit
          </button>
          <div className="w-full h-[1px] bg-gray-200"></div>
          <Link to="/register">
            <p className="uppercase bg-red-500 text-center w-full p-2 rounded-md font-semibold text-white tracking-widest">
              register
            </p>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
