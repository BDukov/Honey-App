import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error } = useLogin();


  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);


  };

  return (
    <>
      <div className="login">
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="section-title">
            <h2>Login</h2>
            </div>
            <div className="form-holder">

            <div className="email-form">
              <label>
                Email address
              </label> <br />
              <input
              required
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="form-control"
              id="email" />
            </div>
            <div className="password-form">
              <label>
                Password
              </label> <br />
              <input 
              required
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password} className="form-control" id="password" />
            </div>
            {error && <div className="error">{error} </div>}
            <div className="login-button">
            <button type="submit" className="btn" id="btn">
              Login
            </button>
            <p>If you are not registered, please <a href="">Register</a> here.</p>
            </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
