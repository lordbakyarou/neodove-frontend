import "./App.css";

//Router
import { Routes, Route } from "react-router-dom";

//Pages
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <div className="">
      <div>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
