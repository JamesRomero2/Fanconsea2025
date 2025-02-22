import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Your message has been sent!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };
  return (
    <section className="py-12 px-6 bg-gradient-to-r from-cyan-100 to-cyan-300 text-gray-900" id="contact">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 bg-white/90 shadow-lg rounded-lg p-6">

        <div className="p-6">
          <h2 className="text-3xl font-extrabold text-cyan-700 mb-4">Contact Us</h2>
          <p className="text-gray-700 mb-6">Have questions or inquiries? Get in touch with us today!</p>
          
          <div className="text-left mb-6">
            <h3 className="text-lg font-bold text-cyan-800">Contact Information</h3>
            <p className="mt-2 text-gray-700">📧 Email: <a href="mailto:sales@fanconsea.com" className="text-cyan-600 font-semibold hover:underline">sales@fanconsea.com</a></p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium">Name</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-cyan-500"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 font-medium">Email</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-cyan-500"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 font-medium">Subject</label>
              <input 
                type="text" 
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-cyan-500"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 font-medium">Message</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-cyan-500"
                required
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full bg-cyan-700 text-white font-bold py-2 px-4 rounded-lg hover:bg-cyan-900 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="hidden md:block">
          <img 
            src={''} 
            alt="Contact Us" 
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>

      </div>
    </section>
  )
}

export default Contact