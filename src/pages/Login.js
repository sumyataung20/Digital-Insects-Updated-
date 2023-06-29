import React from "react";
import logo from "../images/Digital Insects Gold 1.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";
import "../App.css";
import { useDispatch } from "react-redux";
import { loginUser } from "../Store/UserSlice";
import { useSelector } from "react-redux";
const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const { loading, error } = useSelector((state) => state.user);

  // const handleLoginEvent = () => {
  //   let userCredentials = {
  //     name,
  //     email,
  //     password,
  //   };
  //   dispatch(loginUser(userCredentials)).then((result) => {
  //     if (result.payload) {
  //       setEmail("");
  //       setPassword("");
  //       setName("");
  //       navigate("/");
  //     }
  //   });
  // };

  const handleLoginEvent = async () => {
    let userCredentials = {
      name,
      email,
      password,
    };

    try {
      await dispatch(loginUser(userCredentials));
      setEmail("");
      setPassword("");
      setName("");
      navigate("/");
    } catch (error) {
      console.log("Login error:", error);
    }
  };

  return (
    <div className="logincontainer">
      <div className="container">
        <div className="logintitle col-sm-12">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div className="logintitle1">Digital Insects</div>

          <div className="logintitle2"> Login </div>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log("Form Submitted");
              handleLoginEvent();
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
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
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
            <div className="d-block py-5">
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
                required
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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

            <div className="d-block">
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
                onChange={(e) => {
                  handlePasswordChange(e);
                  setPassword(e.target.value);
                }}
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

            <button
              style={{
                marginTop: "20px",
                padding: "8px 15px",
                width: "100%",
              }}
              className="loginbtn"
            >
              {loading ? "Loading..." : "Login"}
            </button>

            {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}
          </form>
        </div>
        <div className="loginfooter">
          Dont't have an account?{" "}
          <Link to="/register">
            <span className="registerspan">Register</span>
          </Link>
          here.
        </div>
      </div>
    </div>
  );
};

export default Login;
