import React from "react";
import logo from "../images/Digital Insects Gold 1.png";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import { useState } from "react";
import { MdPhone } from "react-icons/md";
import { AiTwotoneMail } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";
import "../App.css";
const Register = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const [passwordVisible1, setPasswordVisible1] = useState(false);
  const [password1, setPassword1] = useState("");

  const handlePasswordChange1 = (event) => {
    setPassword1(event.target.value);
  };

  const togglePasswordVisibility1 = () => {
    setPasswordVisible1(!passwordVisible);
  };
  return (
    <div className="logincontainer">
      <div className="container">
        <div className="logintitle col-sm-12">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div className="logintitle1">Digital Insects</div>

          <div className="logintitle2">Register</div>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log("Form Submitted");
            }}
            style={{ marginTop: "10px" }}
          >
            <div className="d-block pt-5">
              <label for="username">
                <FaUser
                  style={{
                    color: "var(--text-color1)",
                    fontSize: "30px",
                    marginRight: "15px",
                    marginTop: "10px",
                  }}
                />
              </label>
              <input
                type="text"
                placeholder="Username"
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  outline: "none",
                  borderBottom: "1px solid var(--text-color1)",
                  color: "var(--text-color4)",
                  padding: "10px 15px",
                }}
              />
            </div>
            <div className="d-block pt-4">
              <label for="email">
                <AiTwotoneMail
                  style={{
                    color: "var(--text-color1)",
                    fontSize: "35px",
                    marginRight: "15px",
                    marginTop: "10px",
                  }}
                />
              </label>
              <input
                type="email"
                placeholder="Email"
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  outline: "none",
                  borderBottom: "1px solid var(--text-color1)",
                  color: "var(--text-color4)",
                  padding: "10px 15px",
                }}
              />
            </div>

            <div className="d-block pt-4">
              <label for="phone">
                <MdPhone
                  style={{
                    color: "var(--text-color1)",
                    fontSize: "35px",
                    marginRight: "15px",
                    marginTop: "10px",
                  }}
                />
              </label>
              <input
                type="phone"
                placeholder="Phone"
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  outline: "none",
                  borderBottom: "1px solid var(--text-color1)",
                  color: "var(--text-color4)",
                  padding: "10px 15px",
                }}
              />
            </div>

            <div className="d-block pt-4">
              <label for="password">
                <RiLockPasswordFill
                  style={{
                    color: "var(--text-color1)",
                    fontSize: "30px",
                    marginRight: "15px",
                  }}
                />
              </label>
              <input
                // type="password"
                type={passwordVisible ? "text" : "password"}
                value={password}
                onChange={handlePasswordChange}
                placeholder="Password"
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  outline: "none",
                  borderBottom: "1px solid var(--text-color1)",
                  color: "var(--text-color4)",
                  padding: "10px 15px",
                }}
              />
              <span onClick={togglePasswordVisibility}>
                {passwordVisible ? (
                  <RiEyeOffFill
                    style={{ color: "var(--text-color3)", fontSize: "18px" }}
                  />
                ) : (
                  <RiEyeFill style={{ fontSize: "18px" }} />
                )}
              </span>
            </div>

            <div className="d-block pt-4">
              <label for="password">
                <RiLockPasswordFill
                  style={{
                    color: "var(--text-color1)",
                    fontSize: "30px",
                    marginRight: "15px",
                  }}
                />
              </label>
              <input
                // type="password"
                type={passwordVisible1 ? "text" : "password"}
                value={password1}
                onChange={handlePasswordChange1}
                placeholder="Confirm Password"
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  outline: "none",
                  borderBottom: "1px solid var(--text-color1)",
                  color: "var(--text-color4)",
                  padding: "10px 15px",
                }}
              />
              <span onClick={togglePasswordVisibility1}>
                {passwordVisible1 ? (
                  <RiEyeOffFill
                    style={{ color: "var(--text-color3)", fontSize: "18px" }}
                  />
                ) : (
                  <RiEyeFill style={{ fontSize: "18px" }} />
                )}
              </span>
            </div>

            <button
              style={{
                marginTop: "20px",
                padding: "8px 15px",
                width: "100%",
              }}
              className="loginbtn"
            >
              Register
            </button>
          </form>
        </div>
        <div className="loginfooter" style={{ paddingBottom: "300px" }}>
          Already have an account?
          <Link to="/login">
            <span className="registerspan">Login</span>
          </Link>
          here.
        </div>
      </div>
    </div>
  );
};

export default Register;
