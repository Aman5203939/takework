import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    try {
      await axios.post(
        "https://takework.onrender.com/api/auth/register",
        { name, email, password }
      );

      alert("Registration Successful");
    } catch (err) {
      alert("Registration Failed");
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input placeholder="Name"
        onChange={(e) => setName(e.target.value)} />
      <br />
      <input placeholder="Email"
        onChange={(e) => setEmail(e.target.value)} />
      <br />
      <input type="password" placeholder="Password"
        onChange={(e) => setPassword(e.target.value)} />
      <br />
      <button onClick={register}>Register</button>
    </div>
  );
}
