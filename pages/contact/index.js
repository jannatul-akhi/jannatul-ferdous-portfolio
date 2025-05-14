import Circles from "../../components/Circles";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { toast } from "sonner";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submitted");
    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("subject", form.subject);
    formData.append("message", form.message);
    console.log(formData)

    try {
      const scriptURL =
        "https://script.google.com/macros/s/AKfycbwjAM5toCgVT8vpVQ8kgOQ9EgaXTLPCpbkI8Ee65280Xc_GblobHCnFGkMUwzhj6lg-/exec";

      const response = await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });

      console.log("Success");
      toast.success("Thanks! I’ll get back to you soon.");
      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // if (response.ok) {
      //   console.log("Success");
      //   toast.success("Thanks! I’ll get back to you soon.");
      //   setForm({
      //     name: "",
      //     email: "",
      //     subject: "",
      //     message: "",
      //   });
      // } else {
      //   console.error("Failed to send message.");
      //   toast.error("Oops! Something went wrong.");
      // }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Oops! Something went wrong.");
    }
  };

  return (
    <div className="h-full bg-primary/30">
      <Circles />
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px]">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Lets <span className="text-accent">connect.</span>
          </motion.h2>
          <motion.form
            onSubmit={handleSubmit}
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
          >
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                placeholder="name"
                className="input"
                name="name"
                value={form.name}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="email"
                className="input"
                name="email"
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <input
              type="text"
              placeholder="subject"
              className="input"
              name="subject"
              value={form.subject}
              onChange={handleChange}
            />
            <textarea
              placeholder="message"
              className="textarea"
              name="message"
              value={form.message}
              onChange={handleChange}
            ></textarea>
            <button
              type="submit"
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Lets talk
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
/*
Deployment ID: AKfycby-MBVspdg8syGIz9t_YatimYM-wGvCXVdqlpf0ebieo7t2V8Im6SYBxWVCSPisKROE
Web app URL: https://script.google.com/macros/s/AKfycby-MBVspdg8syGIz9t_YatimYM-wGvCXVdqlpf0ebieo7t2V8Im6SYBxWVCSPisKROE/exec
*/
