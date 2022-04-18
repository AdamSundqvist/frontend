import React from "react";
import "./App.css";
import CreateUserForm from "./components/CreateUserForm";

function CreateUserPage() {
  const testCreateUser = {
    email: "adam@exsitec.se",
    office: "Uppsala",
    password: "adam123",
    confirmpassword: "adam123",
  };

  //   const [user, setUser] = useState({ name: "", email: "" });

  const CreateUser = (details) => {
    console.log("User created!", details);
  };

  return (
    <div className="AllPages">
      <header className="LoginHeader">
        <h1>Kontorskampen</h1>
        <h4>Klimatutmaningen 2022</h4>
        {/* få in exsitec logga här  */}
      </header>
      <body>
        <div className="createUser">
          <CreateUserForm CreateUser={CreateUser} />
        </div>
        <footer>Footer content</footer>
      </body>
    </div>
  );
}

export default CreateUserPage;
