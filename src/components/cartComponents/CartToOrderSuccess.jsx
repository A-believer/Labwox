import { NavLink } from "react-router-dom"
import success from "../../assets/signupsuccess.png"
import PropTypes from 'prop-types';


function CartToOrderSuccess({ handleOrderSuccess}) {
  return (
    <section className="w-full lg:h-screen h-full absolute top-0 left-0 z-[99] lg:bg-black/30 bg-clear flex justify-center items-center">
      <div className="sticky mt-28 flex flex-col justify-center bg-white lg:w-fit w-[90vw] h-fit p-16 gap-y-10 border border-orange">
        <div className="text-center">
          <h1 className="text-[27px] text-blackii font-bold">Order Placed Successfully</h1>
          <p className="text-grey text-base">Please fill the details to create your account</p>
        </div>
        
        <img src={success} alt="successful"  className="w-[140px] h-[140px] mx-auto object-contain"/>
        
        <NavLink
          onClick={handleOrderSuccess}
          className="text-center w-full bg-orange text-white rounded py-2"
          to={'/userprofile/orders'}>
          View Orders
          </NavLink>
      </div>
      
    </section>
  )
}

CartToOrderSuccess.propTypes = {
  handleOrderSuccess: PropTypes.func.isRequired
}

export default CartToOrderSuccess