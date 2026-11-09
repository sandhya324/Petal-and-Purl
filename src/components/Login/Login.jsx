import { useState } from "react";

// const Login = ({ setShowLogin, setLoginState }) => {
const Login = ({ setShowLogin, currState, setLoginState }) => {
  // const [currState, setCurrState] = useState("setLoginState");

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();  

  // const [formData, setFormData] = useState({name, email, password });

 
  const handleSubmit=(e) => {
    e.preventDefault();

    console.log("Name: "+ name );
    console.log("Email: " + email);
    console.log("Password: " + password);
  }


  return (
    <div className="fixed inset-0 bg-[#4A3835]/50 flex items  -center justify-center z-50">
      <div className="bg-[#F8F5F0] w-fit h-fit rounded-lg shadow-md p-10 mx-auto my-2 left-0 right-0 absolute z-50 max-[824px]:w-80 max-[824px]:p-5">
        
        <button
          onClick={() => setShowLogin(false)}
          className="absolute top-4 right-5 text-2xl"
        >
          &times;
        </button>
        <h1 className="text-[#4A3835] font-semibold cursive text-4xl font-[Allura] text-center">
          Petal & Purl
        </h1>

        <div className="login-container">
          <p className="text-[#C9828F] text-lg pb-4 text-center max-[824px]:pb-2">
            {currState === "login" ? "Welcome back!" : "Create an account"}
          </p>

          <h1 className="text-[#4A3835] text-2xl font-bold mb-4 border-b-2 border-[#BFAEA5] p-2">
            {currState === "login" ? "Login" : "Register"}
          </h1>

          <form  onSubmit={handleSubmit} className="login-form flex flex-col">
            <div className="user-input flex flex-col mb-4">
              {currState === "register" && (
                <>
                  <label htmlFor="name" className="text-[#4A3835]">
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    required
                    className="bg-[#F1E8DF] p-1 rounded-sm "
                  />
                </>
              )}
            </div>

            <div className="user-input flex flex-col mb-4">
              <label htmlFor="email" className="text-[#4A3835]">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
                className="bg-[#F1E8DF] p-1 rounded-sm "
              />
            </div>

            <div className="user-input flex flex-col mb-4">
              <label htmlFor="password" className="text-[#4A3835]">
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
                className="bg-[#F1E8DF]  p-1 rounded-sm"
              />
            </div>

            <button
              // style={{ backgroundImage: `url(${assets.wallpaper_2})` }}
              className="bg-[#B0886A] text-[white] mx-2 rounded-full px-6 py-1.5 hover:bg-[#9F5B69] transition-transform duration-300 ease-out hover:-translate-y-1 border-1 border-[#BFAEA5]"
              type="submit"
            >
              {currState === "login" ? "Login" : "Register"}
            </button>
          </form>


          {currState === "register" ? (
            <div className="login-condition flex flex-row gap-2 py-2 text-[#C9828F] items-center">
              <input type="checkbox" required />
              <p>
                By continuing, i agree to the terms of use & privacy policy.
              </p>
            </div>
          ) : (
            ""
          )}

          <div className="statement py-2 text-[#9F5B69]">
            {currState === "login" ? (
              <p>
                Create a new account?{" "}
                <span
                  onClick={() => setLoginState("register")}
                  className="cursor-pointer hover:text-[#493139]"
                >
                  Register here
                </span>
              </p>
            ) : (
              <p>
                Already have an account?{" "}
                <span
                  onClick={() => setLoginState("login")}
                  className="cursor-pointer hover:text-[#493139]"
                >
                  Login here
                </span>
              </p>
            )}
          </div>
        </div>
      </div>

    </div>
   
  );
};

export default Login;
