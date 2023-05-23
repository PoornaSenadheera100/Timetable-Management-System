import { useState } from "react";
import axios from "axios";

export default function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function proceed(e) {
    e.preventDefault();

    axios
      .get(`http://localhost:8070/user/${username}/${password}`)
      .then((res) => {
        console.log(res.data);
        redirect(res.data.userType);
      });
  }

  function redirect(usrType) {
    if (usrType === "admin") {
    } else if (usrType === "") {
    } else if (usrType === "") {
    } else {
      alert("Cannot validate the user type!");
    }
  }

  return (
    <form onSubmit={proceed}>
      User Name
      <br />
      <input
        type="email"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        required
      />
      <br />
      Password
      <br />
      <input
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        required
      />
      <br />
      <br />
      <button type="submit">Login</button>
    </form>
  );
}
