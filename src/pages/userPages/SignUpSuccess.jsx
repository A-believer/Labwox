import { Link } from "react-router-dom"
import { UserHero } from "../../components"
import signupSuccessImg from "../../assets/signupsuccess.png"
import { toast } from "react-toastify"
import { ToastContainer } from "react-toastify";


function SignUpSuccess() {

  function handleSuccessPrompt() {
    toast.success('Sign up successful, Check your mail!')
    
  }
  
  return (
      <main className="flex h-full w-full">
          <UserHero />
          <div className="flex flex-col h-full lg:w-1/2 w-full items-center lg:mt-16 mt-10 text-center lg:px-20 px-10">
              <div>
                  <h2 className="text-blackii font-bold text-3xl">Account Created Successfully</h2>
                  <p className="text-base text-[#777777]">Please fill the details to create your account</p>
              </div>
              <img src={signupSuccessImg} alt="sign up successful" className="w-32 h-32 my-24"/>

              <Link to="/" onClick={handleSuccessPrompt} className="bg-orange text-white font-medium text-lg py-2 w-full rounded-md">Go to my account</Link>
      </div>
      <ToastContainer/>
      
    </main>
  )
}

export default SignUpSuccess