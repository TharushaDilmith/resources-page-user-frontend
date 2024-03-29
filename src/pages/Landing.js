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

  //use state to store loading state
  const [loading, setLoading] = React.useState(false);

  //use history to redirect to home page
  const history = useHistory();

  //onlogin function
  const onLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      axios
        .post("/login", {
          email: email,
          password: password,
        })
        .then((res) => {
          if (res.data.success) {
            //to
            localStorage.setItem("token", res.data.data.token);
            //set loading state to false
            setLoading(false);
            //close modal
            document
              .getElementById("exampleModal")
              .classList.remove("show", "d-block");
            //remove modal backdrop
            document
              .querySelectorAll(".modal-backdrop")
              .forEach((el) => el.classList.remove("modal-backdrop"));
            history.push("/resources");
            window.location.reload();
          } else {
            //set loading to false
            setLoading(false);
            //show error message
            alert(res.data.message);
          }
        })
        .catch((err) => {
          //set loading to false
          setLoading(false);
          //show error message
          console.log(err);
        });
    } catch (error) {
      //set loading state to false
      setLoading(false);
      //show error message
      console.log(error);
    }
  };

  //onSignUp
  const onSignUp = (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      //post request to signup
      axios

        .post("/register", {
          firstname: firstName,
          lastname: lastName,
          email: email,
          password: password,
          c_password: password,
        })
        .then((res) => {
          if (res.data.success) {
            //store token in local storage
            localStorage.setItem("token", res.data.data.token);
            //set loading state to false
            setLoading(false);
            //close modal
            document
              .getElementById("signupModal")
              .classList.remove("show", "d-block");
            //remove backdrop
            document
              .querySelectorAll(".modal-backdrop")
              .forEach((el) => el.classList.remove("modal-backdrop"));
            //redirect to resources page
            history.push("/resources");
            window.location.reload();
          } else {
            //set loading state to false
            setLoading(false);
            //show error message
            alert(res.data.message);
          }
        })
        .catch((err) => {
          //set loading state to false
          setLoading(false);
          //show error message
          console.log(err);
        });
    } catch (error) {
      //set loading state to false
      setLoading(false);
      //show error message
      console.log(error);
    }
  };

  return (
    <div className="landing  p-0">
      <section className="main p-0  object-cover object-sm-center object-lg-full">
        <div className="container py-3">
          <div className="row">
            <div className="col-lg-8 col-xl-6 col-md-10 d-flex justify-content-center flex-column">
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
              <div className="row">
                <div className="col-lg-12 col-md-8 col-sm-12">
                  <h1 className="py-4">
                    The most accessible resources you could ever come across
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec euismod, nisi eu blandit consectetur, nisl nunc
                    aliquet nunc, euismod aliquam eros nunc euismod.
                  </p>
                </div>
              </div>
              <button
                className="btn btn-primary py-2 my-4 rounded-pill resource-btn"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                View Free Resources
              </button>
              <div className="information-container pt-4">
                <div className="row">
                  <div className="col-6 col-xl-6 col-lg-5 col-md-6  col-sm-6">
                    <div className="information-item p-2 mt-2">
                      <img src={first} alt="" className="" />
                      <span className="px-2">Guided lerning Hours(48)</span>
                    </div>
                    <div className="information-item mt-2 p-2">
                      <img src={second} alt="" />
                      <span className="px-2">Course Material</span>
                    </div>
                  </div>
                  <div className="col-6 col-xl-6 col-lg-5 col-md-6 col-sm-6">
                    <div className="information-item p-2 mt-2">
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
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header text-center text-uppercase">
                  <h5 className="modal-title w-100" id="exampleModalLabel">
                    Login
                  </h5>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="container d-flex justify-content-center align-items-center flex-column ">
                      <div className="text-center mb-6">
                        <h3 className="login-header">Welcome Back!</h3>
                        <h6 className="login-subheader">
                          What will you learn today? Find out, with GEL
                        </h6>
                      </div>
                      <div className="mb-6">
                        <input
                          type="email"
                          className="form-control py-6 px-6 input-email"
                          id="exampleInputPassword1"
                          placeholder="Email"
                          value={email}
                          name="email"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="py-6">
                        <input
                          type="password"
                          className="form-control input-password"
                          id="exampleInputPassword1"
                          placeholder="Password"
                          value={password}
                          name="password"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary rounded-pill py-2 px-6 login-btn"
                        onClick={onLogin}
                        {...(loading ? { disabled: true } : {})}
                        // data-bs-dismiss="modal"
                      >
                        {loading && (
                          <span
                            class="spinner-border spinner-border-sm"
                            role="status"
                            aria-hidden="true"
                          ></span>
                        )}
                        Login
                      </button>
                      <p className="">
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
            className="modal fade"
            id="signupModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header text-center text-uppercase">
                  <h5 className="modal-title w-100" id="exampleModalLabel">
                    SIGN UP
                  </h5>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="container d-flex justify-content-center align-items-center flex-column ">
                      <div className="text-center">
                        <h3 className="login-header">Sign Up for free</h3>
                        <h6 className="login-subheader">
                          Join the World's Largest Free Learning Community
                        </h6>
                      </div>
                      <div className="p-6">
                        <input
                          type="text"
                          className="form-control mt-6 input-firstname"
                          id="exampleInputPassword1"
                          placeholder="First Name"
                          value={firstName}
                          name="firstName"
                          onChange={(e) => setFirstName(e.target.value)}
                        />
                      </div>
                      <div className="py-6">
                        <input
                          type="text"
                          className="form-control input-lastname"
                          id="exampleInputPassword1"
                          placeholder="Last Name"
                          value={lastName}
                          name="lastName"
                          onChange={(e) => setLastName(e.target.value)}
                        />
                      </div>
                      <div className="p-6">
                        <input
                          type="email"
                          className="form-control mt-6 input-email"
                          id="exampleInputPassword1"
                          placeholder="Email"
                          value={email}
                          name="email"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="py-6">
                        <input
                          type="password"
                          className="form-control input-password"
                          id="exampleInputPassword1"
                          placeholder="Password"
                          value={password}
                          name="password"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary rounded-pill py-2 px-6 login-btn"
                        onClick={onSignUp}
                        {...(loading ? { disabled: true } : {})}
                        // data-bs-dismiss="modal"
                      >
                        {loading && (
                          <span
                            class="spinner-border spinner-border-sm"
                            role="status"
                            aria-hidden="true"
                          ></span>
                        )}
                        Sign up
                      </button>
                      <p className="">
                        Already have an account?{" "}
                        <a
                          href=""
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        >
                          Log in
                        </a>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
