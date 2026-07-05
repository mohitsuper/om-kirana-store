<<<<<<< HEAD

const CategoryCard = ({ item }) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow hover:shadow-lg transition-all duration-300 p-5 flex flex-col items-center cursor-pointer group">
      <div className="w-24 h-24 flex items-center justify-center">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-contain group-hover:scale-110 transition duration-300"
        />
      </div>

      <h3 className="mt-4 text-[15px] font-semibold text-gray-800">
        {item.name}
      </h3>
    </div>
  );
};

=======

const CategoryCard = ({ item }) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow hover:shadow-lg transition-all duration-300 p-5 flex flex-col items-center cursor-pointer group">
      <div className="w-24 h-24 flex items-center justify-center">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-contain group-hover:scale-110 transition duration-300"
        />
      </div>

      <h3 className="mt-4 text-[15px] font-semibold text-gray-800">
        {item.name}
      </h3>
    </div>
  );
};

>>>>>>> 8bb1ce80fe79c61fd926da9267d632ab125e0cda
export default CategoryCard;