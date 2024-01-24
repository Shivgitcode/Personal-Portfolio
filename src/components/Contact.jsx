import React from "react";
import { useContext } from "react";
import { AppProvider } from "../context/AppProvider";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const { formdetails, setFormDetails } = useContext(AppProvider);

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(formdetails);
    await emailjs.send(
      "service_rv5xljj",
      "template_1a8tu8w",
      formdetails,
      "Glh6__fWh21MtwhdY"
    );
    setFormDetails({ ...prev, email: "", name: "", subject: "", message: "" });
  }

  function handleChange(e) {
    // const name = e.target.name;
    const value = e.target.value;
    setFormDetails((prev) => {
      return { ...prev, [e.target.name]: value };
    });
    console.log(formdetails);
  }

  return (
    <div
      className="flex flex-col  items-center px-[17px]  lg:w-[60%] mx-auto"
      id="Contact"
    >
      <h1 className="font-poppins font-semibold text-[32px] lg:text-[42px] w-full text-center mt-[34px] mb-[20px] text-[#f2f3f4]">
        Contact
      </h1>
      <p className="font-poppins font-normal text-[16px] w-full text-center text-[#b1b2b3] lg:max-w-[60%] lg:text-[16px]">
        Feel free to reach out to me for any questions or opportunities!
      </p>
      <form
        className="mt-[28px] p-[32px] bg-[#171721] bg-shadow gap-[12px] rounded-[16px] flex flex-col justify-between items-start max-w-[600px] w-[95%]"
        onSubmit={handleSubmit}
      >
        <h2 className="font-poppins text-[24px] text-start text-[#f2f3f4] font-semibold mb-[6px]">
          Email Me 🚀
        </h2>
        <input
          type="email"
          name="email"
          placeholder="Your Mail"
          onChange={handleChange}
          value={formdetails.email}
          className="px-[16px] py-[12px] rounded-[12px] bg-transparent placeholder:font-poppins placeholder:text-[18px] text-white/60 border-[1px] border-white/60 outline-none focus:border-[#854ce6] w-full"
        />
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formdetails.name}
          onChange={handleChange}
          className="px-[16px] py-[12px] rounded-[12px] bg-transparent placeholder:font-poppins placeholder:text-[18px] text-white/60 border-[1px] border-white/60 flex-1 outline-none focus:border-[#854ce6] w-full"
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          onChange={handleChange}
          value={formdetails.subject}
          className="px-[16px] py-[12px] rounded-[12px] bg-transparent placeholder:font-poppins placeholder:text-[18px] text-white/60 border-[1px] border-white/60 flex-1 outline-none focus:border-[#854ce6] w-full"
        />
        <textarea
          name="message"
          placeholder="Message"
          cols="22"
          rows="5"
          onChange={handleChange}
          value={formdetails.message}
          className="px-[16px] py-[12px] rounded-[12px] bg-transparent placeholder:font-poppins placeholder:text-[18px] text-white/60 border-[1px] border-white/60 flex-1 outline-none focus:border-[#854ce6] w-full"
        ></textarea>
        <button className="w-full px-[16px] py-[13px] rounded-[12px] font-poppins font-bold text-[18px] bg-gradient-to-r from-fuchsia-500 to-purple-500 text-[#f2f3f4]">
          Send
        </button>
      </form>
    </div>
  );
}
