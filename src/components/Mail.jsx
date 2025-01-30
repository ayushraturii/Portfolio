import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "ayush_mail",
        "template_wi7yku8",
        formData,
        "-rNamYW7WuoUfrNyo"
      )
      .then(() => {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSuccess(false), 3000);
      })
      .catch(() => alert("Failed to send message"))
      .finally(() => setLoading(false));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-lg mx-auto p-8 rounded-2xl shadow-2xl border border-gray-700"
      style={{ background: "linear-gradient(135deg, #0a0a0a, #1a1a1a)" }}
    >
      <h2 className="text-4xl font-extrabold text-center mb-6 text-white">
        Let’s Connect! 🚀
      </h2>

      <form onSubmit={sendEmail} className="space-y-6">
        <motion.input
          whileFocus={{ scale: 1.05, boxShadow: "0px 0px 15px #4A90E2" }}
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full p-3 border border-gray-600 bg-transparent text-white rounded-lg shadow-md outline-none focus:ring-2 focus:ring-blue-400 transition-all"
          required
        />

        <motion.input
          whileFocus={{ scale: 1.05, boxShadow: "0px 0px 15px #E24A90" }}
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full p-3 border border-gray-600 bg-transparent text-white rounded-lg shadow-md outline-none focus:ring-2 focus:ring-pink-400 transition-all"
          required
        />

        <motion.textarea
          whileFocus={{ scale: 1.05, boxShadow: "0px 0px 15px #E2A44A" }}
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          placeholder="Your Message"
          className="w-full p-3 border border-gray-600 bg-transparent text-white rounded-lg shadow-md outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
          required
        />

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-3 rounded-lg shadow-xl hover:shadow-2xl transition-all"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </motion.button>

        {success && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-green-400 text-center font-semibold"
          >
            ✅ Message Sent Successfully!
          </motion.p>
        )}
      </form>
    </motion.div>
  );
};

export default ContactForm;
