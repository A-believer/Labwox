import { useNavigate } from "react-router-dom"
import { UserAuth } from "../../context/AuthContext"
import logoutImg from "../../assets/logoutImg.png"
import closeCart from "../../assets/closeCart.png"


const Logout = ({closeToggle}) => {

  const {logout} = UserAuth()
   const navigate = useNavigate()
    const handleLogout = async (e) => {
    e.preventDefault()
    try {
      await logout()
      navigate("/login")
    } catch (err) {
      console.error(err.message)
    } finally {
      closeToggle
    }
  }
  return (
    <div className="z-[99] flex justify-center items-center bg-black/20 text-center absolute inset-0 my-auto mx-auto ">
      <div className="bg-white lg:w-[660px] w-full lg:py-20 py-10 lg:px-0 px-4">
         <img src={closeCart} alt="close cart modal" className="relative lg:-right-[600px] cursor-pointer" onClick={closeToggle}/>
        <div className="flex justify-center rounded-full">
          <img src={logoutImg} alt="logout" className="lg:w-[150px] w-[100px] lg:h-[150px] h-[100px]" />
        </div>
      
        <div className="mt-8 mb-20">
          <p className="text-neutral-800 lg:text-[27px] text-xl font-bold mb-2">Are you sure you want to Logout?</p>
      <p className="text-grey lg:text-base text-lg font-normal">You can always come back, we’ll be here</p>
        </div>
      
      <div className="flex flex-col gap-y-10 lg:mx-16 mx-0">
        <button onClick={handleLogout} className="text-white bg-orange border-none rounded-md py-3 ">Yes</button>
      <button onClick={closeToggle} className="text-orange border border-orange rounded-md py-3">No</button>
      </div>
      
    </div>
    </div>
    
  )
}

export default Logout