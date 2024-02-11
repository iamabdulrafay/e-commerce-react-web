import React, { useState } from "react";
import { Alert } from "react-bootstrap"; // Assuming you are using react-bootstrap for the Alert component
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "" || password === "") {
      setError(true);
    } else {
      setError(false);
      navigate("/");
    }
  };

  return (
    <>
      <div className="font-nunito w-full  bg-gradient-to-r  min-h-screen flex flex-col  align-middle items-center justify-center ">
        {error && (
          <Alert variant="danger" dismissible className=" w-[70vw]">
            <Alert.Heading className="text-2xl">
              Oh snap! You got an error!
            </Alert.Heading>
            <p>Invalid and blank username and password</p>
          </Alert>
        )}
        <div className="font-nunito flex  align-middle items-center justify-center">
          <div className="">
            <div className="bg-orange-700 p-8  text-white rounded-lg lg:w-full max-w-md min-w-1/4">
              <header className="text-center mb-6">
                <h1 className="text-2xl">Welcome back</h1>
              </header>
              <section className="social-login flex items-center justify-center mb-8">
                <a
                  href="https://www.google.co.uk/"
                  className="flex items-center no-underline  px-4 py-2 rounded-full mr-4">
                  <img
                    src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                    alt="google"
                    className="w-9 lg:mr-1"
                  />
                  {/* <span>Google</span> */}
                </a>
                <button className="flex items-center  px-4 py-2 rounded-full">
                  <img
                    src="https://cdn.freebiesupply.com/logos/large/2x/facebook-2-logo-svg-vector.svg"
                    alt="facebook"
                    className="w-3 mr-1"
                  />
                  {/* <span>Facebook</span> */}
                </button>
              </section>
              <form action="" className="login-form">
                <div className=" mb-4 flex  lg:flex-row  md:flex-row   sm:flex-row flex-col items-center justify-center">
                  <label
                    htmlFor="username"
                    className="lg:text-sm lg:mr-2 md:mr-2 sm:mr-2 text-white">
                    Username or Email
                  </label>
                  <input
                    type="text"
                    placeholder="Username or Email"
                    id="username"
                    className="p-3 border border-gray-300 rounded-full  text-black focus:outline-none focus:border-blue-500"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className=" mb-4 flex  lg:flex-row  md:flex-row  sm:flex-row flex-col items-center justify-center ">
                  <label
                    htmlFor="password"
                    className="text-sm lg:text-sm lg:mr-2 md:mr-2 sm:mr-2  text-white">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Password"
                    id="password"
                    className="p-3 border border-gray-300 rounded-full focus:outline-none text-black focus:border-blue-500"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="input-group">
                  <button
                    onClick={handleSubmit}
                    className="bg-orange-800 text-white  py-3 px-6 rounded-full transition duration-500 hover:bg-orange-500">
                    Login
                  </button>
                </div>
              </form>
              <footer className="text-center">
                {/* <a
                  href="/"
                  title="Forgot Password"
                  className="text-gray-600 text-xs">
                  Forgot Password
                </a> */}
              </footer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
