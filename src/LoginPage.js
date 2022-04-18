import "./App.css";
import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import { Link } from "react-router-dom";

function LoginPage() {
  const testUser = {
    email: "adam@exsitec.se",
    password: "adam123",
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);
    if (
      details.email === testUser.email &&
      details.password === testUser.password
    ) {
      console.log("logged in");
      setUser({
        name: details.name,
        email: details.email,
      });
    } else {
      console.log("Details do not match");
      setError("No account found!");
    }
  };

  const Logout = () => {
    console.log("Logout");
    setUser({ name: "", email: "" });
  };

  return (
    <div className="AllPages">
      <header className="LoginHeader">
        <h1>Kontorskampen</h1>
        <h4>Klimatutmaningen 2022</h4>
        {/* få in exsitec logga här  */}
      </header>
      <body>
        <div id="Login">
          {user.email !== "" ? (
            <div className="welcome">
              <h2>
                Welcome, <span>{user.name}</span>
              </h2>
              <button onClick={Logout}>Logout</button>
            </div>
          ) : (
            <div>
              <LoginForm Login={Login} error={error} />
              <nav id="createUserLink">
                <a>Har du inget konto? </a>
                <Link to="/CreateUser">Skapa ett här</Link>
              </nav>
            </div>
          )}
        </div>
        <footer>Footer content</footer>
      </body>
    </div>
  );
}

export default LoginPage;
