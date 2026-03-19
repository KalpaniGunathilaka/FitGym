import { motion } from "framer-motion";

const Hero = ({ dark }) => {
  const bg =
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438";

  return (
    <section
      className="relative flex items-center justify-center h-screen bg-center bg-cover"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative px-6 text-center text-white">

        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-extrabold leading-tight md:text-7xl"
        >
          Build Your <span className="text-yellow-500">Dream Body</span>
        </motion.h1>

        <p className="max-w-xl mx-auto mt-6 text-lg text-gray-300">
          Transform your life with expert trainers, modern equipment, and
          a motivating community.
        </p>

        <div className="flex justify-center gap-4 mt-8">
          <button className="px-8 py-3 font-semibold transition bg-yellow-500 rounded-lg hover:scale-105">
            Join Now
          </button>
          <button className="px-8 py-3 transition border border-yellow-500 rounded-lg hover:bg-yellow-500 hover:text-black">
            Explore
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mt-12 text-center">
          <div>
            <h3 className="text-3xl font-bold text-yellow-500">500+</h3>
            <p className="text-sm">Members</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-yellow-500">50+</h3>
            <p className="text-sm">Trainers</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-yellow-500">10+</h3>
            <p className="text-sm">Years Experience</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;