import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import { UserAuth } from "../../context/AuthContext";
import { useState } from "react";
import { UserHero } from "../../components";
import { ToastContainer } from "react-toastify";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from 'zod';

const signInFormSchema = z.object({
    email: z
        .string()
        .min(1, 'Email is required')
        .email('Invalid email'),
    password: z
        .string()
        .min(1, 'Password is required')
        .min(8, 'Password must have than 8 characters!')
})



const Login = () => {

  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();
  const { signIn, error } = UserAuth();

 const {
    register,
    handleSubmit,
   formState: { errors },
    reset
  } = useForm({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  })

  async function handleSignIn(data) {
    setLoading(true)
    try {
      await signIn(data.email, data.password);
      if (error === null) {
        setLoading(false)
      } else {
        navigate('/')
        reset()
        setLoading(false)
      }
    } catch (err) {
      setLoading(false)
    }
  }
  return (
    <main className="flex lg:h-screen h-full w-full">
      <UserHero />

      <form
        onSubmit={handleSubmit(handleSignIn)}
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
            {...register("email")}
            name="email"
            type="email"
            placeholder="enter your email..."
            className={`rounded outline-none p-2 ${errors.email ? "border border-red-600" : "border border-grey"}  border border-grey`}
          />
          <p className="text-red-600 text-xs italic">{errors.email?.message}</p>
        </label>

        <label
          htmlFor="password"
          className="text-blackii text-base font-normal leading-tight flex flex-col gap-2 lg:my-4 my-2"
        >
          <span>Password</span>
          <input
                        {...register("password")}
            name="password"
            type="password"
            placeholder="enter your password..."
             className={`rounded outline-none p-2 ${errors.email ? "border border-red-600" : "border border-grey"}  border border-grey`}
          />
          <p className="text-red-600 text-xs italic">{errors.password?.message}</p>
        </label>

        <button
          disabled={loading}
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
      <ToastContainer/>
    </main>
  );
};

export default Login;
