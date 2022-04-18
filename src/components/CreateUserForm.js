import React from "react";
import { useState } from "react";

function CreateUserForm({ CreateUser }) {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    office: "",
    password: "",
    confirmpassword: "",
  });

  const submitUser = (e) => {
    e.preventDefault();

    CreateUser(details);
  };

  return (
    <form onSubmit={submitUser}>
      <div className="form-inner">
        <h2>Create User</h2>
        {/* {error != "" ? <div className="error">{error}</div> : ""} */}
        <div className="form-group">
          <input
            placeholder="För och Efternamn"
            type="text"
            name="name"
            id="name"
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
            value={details.name}
          />
        </div>
        <div className="form-group">
          <input
            placeholder="Mailadress"
            type="email"
            name="email"
            id="email"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
          />
        </div>
        <div className="form-group">
          {/*Här kommer dropdown för kontor, behöver fixa snygg placeholder kanske */}
          <select id="chooseOfficeSelect">
            <option value="Uppsala">Uppsala</option>
            <option value="Stockholm">Stockholm</option>
            <option value="Linköping">Linköping</option>
            <option value="Malmö">Malmö</option>
          </select>
        </div>
        <div className="form-group">
          <input
            placeholder="Lösenord"
            type="password"
            name="password"
            id="password"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />
        </div>
        <div className="form-group">
          <input
            placeholder="Bekräfta lösenord"
            type="password"
            name="confirmpassword"
            id="confirmpassword"
            onChange={(e) =>
              setDetails({ ...details, confirmpassword: e.target.value })
            }
            value={details.confirmpassword}
          />
        </div>
        <input className="startPageButtons" type="submit" value="Skapa konto" />
      </div>
    </form>
  );
}

export default CreateUserForm;
