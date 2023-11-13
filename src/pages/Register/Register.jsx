import { useState } from "react";
import { useRegister } from "../../hooks/useRegister";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, register } = useRegister();

  const handleSubmit = (e) => {
    e.preventDefault();
    register(email, password);
  };

  return (
    <>
      <div className="register">
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="section-title">
              <h2>Register</h2>
            </div>
            <div className="form-holder">
              <div className="email-form">
                <label>Email address</label> <br />
                <input
                  required
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className="form-control"
                  id="email"
                />
              </div>
              <div className="password-form">
                <label>Password</label> <br />
                <input
                  required
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  className="form-control"
                  id="password"
                />
              </div>
              <div className="register-button">
                <button type="submit" className="btn" id="btn">
                  Sign Up
                </button>
                <p>
                  If you are registered allready, please <a href="">Login</a>{" "}
                  here.
                </p>
                {error && <p>{error}</p>}
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
