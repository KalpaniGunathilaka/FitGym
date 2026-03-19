import { useState } from "react";
import { FaDumbbell, FaUsers, FaAppleAlt } from "react-icons/fa";

const servicesData = [
  {
    icon: <FaDumbbell />,
    title: "Personal Training",
    desc: "1-on-1 sessions with experts",
  },
  {
    icon: <FaUsers />,
    title: "Group Classes",
    desc: "Fun and energetic workouts",
  },
  {
    icon: <FaAppleAlt />,
    title: "Nutrition Plans",
    desc: "Customized diet plans",
  },
];

const Services = () => {
  const [search, setSearch] = useState("");

  // 🔍 FILTER LOGIC
  const filteredServices = servicesData.filter((service) =>
    service.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section id="services" className="py-24 bg-white dark:bg-black">

      <div className="px-8 mx-auto text-center max-w-7xl">

        <h2 className="mb-6 text-4xl font-bold dark:text-white">
          Our <span className="text-yellow-500">Services</span>
        </h2>

        {/* 🔍 SEARCH INPUT */}
        <input
          type="text"
          placeholder="Search services..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md px-4 py-2 mb-10 border rounded-lg outline-none focus:ring-2 focus:ring-yellow-500 dark:bg-gray-900 dark:text-white"
        />

        <div className="grid gap-10 md:grid-cols-3">

          {filteredServices.length > 0 ? (
            filteredServices.map((s, i) => (
              <div
                key={i}
                className="p-8 transition bg-gray-100 shadow-lg dark:bg-gray-900 rounded-xl hover:scale-105"
              >
                <div className="flex justify-center mb-4 text-4xl text-yellow-500">
                  {s.icon}
                </div>
                <h3 className="mb-2 text-xl font-semibold dark:text-white">
                  {s.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {s.desc}
                </p>
              </div>
            ))
          ) : (
            <p className="col-span-3 text-gray-500 dark:text-gray-400">
              No services found 😢
            </p>
          )}

        </div>

      </div>

    </section>
  );
};

export default Services;