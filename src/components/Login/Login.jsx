import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser, registerUser } from "../../api";

const Login = ({ setShowLogin, currState, setLoginState, setUser }) => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Reset form - accessible throughout the component
  const resetForm = () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    try {
      if (currState === "register") {
        const data = await registerUser(name, email, password);

        setMessage(data.message);

        // Clear registration fields
        resetForm();

        // Switch to login
        setLoginState("login");

        return;
      }

      // Login API
      const data = await loginUser(email, password);

      if (!data.token) {
        throw new Error("Login token was not received");
      }

      // Save authentication details
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      setUser(data.user);

      // Clear input fields
      resetForm();

      // Close popup
      setShowLogin(false);

      // Navigate to dashboard
      navigate("/user-dashboard");

    } catch (error) {
      console.log("Authentication error:", error);
      setMessage(error.message || "Something went wrong.");

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-[#4A3835]/50 flex items-center justify-center z-50">
      <div className="bg-[#F8F5F0] w-fit h-fit rounded-lg shadow-md p-10 mx-auto my-2 left-0 right-0 absolute z-50 max-[824px]:w-80 max-[824px]:p-5">

        <button
          onClick={() => {
            resetForm();
            setMessage("");
            setShowLogin(false);
          }}
          className="absolute top-4 right-5 text-2xl"
        >
          &times;
        </button>

        <h1 className="text-[#4A3835] font-semibold cursive text-4xl font-[Allura] text-center">
          Petal & Purl
        </h1>

        <div className="login-container">

          <p className="text-[#C9828F] text-lg pb-4 text-center max-[824px]:pb-2">
            {currState === "login"
              ? "Welcome back!"
              : "Create an account"}
          </p>

          <h1 className="text-[#4A3835] text-2xl font-bold mb-4 border-b-2 border-[#BFAEA5] p-2">
            {currState === "login" ? "Login" : "Register"}
          </h1>

          <form
            onSubmit={handleSubmit}
            className="login-form flex flex-col"
            autoComplete={currState === "register" ? "off" : "on"}
          >

            {currState === "register" && (
              <div className="user-input flex flex-col mb-4">
                <label htmlFor="name" className="text-[#4A3835]">
                  Name:
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  required
                  className="bg-[#F1E8DF] p-1 rounded-sm"
                />
              </div>
            )}

            <div className="user-input flex flex-col mb-4">
              <label htmlFor="email" className="text-[#4A3835]">
                Email:
              </label>

              <input
                type="email"
                id="email"
                name="email"
                autoComplete={currState === "register" ? "off" : "username"}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
                className="bg-[#F1E8DF] p-1 rounded-sm"
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
                autoComplete={
                  currState === "register"
                    ? "new-password"
                    : "current-password"
                }
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
                className="bg-[#F1E8DF] p-1 rounded-sm"
              />
            </div>

            <button
              className="bg-[#B0886A] text-white mx-2 rounded-full px-6 py-1.5 hover:bg-[#9F5B69] transition-transform duration-300 ease-out hover:-translate-y-1 border border-[#BFAEA5] disabled:opacity-60"
              type="submit"
              disabled={loading}
            >
              {loading
                ? "Please wait..."
                : currState === "login"
                  ? "Login"
                  : "Register"}
            </button>

          </form>

          {message && (
            <p className="text-[#9F5B69] text-sm text-center mt-3">
              {message}
            </p>
          )}

          {currState === "register" && (
            <div className="login-condition flex flex-row gap-2 py-2 text-[#C9828F] items-center">
              <input type="checkbox" required />
              <p>
                By continuing, I agree to the terms of use & privacy policy.
              </p>
            </div>
          )}

          <div className="statement py-2 text-[#9F5B69]">

            {currState === "login" ? (
              <p>
                Create a new account?{" "}
                <span
                  onClick={() => {
                    resetForm();
                    setMessage("");
                    setLoginState("register");
                  }}
                  className="cursor-pointer hover:text-[#493139]"
                >
                  Register here
                </span>
              </p>
            ) : (
              <p>
                Already have an account?{" "}
                <span
                  onClick={() => {
                    resetForm();
                    setMessage("");
                    setLoginState("login");
                  }}
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