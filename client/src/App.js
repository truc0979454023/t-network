import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageRender from "./customRoute/PageRender";
import PrivateRoute from "./customRoute/PrivateRoute";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { refreshToken } from "./redux/actions/authAction";
import ALert from "./components/notify/Alert";
import Header from "./components/header/Header";

function App() {
  const { auth, theme } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshToken());
  }, [dispatch]);

  return (
    <Router>
      <input type="checkbox" checked={theme} id="theme" />
      <div className="w-full min-h-screen bg-white App">
        <ALert />
        {auth.token && <Header />}
        <div className="max-w-[1000px] w-full m-auto">
          <Routes>
            <Route exact path="/" element={auth.token ? <Home /> : <Login />} />
            <Route exact path="/register" element={<Register />} />

            <Route
              exact
              path="/:page"
              element={<PrivateRoute element={<PageRender />} />}
            />
            <Route
              exact
              path="/:page/:id"
              element={<PrivateRoute element={<PageRender />} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
