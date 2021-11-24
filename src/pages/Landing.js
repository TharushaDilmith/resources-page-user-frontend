import React from "react";
import "./landing.css";
import first from "../images/3.png";
import second from "../images/4.png";
import third from "../images/2.png";
import fourth from "../images/Vector.png";
import Footer from "../components/Footer";
import axios from "axios";
import { useHistory } from "react-router";

export default function Landing() {
  //use state to email
  const [email, setEmail] = React.useState("");

  //use state to password
  const [password, setPassword] = React.useState("");

  //use state to first name
  const [firstName, setFirstName] = React.useState("");

  //use state to last name
  const [lastName, setLastName] = React.useState("");

  //use history to redirect to home page
  const history = useHistory();


  //on
  const onLogin = (e) => {
    e.preventDefault();
    try {
      axios
        .post("/login", {
          email: email,
          password: password,
        })
        .then((res) => {
          if (res.data.status === "success") {
            localStorage.setItem("token", res.data.data.token);
            history.push("/");
          } else {
            alert(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  //onSignUp
  const onSignUp = (e) => {
    e.preventDefault();
    try {
      axios

        .post("/register", {
          firstname: firstName,
          lastname: lastName,
          email: email,
          password: password,
          c_password: password,
        })
        .then((res) => {
          if (res.data.status === "success") {
            alert(res.data.message);
          } else {
            alert(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="landing">
      <section className="main">
        <div className="container py-3">
          <div className="row">
            <div className="col-6 d-flex justify-content-center flex-column">
              <a className="" href="https://www.globaledulink.co.uk/">
                <img
                  src="https://www.globaledulink.co.uk/wp-content/themes/wplms-child/assets/images/gel-icon.png"
                  alt=""
                  className="d-inline-block align-text-top"
                  width="100"
                  height="100"
                />
                <img
                  src="https://www.globaledulink.co.uk/wp-content/themes/wplms-child/assets/images/gel-logo-text.png"
                  alt=""
                  className="d-inline-block align-text-top hide-mobile"
                  width="100"
                  height="100"
                />
              </a>
              <h1 className="py-4">
                The most accessible resources you could ever come across
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                euismod, nisi eu blandit consectetur, nisl nunc aliquet nunc,
                euismod aliquam eros nunc euismod.
              </p>
              <button
                className="btn btn-primary py-2 my-4 rounded-pill resource-btn"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                View Free Resources
              </button>
              <div className="information-container pt-4">
                <div className="row">
                  <div className="col-5">
                    <div className="information-item p-2">
                      <img src={first} alt="" className="" />
                      <span className="px-2">Guided lerning Hours(48)</span>
                    </div>
                    <div className="information-item mt-2 p-2">
                      <img src={second} alt="" />
                      <span className="px-2">Course Material</span>
                    </div>
                  </div>
                  <div className="col-5">
                    <div className="information-item p-2">
                      <img src={third} alt="" />
                      <span className="px-2">Tutor Support</span>
                    </div>
                    <div className="information-item mt-2 p-2">
                      <img src={fourth} alt="" />
                      <span className="px-2"> Assessment Included</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header text-center text-uppercase">
                  <h5 class="modal-title w-100" id="exampleModalLabel">
                    Login
                  </h5>
                </div>
                <div class="modal-body">
                  <form>
                    <div class="container d-flex justify-content-center align-items-center flex-column ">
                      <div class="text-center mb-6">
                        <h1 class="">Welcome Back!</h1>
                        <h5>What will you learn today? Find out, with GEL</h5>
                      </div>
                      <div class="mb-6">
                        <input
                          type="email"
                          class="form-control py-6 px-6"
                          id="exampleInputPassword1"
                          placeholder="Email"
                          value={email}
                          name="email"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div class="py-6">
                        <input
                          type="password"
                          class="form-control"
                          id="exampleInputPassword1"
                          placeholder="Password"
                          value={password}
                          name="password"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <button
                        type="submit"
                        class="btn btn-primary rounded-pill py-2 px-6 login-btn"
                        onClick={onLogin}
                        data-bs-dismiss="modal"
                      >
                        Login
                      </button>
                      <p class="">
                        New User?{" "}
                        <a
                          href=""
                          data-bs-toggle="modal"
                          data-bs-target="#signupModal"
                        >
                          Sign Up
                        </a>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div
            class="modal fade"
            id="signupModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header text-center text-uppercase">
                  <h5 class="modal-title w-100" id="exampleModalLabel">
                    SIGN UP
                  </h5>
                </div>
                <div class="modal-body">
                  <form>
                    <div class="container d-flex justify-content-center align-items-center flex-column ">
                      <div class="text-center">
                        <h1 class="">Sign Up for free</h1>
                        <h5>
                          Join the World's Largest Free Learning Community
                        </h5>
                      </div>
                      <div class="p-6">
                        <input
                          type="text"
                          class="form-control mt-6"
                          id="exampleInputPassword1"
                          placeholder="First Name"
                          value={firstName}
                          name="firstName"
                          onChange={(e) => setFirstName(e.target.value)}
                        />
                      </div>
                      <div class="py-6">
                        <input
                          type="text"
                          class="form-control"
                          id="exampleInputPassword1"
                          placeholder="Last Name"
                          value={lastName}
                          name="lastName"
                          onChange={(e) => setLastName(e.target.value)}
                        />
                      </div>
                      <div class="p-6">
                        <input
                          type="email"
                          class="form-control mt-6"
                          id="exampleInputPassword1"
                          placeholder="Email"
                          value={email}
                          name="email"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div class="py-6">
                        <input
                          type="password"
                          class="form-control"
                          id="exampleInputPassword1"
                          placeholder="Password"
                          value={password}
                          name="password"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <button
                        type="submit"
                        class="btn btn-primary rounded-pill py-2 px-6 login-btn"
                        onClick={onSignUp}
                        data-bs-dismiss="modal"
                      >
                        Sign up
                      </button>
                      <p class="">
                        Already have an account? <a href=""
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal">Log in</a>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* footer */}
      <section className="footer mt-4">
        <Footer />
      </section>
    </div>
  );
}
