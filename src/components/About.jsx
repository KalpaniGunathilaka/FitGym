import { motion } from "framer-motion";

const About = () => {
  const features = [
    "Modern Equipment",
    "Expert Trainers",
    "Group Classes",
    "Healthy Plans",
  ];

  return (
    <section id="about" className="py-24 bg-gray-100 dark:bg-black">

      <div className="grid items-center gap-12 px-8 mx-auto max-w-7xl md:grid-cols-2">

        {/* IMAGE */}
        <motion.img
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f"
          className="shadow-xl rounded-xl"
        />

        {/* TEXT */}
        <div>
          <h2 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white">
            About <span className="text-yellow-500">Our Gym</span>
          </h2>

          <p className="mb-6 text-gray-600 dark:text-gray-300">
            We provide a premium fitness experience with cutting-edge equipment,
            professional trainers, and a supportive environment.
          </p>

          {/* CARDS */}
          <div className="grid grid-cols-2 gap-6">

            {features.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-5 text-gray-800 transition bg-white border-t-4 border-yellow-500 rounded-lg shadow-md dark:bg-gray-900 dark:text-white hover:shadow-xl"
              >
                <h3 className="font-semibold">{item}</h3>
              </motion.div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default About;