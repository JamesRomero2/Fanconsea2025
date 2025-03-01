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

  const [message, setMessage] = useState(null);
  const [captchaToken, setCaptchaToken] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleRecaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  const handleRecaptchaExpired = () => {
    setCaptchaToken(null);
  };

  const onSubmit = async (data) => {
    if (!captchaToken) {
      setMessage({ text: "Please complete the CAPTCHA.", type: "error" });
      return;
    }

    setIsLoading(true);
    setMessage(null);

    try {
      const response = await axios.post("https://your-api.com/contact", {
        ...data,
        recaptcha: captchaToken,
      });

      if (response.data.success) {
        setMessage({ text: "Message sent successfully!", type: "success" });
        reset();
        setCaptchaToken(null);
      } else {
        setMessage({ text: "Failed to send message. Try again.", type: "error" });
      }
    } catch (error) {
      console.error(error);
      setMessage({ text: "Something went wrong. Please try again later.", type: "error" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-6 px-4 bg-gradient-to-r from-cyan-100 to-cyan-300 text-gray-900" id="contact">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white/90 shadow-lg rounded-lg p-6">
        
        {/* Contact Form Section */}
        <div className="p-6">
          <h2 className="text-3xl font-extrabold text-cyan-700 mb-4 text-center lg:text-left">Contact Us</h2>
          <p className="text-gray-700 mb-6 text-center lg:text-left">Have questions or inquiries? Get in touch with us today!</p>

          {/* Contact Information */}
          <div className="text-center lg:text-left mb-6">
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
            <p className={`text-center text-sm font-semibold ${message.type === "success" ? "text-green-600" : "text-red-500"} mb-4`}>
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
                aria-invalid={errors.name ? "true" : "false"}
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
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email address",
                  },
                })}
                className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-cyan-500"
                aria-invalid={errors.email ? "true" : "false"}
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
                aria-invalid={errors.subject ? "true" : "false"}
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
                aria-invalid={errors.message ? "true" : "false"}
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
            </div>

            {/* Google reCAPTCHA */}
            <div className="flex justify-center">
              <ReCAPTCHA
                sitekey="6LcTwOUqAAAAAO4UNcY-Qf8GQws7OIADkl9LYYUo"
                onChange={handleRecaptchaChange}
                onExpired={handleRecaptchaExpired}
              />
            </div>

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
        <div className="hidden lg:flex items-center justify-center">
          <img src={cover} alt="Contact Us" className="w-full h-full object-cover rounded-lg shadow-md" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
