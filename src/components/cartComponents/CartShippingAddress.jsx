import PropTypes from "prop-types"
import close from "../../assets/closeCart.png"
function CartShippingAddress({ closeModal, deliveryDetails, shippingDetailsChange, error, handleShippingDetails }) {
  

    const handleInputChange = (event, inputName) => {
    const newValue = event.target.value;
    shippingDetailsChange(inputName, newValue);
  };

  return (
    <div className="lg:absolute sticky lg:top-[125px] top-[10%] lg:left-[20%] left-auto lg:w-[30vw] w-[90vw] text-center bg-white drop-shadow-2xl 
    p-8 z-[99] flex flex-col gap-4 border border-orange outline-offset-4 outline-orange">
      <div className="flex justify-between">
        <p className="text-xl font-bold">Enter Address</p>
        <img src={close} alt="close shipping address details" onClick={closeModal} className="object-contain"/>
      </div>
      
      <label htmlFor="address" className="flex flex-col text-base font-normal">
        <span className="text-left">Address</span>
        <input
          value={deliveryDetails.deliveryAddress}
          onChange={(e) => handleInputChange(e, "deliveryAddress")}
          type="text"
          name="address"
          placeholder="enter your address..."
          className="border border-grey rounded outline-none p-2 mt-1" />
        {error && <p>enter your address!</p>}
      </label> 

      <label htmlFor="landmark" className="flex flex-col text-base font-normal">
        <span className="text-left">Landmark</span>
        <input
          value={deliveryDetails.locationLandmark}
          onChange={(e) => handleInputChange(e, "locationLandmark")}
          type="text"
          name="landmark"
          placeholder="enter a landmark..."
          className="border border-grey rounded outline-none p-2 mt-1" />
        {error && <p>enter a recognizable landmark!</p>}
      </label> 

      <label htmlFor="phoneNumber" className="flex flex-col text-base font-normal">
        <span className="text-left">Contact Phone Number</span>
        <input
          value={deliveryDetails.contactNumber}
          onChange={(e) => handleInputChange(e, "contactNumber")}
          type="tel"
          name="phoneNumber"
          placeholder="enter your contact number..."
          className="border border-grey rounded outline-none p-2 mt-1" />
        {error && <p>enter your contact number!</p>}
      </label>

      <button type="submit" onClick={handleShippingDetails} className="text-white bg-orange rounded px-5 py-1.5">Continue</button>
    </div>
  )
}

CartShippingAddress.propTypes = {
  closeModal: PropTypes.func.isRequired,
  handleShippingDetails: PropTypes.func.isRequired,
  deliveryDetails: PropTypes.object.isRequired,
  shippingDetailsChange: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired
}


export default CartShippingAddress