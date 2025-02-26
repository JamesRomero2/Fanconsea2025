import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import cover from "../assets/cover.jpg";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [message, setMessage] = useState("");
  const [captchaToken, setCaptchaToken] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const onSubmit = async (data) => {
    if (!captchaToken) {
      setMessage({ text: "Please complete the CAPTCHA.", type: "error" });
      return;
    }

    setIsLoading(true); // Show loading state
    setMessage(""); // Reset messages

    try {
      const response = await axios.post("https://your-api.com/contact", {
        ...data,
        recaptcha: captchaToken,
      });

      if (response.data.success) {
        setMessage({ text: "Message sent successfully!", type: "success" });
        reset(); // Clear form after submission
        setCaptchaToken(null);
      } else {
        setMessage({ text: "Failed to send message. Try again.", type: "error" });
      }
    } catch (error) {
      setMessage({ text: `Error sending message. ${error}`, type: "error" });
    } finally {
      setIsLoading(false); // Hide loading state
    }
  };

  return (
    <section className="py-5 px-6 bg-gradient-to-r from-cyan-100 to-cyan-300 text-gray-900" id="contact">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 bg-white/90 shadow-lg rounded-lg p-6">
        {/* Contact Form */}
        <div className="p-6">
          <h2 className="text-3xl font-extrabold text-cyan-700 mb-4">Contact Us</h2>
          <p className="text-gray-700 mb-6">Have questions or inquiries? Get in touch with us today!</p>

          {/* Contact Info */}
          <div className="text-left mb-6">
            <h3 className="text-lg font-bold text-cyan-800">Contact Information</h3>
            <p className="mt-2 text-gray-700">
              📧 Email:{" "}
              <a href="mailto:sales@fanconsea.com" className="text-cyan-600 font-semibold hover:underline">
                sales@fanconsea.com
              </a>
            </p>
          </div>

          {/* Success/Error Messages */}
          {message && (
            <p className={`text-sm font-semibold ${message.type === "success" ? "text-green-600" : "text-red-500"} mb-4`}>
              {message.text}
            </p>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Name Input */}
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium">Name</label>
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-cyan-500"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>

            {/* Email Input */}
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium">Email</label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: { value: /^\S+@\S+\.\S+$/, message: "Invalid email address" },
                })}
                className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-cyan-500"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            {/* Subject Input */}
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium">Subject</label>
              <input
                type="text"
                {...register("subject", { required: "Subject is required" })}
                className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-cyan-500"
              />
              {errors.subject && <p className="text-red-500 text-sm">{errors.subject.message}</p>}
            </div>

            {/* Message Input */}
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium">Message</label>
              <textarea
                {...register("message", { required: "Message is required" })}
                rows="4"
                className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-cyan-500"
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
            </div>

            {/* Google reCAPTCHA */}
            <ReCAPTCHA
              sitekey="YOUR_GOOGLE_RECAPTCHA_SITE_KEY"
              onChange={(token) => setCaptchaToken(token)}
            />

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full font-bold py-2 px-4 rounded-lg transition duration-300 ${
                isLoading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-cyan-700 text-white hover:bg-cyan-900"
              }`}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* Image Section */}
        <div className="hidden md:block">
          <img src={cover} alt="Contact Us" className="w-full h-full object-cover rounded-lg shadow-md" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
