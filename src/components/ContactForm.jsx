


const ContactForm = () => {
  return (
      <form className="flex flex-col gap-y-8 w-full">
          
          <div className="flex lg:flex-row flex-col lg:gap-4 gap-8 w-full">
            <div className="flex flex-col w-96 h-12">
                <label htmlFor="surname" className="text-blackii text-base leading-5 mb-2">Surname</label>
                <input type="text" id="surname" name="surname" placeholder="enter surname" className="rounded" />
            </div>

            <div className="flex flex-col w-96 h-12">
                <label htmlFor="firstname" className="text-blackii text-base leading-5 mb-2">First Name</label>
                <input type="text" id="firstname" name="firstname" placeholder="enter first name" className="rounded" />
            </div>  
          </div>

          <div className="flex lg:flex-row flex-col lg:gap-4 gap-8 w-full">
            <div className="flex flex-col w-96 h-12">
                <label htmlFor="email" className="text-blackii text-base leading-5 mb-2">Email</label>
                <input type="email" id="email" name="email" placeholder="enter email" className="rounded" />
            </div>

            <div className="flex flex-col w-96 h-12">
                <label htmlFor="phone" className="text-blackii text-base leading-5 mb-2">Phone Number</label>
                <input type="number" id="phone" name="phone" placeholder="enter phone number" className="rounded" />
            </div> 
          </div>

          <div className="flex flex-col h-12">
              <label htmlFor="subject" className="text-blackii text-base leading-5 mb-2">Subject</label>
              <input type="text" id="subject" name="subject" placeholder="enter email subject" className="rounded" />
          </div>

          <div className="flex flex-col">
              <label htmlFor="message" className="text-blackii text-base leading-5 mb-2">Message</label>
              <textarea name="message" id="message" cols="10" rows="5" className="rounded " ></textarea>
          </div>

          <button className={`bg-orange lg:py-[10px] py-2 lg:px-[54px] px-[35px] lg:text-base text-xs  rounded-[4px] text-white hover:scale-105 active:scale-95 transition-all duration-300 lg:w-[25%] w-[45%]`}>Submit</button>

    </form>
  )
}

export default ContactForm