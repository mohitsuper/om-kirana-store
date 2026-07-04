const BrandCard = ({ item }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 h-28 flex items-center justify-center p-5 cursor-pointer">
      <img
        src={item.logo}
        alt={item.name}
        className="max-h-14 object-contain hover:scale-105 transition"
      />
    </div>
  );
};

export default BrandCard;