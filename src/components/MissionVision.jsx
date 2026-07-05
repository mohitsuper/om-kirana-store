<<<<<<< HEAD
import React from "react";

const data = [
  {
    title: "OUR MISSION",
    icon: "fa-bullseye",
    iconColor: "text-orange-500",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-100",
    description:
      "To provide high-quality grocery products in bulk at affordable prices and ensure complete customer satisfaction through reliable service and timely delivery.",
  },
  {
    title: "OUR VISION",
    icon: "fa-eye",
    iconColor: "text-[#1E3A8A]",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-100",
    description:
      "To become the most trusted and preferred wholesale grocery supplier across India, known for quality, reliability and long-term customer relationships.",
  },
];

const MissionVision = () => {
  return (
    <section className="py-8 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6">
          {data.map((item, index) => (
            <div
              key={index}
              className={`${item.bgColor} ${item.borderColor} border rounded-xl p-3 sm:p-6 hover:shadow-lg transition duration-300`}
            >
              <div className="flex items-center gap-5">
                {/* Icon */}
                <div className="sm:w-20 sm:h-20 w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0">
                  <i
                    className={`fa-solid ${item.icon} text-3xl sm:text-5xl ${item.iconColor}`}
                  ></i>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-sm font-bold tracking-widest text-gray-800 uppercase mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-gray-600 sm:text-sm sm:leading-7">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

=======
import React from "react";

const data = [
  {
    title: "OUR MISSION",
    icon: "fa-bullseye",
    iconColor: "text-orange-500",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-100",
    description:
      "To provide high-quality grocery products in bulk at affordable prices and ensure complete customer satisfaction through reliable service and timely delivery.",
  },
  {
    title: "OUR VISION",
    icon: "fa-eye",
    iconColor: "text-[#1E3A8A]",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-100",
    description:
      "To become the most trusted and preferred wholesale grocery supplier across India, known for quality, reliability and long-term customer relationships.",
  },
];

const MissionVision = () => {
  return (
    <section className="py-8 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6">
          {data.map((item, index) => (
            <div
              key={index}
              className={`${item.bgColor} ${item.borderColor} border rounded-xl p-3 sm:p-6 hover:shadow-lg transition duration-300`}
            >
              <div className="flex items-center gap-5">
                {/* Icon */}
                <div className="sm:w-20 sm:h-20 w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0">
                  <i
                    className={`fa-solid ${item.icon} text-3xl sm:text-5xl ${item.iconColor}`}
                  ></i>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-sm font-bold tracking-widest text-gray-800 uppercase mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-gray-600 sm:text-sm sm:leading-7">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

>>>>>>> 8bb1ce80fe79c61fd926da9267d632ab125e0cda
export default MissionVision;