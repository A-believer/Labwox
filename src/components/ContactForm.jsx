import { addDoc, collection } from "firebase/firestore"
import { db } from "../config/firebaseConfig";
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ContactForm = () => {

  const [ready, setReady] = useState(false)
  const [formData, setFormData] = useState({
          firstname: "",
          surname: "",
          email: "",
          subject: "",
          phone: 0,
          message: ""
        })

  function handleChange(event) {

    event.preventDefault()
    const { name, value } = event.target
    setFormData(prev => ({...prev, [name]: value}))
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setReady(true);

    try {
      await addDoc(collection(db, 'contactInformation'), formData);
      toast.success('Form submitted successfully!');
      // Clear the form after submission
      setFormData({
          firstname: "",
          surname: "",
          email: "",
          subject: "",
          phone: 0,
          message: ""
        });
    } catch (err) {
      toast.error('Failed to submit form. Please try again.');
      console.error(err)
    }
    setReady(false);
  };

  return (
    <form
      className="flex flex-col gap-y-8 w-full"
      onSubmit={handleSubmit} 
      action="https://formsubmit.co/labwoxltd@gmail.com" method="POST">
      <div className="flex lg:flex-row flex-col lg:gap-4 gap-8 w-full">
        
          {/* Surname  */}
          
          <label
            htmlFor="surname"
            className="flex flex-col lg:w-96 w-full h-12 text-blackii text-base leading-5">
            <span className='mb-2'>Surname</span>
            <input
            onChange={handleChange}
            value={formData.surname}
            type="text"
            name="surname"
            placeholder="enter surname"
            className={`capitalize py-2 px-3 outline-none bg-clear rounded text-grey placeholder:text-grey border ring-0 focus:border-grey focus:ring-0 active:ring-0 border-grey`}/>
          </label>

        {/* First name  */}
          <label
            htmlFor="firstname"
            className="flex flex-col lg:w-96 w-full h-12 text-blackii text-base leading-5">
            <span className='mb-2'>First Name</span>
            <input
            onChange={handleChange}
            value={formData.firstname}
            type="text"
            name="firstname"
            placeholder="enter first name"
            className={`capitalize py-2 px-3 bg-clear outline-none rounded text-grey placeholder:text-grey border ring-0 focus:border-grey focus:ring-0 active:ring-0 border-grey`} />
          </label>
        </div>

      <div className="flex lg:flex-row flex-col lg:gap-4 gap-8 w-full">
        {/* email  */}
        <label
            htmlFor="email"
          className="flex flex-col lg:w-96 w-fulltext-blackii text-base leading-5">
          <span className='mb-2'>Email</span>
          <input
            onChange={handleChange}
            value={formData.email}
            type="email"
            name="email"
            placeholder="enter email"
            className={`py-2 px-3 bg-clear outline-none rounded text-grey placeholder:text-grey border ring-0 focus:border-grey focus:ring-0 active:ring-0 border-grey`}/>
        </label>
        
          {/* phone number  */}
          <label
            htmlFor="phone"
            className="flex flex-col lg:w-96 w-full h-12 text-blackii text-base leading-5">
          <span className='mb-2'>Phone Number</span>
           <input
            onChange={handleChange}
            value={formData.phone}
            type="number"
            name="phone"
            placeholder="enter phone number"
            className={`capitalize py-2 px-3 bg-clear outline-none rounded text-grey placeholder:text-grey border ring-0 focus:border-grey focus:ring-0 active:ring-0 border-grey`}
                      />
          </label>
        </div>

      {/* Subject  */}
        <label
          htmlFor="subject"
          className="flex flex-col w-full h-12 text-blackii text-base leading-5 ">
          <span className='mb-2'>Subject</span>
          <input
          onChange={handleChange}
          value={formData.subject}
          type="text"
          name="subject"
          placeholder="enter email subject"
          className={`capitalize py-2 px-3 bg-clear outline-none rounded text-grey placeholder:text-grey border ring-0 focus:border-grey focus:ring-0 active:ring-0 border-grey`}/>
        </label>

          {/* message  */}
        <label
          htmlFor="message"
        className="flex flex-col text-blackii text-base leading-5">
        <span className='mb-2'>Message</span>
        <textarea
          onChange={handleChange}
          value={formData.message}
          name="message"
          cols="10"
          rows="5"
          className={`py-2 px-3 bg-clear outline-none resize-none rounded text-grey placeholder:text-grey border ring-0 focus:border-grey focus:ring-0 active:ring-0 border-grey`} />
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