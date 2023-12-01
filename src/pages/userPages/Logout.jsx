/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom"
import { UserAuth } from "../../context/AuthContext"
import logoutImg from "../../assets/logoutImg.png"
import closeCart from "../../assets/closeCart.png"
import { toast } from "react-toastify"


const Logout = ({closeToggle}) => {

  const {logout, currentUser} = UserAuth()
   const navigate = useNavigate()
   
    const handleLogout = async (e) => {
    e.preventDefault()
      try {
        if (currentUser) {
         await logout()
      toast.dark("You're now logged out")
      navigate("/")
      closeToggle
      }
     

    } catch (err) {
      console.error(err.message)
    }
  }
  return (
    <div className="z-[99] flex justify-center items-center bg-black/50 text-center fixed left-0 top-0 mx-auto w-full h-screen">
      <div className="bg-white lg:w-[500px] w-full py-8 lg:px-0 px-4 rounded-lg shadow-2xl">
        <button type="button" onClick={closeToggle} className="relative lg:-right-[200px] cursor-pointer">
          <img src={closeCart} alt="close cart modal"/>
        </button>
         
        <div className="flex justify-center rounded-full">
          <img src={logoutImg} alt="logout" className="lg:w-[100px] w-[70px] lg:h-[100px] h-[70px]" />
        </div>
      
        <div className="mt-8 mb-20">
          <p className="text-neutral-800 lg:text-[24px] text-xl font-bold mb-2">Are you sure you want to Logout?</p>
      <p className="text-grey text-base font-normal">You can always come back, we’ll be here</p>
        </div>
      
      <div className="flex flex-col gap-y-4 lg:mx-16 mx-0">
        <button onClick={handleLogout} className="text-white bg-orange border-none rounded-md py-3 ">Yes</button>
      <button onClick={closeToggle} className="text-orange border border-orange rounded-md py-3">No</button>
      </div>
      
    </div>
    </div>
    
  )
}

export default Logout