import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import { UserHero } from "../../components";
import { UserAuth } from "../../context/AuthContext";
import { sendEmail } from "../../emails/sendEmail";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from 'zod';

const signUpFormSchema = z.object({
  firstName: z.string().min(2, 'enter more than 2 characters'),
  lastName: z.string().min(2, 'enter more than 2 characters'),
    email: z
        .string()
        .min(1, 'Email is required')
        .email('Invalid email'),
    password: z
        .string()
        .min(1, 'Password is required')
    .min(8, 'Password must have than 8 characters!'),
  institution: z.string("enter your institutiion"),
   phoneNumber: z.string().min(11, "enter a valid phone number"). max(14) 
})

const SignUp = () => {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
       firstName: "",
    lastName: "",
    email: "",
    password: "",
    institution: "",
    phoneNumber: "",
    }
  })
  const { createUser, currentUser, loading } = UserAuth();
  const navigate = useNavigate();


  async function handleSignUp(data) {
    try {
      await createUser(
        data.email,
        data.password,
        data.firstName,
        data.lastName,
        data.institution,
        data.phoneNumber
      );

      sendEmail(
        currentUser.email,
        "Signed Up Successfully!",
        currentUser.displayName,
        "Your account has been created, you can now order tests",
        "https://labwox.com.ng/#/login",
        "Visit Website"
      );
      navigate("/signupsuccess");

    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <main className="flex lg:h-screen h-full w-full overflow-hidden">
      <UserHero />

      <form
        onSubmit={handleSubmit(handleSignUp)}
        className="lg:w-1/2 w-full h-full lg:py-10 py-5 lg:px-20 px-8 flex flex-col items-stretch gap-y-5 overflow-scroll"
      >
        <Link to="/">
          <img
            src={Logo}
            alt="labwox-logo"
            className="w-[93px] h-[34px] lg:hidden block mb-2 "
            loading="lazy"
          />
        </Link>
        <div>
          <p className="text-black lg:text-[27px] text-xl  font-bold">
            Create An Account
          </p>
          <p className="lg:text-base text-xs font-normal text-[#777] my-1">
            Get access to your account
          </p>
        </div>

        <div className="sppace-y-5">
          <label
            htmlFor="firstName"
            className="text-blackii text-base font-normal leading-tight flex flex-col gap-2 lg:my-4 mb-2 mt-5"
          >
            <span>First Name</span>
            <input
            {...register("firstName")}
              name="firstName"
              type="text"
              placeholder="enter your first name..."
              className={`rounded outline-none p-2  border ${
                errors.firstName?.message ? "border-red-600" : "border-grey"
              }`}
            />
             {errors.firstName?.message && <p className="text-red-600 text-xs italic">{errors.firstName?.message}</p>}
          </label>

          <label
            htmlFor="lastName"
            className="text-blackii text-base font-normal leading-tight flex flex-col gap-2 lg:my-4 mb-2 mt-5"
          >
            <span>Last Name</span>
            <input
            {...register("lastName")} 
              name="lastName"
              type="text"
              placeholder="enter your last name..."
              className={`rounded outline-none p-2  border ${
                errors.lastName?.message ? "border-red-600" : "border-grey"
              }`}
            />
             {errors.lastName?.message && <p className="text-red-600 text-xs italic">{errors.lastName?.message}</p>}
          </label>

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
              className={`rounded outline-none p-2  border ${
                errors.email?.message ? "border-red-600" : "border-grey"
              }`}
            />
             {errors.email?.message && <p className="text-red-600 text-xs italic">{errors.email?.message}</p>}
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
              className={`rounded outline-none p-2  border ${
                errors.password?.message ? "border-red-600" : "border-grey"
              }`}
            />
             {errors.password?.message && <p className="text-red-600 text-xs italic">{errors.password?.message}</p>}
          </label>

          <label
            htmlFor="phoneNumber"
            className="text-blackii text-base font-normal leading-tight flex flex-col gap-2 lg:my-4 my-2"
          >
            <span>Phone Number</span>
            <input
            {...register("phoneNumber")}
              name="phoneNumber"
              type="tel"
              placeholder="your phone number..."
              className={`rounded outline-none p-2  border ${
                errors.phoneNumber?.message ? "border-red-600" : "border-grey"
              }`}
            />
             {errors.phoneNumber?.message && <p className="text-red-600 text-xs italic">{errors.phoneNumber?.message}</p>}
          </label>

          <label
            htmlFor="institution"
            className="text-blackii text-base font-normal leading-tight flex flex-col gap-2 lg:my-4 my-2"
          >
            <span>Institution</span>
            <input
            {...register("institution")}
              name="institution"
              type="text"
              placeholder="enter your institution..."
              className={`rounded outline-none p-2  border ${
                errors.institution?.message ? "border-red-600" : "border-grey"
              }`}
            />
          </label>
          {errors.institution?.message && <p className="text-red-600 text-xs italic">{errors.institution?.message}</p>}
        </div>

        <button
          disabled={loading}
          
          type="submit"
          className="bg-orange text-center text-white text-lg font-medium leading-snug p-2.5 rounded mt-4 mb-8 border-none outline-none"
        >
          Sign Up
        </button>

        <div>
          <p className="text-blackii">
            Already have an account?{" "}
            <Link to="/login" className="text-orange underline">
              Login
            </Link>
          </p>
        </div>
      </form>
    </main>
  );
};

export default SignUp;
