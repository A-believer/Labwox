import PropTypes from "prop-types"

function CartShipping({ shippingOption, onOptionChange }) {
  function handleShippingOptionChange(e){
    const newOption = e.target.value
    onOptionChange(newOption)
  }

  const option = ["Drop Off", "Agent Pick Up"]
  return (
    <section className="text-center bg-white drop-shadow-2xl p-8 z-[99] border border-orange">
      
      <label htmlFor="dropOff" className="flex gap-x-5">
        <input
          value={option[0]}
          checked={shippingOption === option[0]}
          onChange={handleShippingOptionChange}
          type="radio"
          name="dropOff"
          id="dropOff"
        className="place-self-start mt-2"/>
        <p className="flex flex-col text-left">
          <b>Drop Off Sample by Yourself</b>
          <span className="text-grey">
            2B Awori Close, Akora Villas off Adeniyi Jones, Ikeja, Lagos.
          </span>
          <span className="text-grey">(+234)8090870364</span>
        </p>
      </label>

      <label htmlFor="pickUp" className="flex gap-x-5 mt-20">
        <input
          value={option[1]}
          checked={shippingOption === option[1]}
          onChange={handleShippingOptionChange}
          type="radio"
          name="pickUp"
          id="pickUp" 
          className="place-self-start mt-2"
          />
        <p className="flex flex-col text-left">
          <b>Agent Pick Up</b>
          <span  className="text-grey">(+234)8090870364, (+234)8090870364</span>
        </p>
      </label>
    </section>
  )
}

CartShipping.propTypes = {
  shippingOption: PropTypes.string.isRequired,
  onOptionChange: PropTypes.func.isRequired
}


export default CartShipping