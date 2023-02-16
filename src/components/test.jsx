import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Loginn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    axios
      .post("https://brandapi.onrender.com/api/auth/login", {
        username,
        password,
      })
      .then((response) => {
        // handle successful login
        console.log(response.data);
        navigate("/dashboard/dash");
      })
      .catch((error) => {
        // handle login error
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleLogin}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button type="submit">Log in</button>
    </form>
  );
};

export default Loginn;
