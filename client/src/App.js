import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageRender from "./PageRender";
import Home from "./pages/home";
import Login from "./pages/login";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { refreshToken } from "./redux/actions/authAction";
import ALert from "./components/notify/Alert";

function App() {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshToken());
  }, [dispatch]);

  return (
    <Router>
      <input type="checkbox" id="theme" />
      <div className="w-full min-h-screen bg-gray-100 App">
        <ALert />
        <Routes>
          <Route exact path="/" element={auth.token ? <Home /> : <Login />} />
        </Routes>
        <div className="max-w-[1000px] w-full m-auto">
          <Routes>
            <Route exact path="/:page" element={<PageRender />} />
            <Route exact path="/:page/:id" element={<PageRender />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
