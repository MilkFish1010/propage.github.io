import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "JavaScript Mastery",
          from_email: form.email,
          to_email: "sujata@jsmastery.pro",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <h3 className={styles.sectionHeadText}>『🌐』Contacts</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'><strong><span className='text-[#00FFFF]'>Facebook</span></strong></span>
            <p><a href="https://www.facebook.com/hobyacejerico.josol.52/">Hoby Ace Jerico S. Josol『🔗』</a></p>
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'><strong><span className='text-[#00FFFF]'>Tik</span><span className='text-[#FF2400]'>Tok</span></strong></span>
            <p><a href="https://www.tiktok.com/@alphamotivationwo?lang=en">AlphaMotivationWolf『🔗』</a></p>
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'><span className='text-[#FF2400]'><strong>My Email</strong></span></span>
            <p>hoby.josol1010@gmail.com</p>
          </label>
          <footer><strong>Special thanks to the<a href="https://github.com/adrianhajdin/project_3D_developer_portfolio"><span className="text-[#FF00FF]"> 『open-source page template』</span></a></strong></footer>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
