import React from "react";
import { contactDetails, technologies } from "../Details/InfoDetails";

const Contact = () => {
  const { email, phone } = contactDetails;

  return (
    // <div className="bg-gradient-to-b from-black to-gray-800 w-full text-white bg-white">
    //   <div className="pt-24 text-center">
    //     <p className="text-4xl font-bold inline border-b-4 border-gray-500">
    //       Contact Us
    //     </p>
    //     <p className="py-6">Submit the form below to get in touch with me</p>
    //   </div>
    //   <div className="flex justify-around items-center w-full">
    //     <div className="p-4 mx-auto flex flex-col-2 md:flex-col justify-center items-center w-full">
    //       <div className="pb-3">
    //       For any questions please drop a mail
    //         <p className="">
    //           <p>{email}</p>
    //           <p>{phone}</p>
    //           <details>New Delhi 110041 </details>
    //         </p>
    //       </div>
    //     </div>

    //     <div className="p-4 mx-auto flex flex-col justify-center w-full">
    //       {/* <div className="pb-3">
    //         <p className="text-4xl font-bold inline border-b-4 border-gray-500">
    //           Contact
    //         </p>
    //         <p className="py-6">
    //           Submit the form below to get in touch with me
    //         </p>
    //       </div> */}
    //       <div>
    //         <form
    //           action="https://getform.io/f/61c99527-2b15-42cf-9b55-ad37d2f7daa6"
    //           method="POST"
    //           className=" flex flex-col w-full"
    //         >
    //           <input
    //             type="text"
    //             name="name"
    //             placeholder="Enter your name"
    //             className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
    //           />
    //           <input
    //             type="text"
    //             name="email"
    //             placeholder="Enter your email"
    //             className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
    //           />
    //           <textarea
    //             name="message"
    //             placeholder="Enter your message"
    //             rows="10"
    //             className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
    //           ></textarea>

    //           <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
    //             Let's talk
    //           </button>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div
      name="technologies"
      className="bg-gradient-to-b from-gray-800 to-black w-full text-white bg-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full pt-24">
        <div className="pb-6">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact Us
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-8 text-center sm:px-0">
          <div className="pb-3">
            For any questions please drop a mail
            <p className="">
              <p>{email}</p>
              <p>{phone}</p>
              <details>New Delhi 110041 </details>
            </p>
          </div>

          <form
            action="https://getform.io/f/61c99527-2b15-42cf-9b55-ad37d2f7daa6"
            method="POST"
            className=" flex flex-col w-full"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
