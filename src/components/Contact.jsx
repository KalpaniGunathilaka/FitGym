import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { useState } from "react";

const Contact = () => {
  const [form,setForm] = useState({name:"",email:"",message:""});

  const handleChange = (e)=>{
    setForm({...form,[e.target.name]:e.target.value});
  };

  const handleSubmit = (e)=>{
    e.preventDefault();
    alert("Message sent 🚀");
  };

  return (
    <section id="contact" className="py-24 bg-gray-100 dark:bg-black">

      <div className="grid gap-12 px-8 mx-auto max-w-7xl md:grid-cols-2">

        {/* LEFT */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold dark:text-white">
            Contact <span className="text-yellow-500">Us</span>
          </h2>

          <p className="text-gray-600 dark:text-gray-400">
            Reach out to us for memberships or inquiries.
          </p>

          <div className="space-y-4">
            <p className="flex gap-3"><FaMapMarkerAlt/> Colombo, Sri Lanka</p>
            <p className="flex gap-3"><FaPhoneAlt/> +94 77 123 4567</p>
            <p className="flex gap-3"><FaEnvelope/> info@gym.com</p>
          </div>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-8 bg-white shadow-lg dark:bg-gray-900 rounded-xl">
          <input name="name" onChange={handleChange} placeholder="Name" className="p-3 border rounded"/>
          <input name="email" onChange={handleChange} placeholder="Email" className="p-3 border rounded"/>
          <textarea name="message" onChange={handleChange} placeholder="Message" className="p-3 border rounded"/>

          <button className="py-3 font-semibold bg-yellow-500 rounded hover:bg-yellow-600">
            Send Message
          </button>
        </form>

      </div>

    </section>
  );
};

export default Contact;