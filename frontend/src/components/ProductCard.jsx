import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
    const navigate = useNavigate();

  return (
    <div className="relative rounded-xl border border-gray-200 bg-white p-3 shadow-sm hover:shadow-lg transition-all">

      {/* Badge */}
      <span className="absolute z-99 left-2 top-2 rounded-full bg-orange-500 px-2 py-1 text-[10px] font-semibold text-white">
        {item.badge}
      </span>

      {/* Image */}
      <div className="h-36 flex items-center justify-center">
        <img
          src={item.image}
          alt={item.name}
          className="h-full object-contain transition duration-300 hover:scale-105"
        />
      </div>

      {/* Name */}
      <h3 className="mt-3 text-sm font-semibold text-gray-800 line-clamp-2 text-center">
        {item.name.length > 20 ? item.name.slice(0, 20) + "..." : item.name}
      </h3>

      {/* Price */}
      <p className="mt-2 text-center text-xl font-bold text-orange-500">
        ₹{item.price.toLocaleString()}
      </p>

      {/* Min Order */}
      <p className="mt-1 text-center text-xs text-gray-500">
        Min. Order : {item.minOrder}
      </p>

      {/* Button */}
      <button
      onClick={() => navigate(`/product/${item.id}`)}
      className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-[#0A2240] py-2 text-sm font-semibold text-white transition hover:bg-orange-500"
    >
      <i className="fa-solid fa-eye"></i>
      View Details
    </button>
    </div>
  );
};

export default ProductCard;