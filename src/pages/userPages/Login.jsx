import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import { UserAuth } from "../../context/AuthContext";
import { useState } from "react";
import { UserHero } from "../../components";
import { toast } from "react-toastify";

const Login = () => {
  const initialFormData = {
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const navigate = useNavigate();
  const { signIn, currentUser } = UserAuth();

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }

  async function handleSignIn(e) {
    e.preventDefault();
    try {
      if (currentUser) {
        navigate("/");
        setFormData(initialFormData);
      } else {
        await signIn(formData.email, formData.password);
        navigate("/");
        toast.success("You're successfully logged in 🎊");
      }
    } catch (err) {
      console.error(err.message);
    }
  }
  return (
    <main className="flex lg:h-screen h-full w-full">
      <UserHero />

      <form
        onSubmit={handleSignIn}
        className="lg:w-1/2 w-full lg:h-screen h-full lg:p-12 py-10 lg:px-20 px-10 flex flex-col justify-center items-stretch  gap-y-10 overflow-scroll"
      >
        <Link to="/">
          <img
            src={Logo}
            alt="labwox-logo"
            className="w-[93px] h-[34px] lg:hidden block "
            loading="lazy"
          />
        </Link>
        <div>
          <p className="text-black lg:text-[27px] text-xl font-bold">
            Login to your Account
          </p>
          <p className="lg:text-base text-xs font-normal text-[#777] my-1">
            Get access to your account
          </p>
        </div>

        <label
          htmlFor="email"
          className="text-blackii text-base font-normal leading-tight flex flex-col gap-2 lg:my-4 mb-2 mt-5"
        >
          <span>Email</span>
          <input
            value={formData.email}
            onChange={handleChange}
            name="email"
            type="email"
            placeholder="enter your email..."
            className="rounded outline-none p-2  border border-grey"
          />
        </label>

        <label
          htmlFor="password"
          className="text-blackii text-base font-normal leading-tight flex flex-col gap-2 lg:my-4 my-2"
        >
          <span>Password</span>
          <input
            value={formData.password}
            onChange={handleChange}
            name="password"
            type="password"
            placeholder="enter your password..."
            className="rounded outline-none p-2  border border-grey"
          />
        </label>

        <button
          type="submit"
          className="bg-orange text-center text-white text-lg font-medium leading-snug p-2.5 rounded mt-4 mb-8"
        >
          Login
        </button>

        <div>
          <Link to="/forgotpassword" className="text-blackii underline">
            Forgot Password?
          </Link>
          <p className="mt-3 text-blackii">
            Don{`'`}t have an account?{" "}
            <Link to="/signup" className="text-orange">
              Sign Up
            </Link>
          </p>
        </div>
      </form>
    </main>
  );
};

export default Login;
