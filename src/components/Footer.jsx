import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="pt-20 pb-10 text-gray-300 bg-black">

      <div className="grid gap-12 px-8 mx-auto max-w-7xl md:grid-cols-4">

        {/* BRAND */}
        <div>
          <h2 className="mb-4 text-3xl font-bold text-yellow-500">
            FitGym
          </h2>
          <p className="leading-relaxed text-gray-400">
            Your ultimate fitness destination. Build strength, improve health,
            and transform your lifestyle with us.
          </p>

          <div className="flex gap-4 mt-6 text-lg">
            <a className="cursor-pointer hover:text-yellow-500"><FaFacebookF /></a>
            <a className="cursor-pointer hover:text-yellow-500"><FaInstagram /></a>
            <a className="cursor-pointer hover:text-yellow-500"><FaTwitter /></a>
            <a className="cursor-pointer hover:text-yellow-500"><FaYoutube /></a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="mb-4 text-xl font-semibold text-white">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-yellow-500">Home</a></li>
            <li><a href="#about" className="hover:text-yellow-500">About</a></li>
            <li><a href="#services" className="hover:text-yellow-500">Services</a></li>
            <li><a href="#contact" className="hover:text-yellow-500">Contact</a></li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="mb-4 text-xl font-semibold text-white">
            Our Services
          </h3>
          <ul className="space-y-2">
            <li className="cursor-pointer hover:text-yellow-500">Personal Training</li>
            <li className="cursor-pointer hover:text-yellow-500">Group Classes</li>
            <li className="cursor-pointer hover:text-yellow-500">Nutrition Plans</li>
            <li className="cursor-pointer hover:text-yellow-500">Fitness Coaching</li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h3 className="mb-4 text-xl font-semibold text-white">
            Newsletter
          </h3>
          <p className="mb-4 text-gray-400">
            Subscribe to get fitness tips and offers.
          </p>

          <div className="flex">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 text-white bg-gray-800 border-none rounded-l outline-none"
            />
            <button className="px-4 bg-yellow-500 rounded-r hover:bg-yellow-600">
              Subscribe
            </button>
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="pt-6 mt-12 text-sm text-center text-gray-500 border-t border-gray-800">
        <p>© 2026 FitGym. All Rights Reserved.</p>
      </div>

    </footer>
  );
};

export default Footer;