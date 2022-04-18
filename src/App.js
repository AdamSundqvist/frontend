import React from "react";
import LoginPage from "./LoginPage";
//import CreateUserPage from "./CreateUserPage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CreateUserPage from "./CreateUserPage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          {/* <Link to="/CreateUserPage">Dont have an account? Create one here!</Link> */}
          <Route path="/CreateUser" element={<CreateUserPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
