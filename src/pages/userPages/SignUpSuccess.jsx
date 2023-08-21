import { Link } from "react-router-dom"
import { UserHero } from "../../components"
import signupSuccessImg from "../../assets/signupsuccess.png"


function SignUpSuccess() {
  return (
      <main className="flex h-full w-full">
          <UserHero />
          <div className="flex flex-col h-screen w-1/2 items-center mt-20 text-center px-20">
              <div>
                  <h2 className="text-blackii font-bold text-3xl">Account Created Successfully</h2>
                  <p className="text-base text-[#777777]">Please fill the details to create your account</p>
              </div>
              <img src={signupSuccessImg} alt="sign up successful" className="w-32 h-32 my-24"/>

              <Link to="/" className="bg-orange text-white font-medium text-lg py-2 w-full rounded-md">Go to my account</Link>
          </div>
    </main>
  )
}

export default SignUpSuccess