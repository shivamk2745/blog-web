import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Project from "./pages/Project";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/signin" element={<SignUp />}></Route>
        <Route path="/project" element={<Project />}>
          {" "}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
