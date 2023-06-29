import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';


const ContactForm = () => {


const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);

   try {
      await axios.post('https://api.example.com/submit-form', data);

      // Perform any additional success logic here
      // ...

      toast.success('Submitted Successfully!');
    } catch (error) {
      toast.error('Failed!');
    }

    setLoading(false);
  };

  return (
      <form className="flex flex-col gap-y-8 w-full" onSubmit={handleSubmit(onSubmit)}>
          
          <div className="flex lg:flex-row flex-col lg:gap-4 gap-8 w-full">
            <div className="flex flex-col lg:w-96 w-full h-12">
                <label htmlFor="surname" className="text-blackii text-base leading-5 mb-2">Surname</label>
                  <input type="text" id="surname" name="surname" placeholder="enter surname" className={`py-2 px-3 outline-none bg-clear rounded text-grey placeholder:text-grey border ring-0 focus:border-grey focus:ring-0 active:ring-0 ${errors.surname ? "border-red" : "border-grey"}`}
                      {...register('surname', { required: true })} />
            </div>

            <div className="flex flex-col lg:w-96 w-full h-12">
                <label htmlFor="firstname" className="text-blackii text-base leading-5 mb-2">First Name</label>
                  <input type="text" id="firstname" name="firstname" placeholder="enter first name" className={`py-2 px-3 bg-clear outline-none rounded text-grey placeholder:text-grey border ring-0 focus:border-grey focus:ring-0 active:ring-0 ${errors.firstname ? "border-red" : "border-grey"}`}
                      {...register('firstname', { required: true })} />
            </div>  
          </div>

          <div className="flex lg:flex-row flex-col lg:gap-4 gap-8 w-full">
            <div className="flex flex-col lg:w-96 w-full h-12">
                <label htmlFor="email" className="text-blackii text-base leading-5 mb-2">Email</label>
                  <input type="email" id="email" name="email" placeholder="enter email" className={`py-2 px-3 bg-clear outline-none rounded text-grey placeholder:text-grey border ring-0 focus:border-grey focus:ring-0 active:ring-0 ${errors.email ? "border-red" : "border-grey"}`}
                      {...register('email', { required: true })} />
            </div>

            <div className="flex flex-col lg:w-96 w-full h-12">
                <label htmlFor="phone" className="text-blackii text-base leading-5 mb-2">Phone Number</label>
                  <input type="number" id="phone" name="phone" placeholder="enter phone number" className={`py-2 px-3 bg-clear outline-none rounded text-grey placeholder:text-grey border ring-0 focus:border-grey focus:ring-0 active:ring-0 ${errors.phone ? "border-red" : "border-grey"}`}
                      {...register('phone', { required: true })} />
            </div> 
          </div>

          <div className="flex flex-col w-full h-12">
              <label htmlFor="subject" className="text-blackii text-base leading-5 mb-2">Subject</label>
              <input type="text" id="subject" name="subject" placeholder="enter email subject" className={`py-2 px-3 bg-clear outline-none rounded text-grey placeholder:text-grey border ring-0 focus:border-grey focus:ring-0 active:ring-0 ${errors.subject ? "border-red" : "border-grey"}`}
                  {...register('subject', { required: true })} />
          </div>

          <div className="flex flex-col">
              <label htmlFor="message" className="text-blackii text-base leading-5 mb-2">Message</label>
              <textarea name="message" id="message" cols="10" rows="5" className={`py-2 px-3 bg-clear outline-none resize-none rounded text-grey placeholder:text-grey border ring-0 focus:border-grey focus:ring-0 active:ring-0 ${errors.message ? "border-red" : "border-grey"}`}
                  {...register('message', { required: true })}></textarea>
          </div>

          <button type="submit" disabled={loading} className={`bg-orange lg:py-[10px] py-2 lg:px-[54px] px-[35px] lg:text-base text-xs  rounded-[4px] text-white hover:scale-105 active:scale-95 transition-all duration-300 lg:w-[25%] w-[45%]`}>Submit</button>

          <ToastContainer />
    </form>
  )
}

export default ContactForm