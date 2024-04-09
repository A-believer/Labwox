import { addDoc, collection } from "firebase/firestore"
import { db } from "../config/firebaseConfig";
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const contactSchema = z.object({
lastName: z.string().min(2, "Last name should be nore than 2 characters"),
  firstName: z.string().min(2, "First name should be nore than 2 characters"),
email: z
        .string()
        .min(1, 'Email is required')
    .email('Invalid email'),
  phone: z.string().min(11, "enter a valid phone number").max(14),
  subject: z.string().min(5, "enter the subject of the message"),
  message: z.string().min(10, "enter a detailed message")
        
})
const ContactForm = () => {
const {
    register,
    handleSubmit,
  formState: { errors },
    reset
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
          lastName: "",
          email: "",
          subject: "",
          phone: "",
          message: ""
    }
  })
  const [ready, setReady] = useState(false) 

  const handleContactSubmit = async (data) => {
    setReady(true);
    try {
      await addDoc(collection(db, 'contactInformation'), data);
      toast.success('Form submitted successfully!');
      reset()
    } catch (err) {
      toast.error('Failed to submit form. Please try again.');
      console.error(err)
    }
    setReady(false);
  };

  return (
    <form
      className="flex flex-col lg:gap-y-8 gap-y-10 w-full"
      onSubmit={handleSubmit(handleContactSubmit)} 
      action="https://formsubmit.co/labwoxltd@gmail.com" method="POST">
      <div className="flex lg:flex-row flex-col lg:gap-8 gap-8 w-full">
        
          {/* Surname  */}
          
          <label
            htmlFor="lastName"
            className="flex flex-col lg:w-96 w-full h-12 text-blackii text-base leading-5">
            <span className='mb-2'>Surname</span>
          <input
            {...register("lastName")}
            
            type="text"
            name="lastName"
            placeholder="enter last name"
            className={`capitalize py-2 px-3 outline-none bg-clear rounded text-grey placeholder:text-grey border ring-0 focus:border-grey focus:ring-0 active:ring-0 border-grey`} />
          <p className="text-red-600 text-xs italic">{errors.lastName?.message}</p>
          </label>

        {/* First name  */}
          <label
            htmlFor="firstName"
            className="flex flex-col lg:w-96 w-full h-12 text-blackii text-base leading-5">
            <span className='mb-2'>First Name</span>
          <input
            {...register("firstName")}
            
            type="text"
            name="firstName"
            placeholder="enter first name"
            className={`capitalize py-2 px-3 bg-clear outline-none rounded text-grey placeholder:text-grey border ring-0 focus:border-grey focus:ring-0 active:ring-0 border-grey`} />
          <p className="text-red-600 text-xs italic">{errors.firstName?.message}</p>
          
          </label>
        </div>

      <div className="flex lg:flex-row flex-col lg:gap-4 gap-8 w-full">
        {/* email  */}
        <label
            htmlFor="email"
          className="flex flex-col lg:w-96 w-fulltext-blackii text-base leading-5">
          <span className='mb-2'>Email</span>
          <input
            {...register("email")}
            
            type="email"
            name="email"
            placeholder="enter email address"
            className={`py-2 px-3 bg-clear outline-none rounded text-grey placeholder:text-grey border ring-0 focus:border-grey focus:ring-0 active:ring-0 border-grey`} />
          <p className="text-red-600 text-xs italic">{errors.email?.message}</p>
          
        </label>
        
          {/* phone number  */}
          <label
            htmlFor="phone"
            className="flex flex-col lg:w-96 w-full h-12 text-blackii text-base leading-5">
          <span className='mb-2'>Phone Number</span>
          <input
            {...register("phone")}           
            type="text"
            name="phone"
            placeholder="enter phone number"
            className={`capitalize py-2 px-3 bg-clear outline-none rounded text-grey placeholder:text-grey border ring-0 focus:border-grey focus:ring-0 active:ring-0 border-grey`}
          />
          <p className="text-red-600 text-xs italic">{errors.phone?.message}</p>
          
          </label>
        </div>

      {/* Subject  */}
        <label
          htmlFor="subject"
          className="flex flex-col w-full h-12 text-blackii text-base leading-5 ">
          <span className='mb-2'>Subject</span>
        <input
            {...register("subject")}
          type="text"
          name="subject"
          placeholder="enter email subject"
          className={`capitalize py-2 px-3 bg-clear outline-none rounded text-grey placeholder:text-grey border ring-0 focus:border-grey focus:ring-0 active:ring-0 border-grey`} />
          <p className="text-red-600 text-xs italic">{errors.subject?.message}</p>
        
        </label>

          {/* message  */}
        <label
          htmlFor="message"
        className="flex flex-col text-blackii text-base leading-5">
        <span className='mb-2'>Message</span>
        <textarea
            {...register("message")}
          name="message"
          cols="10"
          rows="5"
          className={`py-2 px-3 bg-clear outline-none resize-none rounded text-grey placeholder:text-grey border ring-0 focus:border-grey focus:ring-0 active:ring-0 border-grey`} />
          <p className="text-red-600 text-xs italic">{errors.message?.message}</p>
      </label>
        
      <button
        disabled={ready}
        type="submit"
        className={`bg-orange lg:py-[10px] py-2 lg:px-[54px] px-[35px] lg:text-base text-xs  rounded-[4px] text-white hover:scale-105 active:scale-95 transition-all duration-300 lg:w-[25%] w-[45%]cursor-pointer`}>
        Submit
      </button>
      <ToastContainer/>
    </form>
  )
}

export default ContactForm