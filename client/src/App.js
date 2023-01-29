import GlobalStyles from "./GlobalStyles";
import Login from "./components/login/index";
import Dashboard from "./components/dashboard/index";
import Register from "./components/register/index";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
