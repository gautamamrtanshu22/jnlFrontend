import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  const handleSubmit = async (event) => {
    console.log("Hitted handlesubmit");
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://jacksonbackend-c2b2cdg7hkdwc7eu.canadacentral-01.azurewebsites.net/auth/getToken",
        {
          Username: username,
          Password: password,
        }
      );
      //It will set the token
      console.log(response.data);
      setToken(response.data);
    } catch (error) {
      console.error(error);
    }
    //apiCall();
  };

  return (
    <>
      <h2>Jackson Life Insurance Pvt. Ltd.</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: "10px" }}>
        <label htmlFor="username"></label>
        <input
          placeholder="Enter Username"
          id="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password"></label>
        <input
          placeholder="Enter Password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <div
        style={{
          width: "400px",
          border: "solid black 1px",
          overflow: "auto",
          wordBreak: "break-word",
          overflowWrap: "break-word",
        }}
      >
        {token}
      </div>
    </>
  );
}

export default App;
