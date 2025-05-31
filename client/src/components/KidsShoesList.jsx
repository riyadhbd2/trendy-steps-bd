import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const KidsShoesList = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: "$99.99",
      image: "https://and1.com/cdn/shop/files/and1_prospect_men_s_and_women_s_red_basketball_shoe_right_facing_1600x.jpg?v=1691069170",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Smart Watch",
      price: "$199.99",
      image: "https://and1.com/cdn/shop/files/and1_prospect_men_s_and_women_s_red_basketball_shoe_right_facing_1600x.jpg?v=1691069170",
      rating: 4.2,
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      price: "$79.99",
      image: "https://and1.com/cdn/shop/files/and1_prospect_men_s_and_women_s_red_basketball_shoe_right_facing_1600x.jpg?v=1691069170",
      rating: 4.7,
    },
    {
      id: 4,
      name: "Laptop Backpack",
      price: "$49.99",
      image: "https://and1.com/cdn/shop/files/and1_prospect_men_s_and_women_s_red_basketball_shoe_right_facing_1600x.jpg?v=1691069170",
      rating: 4.3,
    },
    {
      id: 5,
      name: "Wireless Mouse",
      price: "$29.99",
      image: "https://and1.com/cdn/shop/files/and1_prospect_men_s_and_women_s_red_basketball_shoe_right_facing_1600x.jpg?v=1691069170",
      rating: 4.1,
    },
    {
      id: 6,
      name: "Portable Charger",
      price: "$39.99",
      image: "https://and1.com/cdn/shop/files/and1_prospect_men_s_and_women_s_red_basketball_shoe_right_facing_1600x.jpg?v=1691069170",
      rating: 4.0,
    },
    {
      id: 7,
      name: "Fitness Tracker",
      price: "$59.99",
      image: "https://and1.com/cdn/shop/files/and1_prospect_men_s_and_women_s_red_basketball_shoe_right_facing_1600x.jpg?v=1691069170",
      rating: 4.4,
    },
    {
      id: 8,
      name: "Gaming Keyboard",
      price: "$89.99",
      image: "https://and1.com/cdn/shop/files/and1_prospect_men_s_and_women_s_red_basketball_shoe_right_facing_1600x.jpg?v=1691069170",
      rating: 4.6,
    },
  ];

  const visibleProducts = 5; // Show 5 products at a time
  const totalProducts = products.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 > totalProducts - visibleProducts ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalProducts - visibleProducts : prevIndex - 1
    );
  };

  // Get the current products to display
  const visibleItems = products.slice(
    currentIndex,
    currentIndex + visibleProducts
  );

  return (
    <div className="relative mx-auto mt-5 px-4 sm:px-6 lg:px-20 py-5">
      <h2 className="text-3xl font-bold mb-8">Kids Collections
      </h2>

      <div className="relative overflow-hidden">
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none"
          aria-label="Previous"
        >
          <FiChevronLeft className="w-6 h-6 text-gray-700" />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {visibleItems.map((product) => (
            <div key={product.id} className="flex-shrink-0">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 flex-grow">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {product.name}
                    </h3>
                    <span className="text-gray-600">{product.price}</span>
                  </div>
                  <div className="mt-2 flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="text-xs text-gray-500 ml-1">
                      ({product.rating})
                    </span>
                  </div>
                </div>
                <button className="mt-auto mx-4 mb-4 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors w-[calc(100%-2rem)]">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none"
          aria-label="Next"
        >
          <FiChevronRight className="w-6 h-6 text-gray-700" />
        </button>
      </div>
    </div>
  );
};

export default KidsShoesList;
