<<<<<<< HEAD
import React from "react";

const CartSidebar = () => {
  const cartItems = [
    {
      id: 1,
      name: "Fortune Sunflower Oil",
      image: "https://placehold.co/80x80",
      price: 1450,
      qty: 1,
    },
    {
      id: 2,
      name: "Aashirvaad Atta",
      image: "https://placehold.co/80x80",
      price: 420,
      qty: 2,
    },
  ];

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <aside className="fixed z-999 top-0 right-0 h-full w-full max-w-[360px] border bg-white shadow-lg">

      {/* Header */}
      <div className="border-b p-5">
        <h3 className="text-xl font-bold text-[#0A2240] flex items-center gap-2">
          <i className="fa-solid fa-cart-shopping text-orange-500"></i>
          Your Cart
        </h3>

        <p className="text-sm text-gray-500 mt-1">
          {cartItems.length} Products
        </p>
      </div>

      {/* Items */}
      <div className="max-h-[420px] overflow-y-auto">

        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex gap-4 p-4 border-b"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 rounded-lg object-contain bg-gray-50"
            />

            <div className="flex-1">

              <h4 className="font-semibold text-sm line-clamp-2">
                {item.name}
              </h4>

              <p className="text-orange-500 font-bold mt-1">
                ₹{item.price}
              </p>

              <div className="flex items-center justify-between mt-2">

                <span className="text-sm">
                  Qty : {item.qty}
                </span>

                <button className="text-red-500 hover:text-red-700">
                  <i className="fa-solid fa-trash"></i>
                </button>

              </div>

            </div>
          </div>
        ))}

      </div>

      {/* Footer */}
      <div className="p-5">

        <div className="flex justify-between text-lg font-bold mb-5">
          <span>Total</span>
          <span className="text-orange-500">
            ₹{total}
          </span>
        </div>

        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold">
          <i className="fa-solid fa-bag-shopping mr-2"></i>
          Proceed to Checkout
        </button>

      </div>

    </aside>
  );
};

=======
import React from "react";

const CartSidebar = () => {
  const cartItems = [
    {
      id: 1,
      name: "Fortune Sunflower Oil",
      image: "https://placehold.co/80x80",
      price: 1450,
      qty: 1,
    },
    {
      id: 2,
      name: "Aashirvaad Atta",
      image: "https://placehold.co/80x80",
      price: 420,
      qty: 2,
    },
  ];

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <aside className="fixed z-999 top-0 right-0 h-full w-full max-w-[360px] border bg-white shadow-lg">

      {/* Header */}
      <div className="border-b p-5">
        <h3 className="text-xl font-bold text-[#0A2240] flex items-center gap-2">
          <i className="fa-solid fa-cart-shopping text-orange-500"></i>
          Your Cart
        </h3>

        <p className="text-sm text-gray-500 mt-1">
          {cartItems.length} Products
        </p>
      </div>

      {/* Items */}
      <div className="max-h-[420px] overflow-y-auto">

        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex gap-4 p-4 border-b"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 rounded-lg object-contain bg-gray-50"
            />

            <div className="flex-1">

              <h4 className="font-semibold text-sm line-clamp-2">
                {item.name}
              </h4>

              <p className="text-orange-500 font-bold mt-1">
                ₹{item.price}
              </p>

              <div className="flex items-center justify-between mt-2">

                <span className="text-sm">
                  Qty : {item.qty}
                </span>

                <button className="text-red-500 hover:text-red-700">
                  <i className="fa-solid fa-trash"></i>
                </button>

              </div>

            </div>
          </div>
        ))}

      </div>

      {/* Footer */}
      <div className="p-5">

        <div className="flex justify-between text-lg font-bold mb-5">
          <span>Total</span>
          <span className="text-orange-500">
            ₹{total}
          </span>
        </div>

        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold">
          <i className="fa-solid fa-bag-shopping mr-2"></i>
          Proceed to Checkout
        </button>

      </div>

    </aside>
  );
};

>>>>>>> 8bb1ce80fe79c61fd926da9267d632ab125e0cda
export default CartSidebar;