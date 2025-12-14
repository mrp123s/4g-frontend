import React, { useState } from 'react';
import { Star, ChevronRight, ShoppingBag, Sparkles, ChefHat } from 'lucide-react';
import CMomoImage from "../assets/4g/CMomo.jpeg";
import cocalaImage from "../assets/4g/cocala.jpg";

// Mock Data for Menu Items
const menuCategories = [
  {
    name: "Nepali Specials",
    icon: <ChefHat className="w-5 h-5" />,
    description: "Experience the heart of Nepali cuisine with our signature dishes.",
    items: [
      {
        id: 1,
        name: "Signature Thali",
        description: "A complete platter with rice, daal, seasonal vegetables, curry, and pickle.",
        price: "₹399",
        image: CMomoImage,
        rating: 4.8,
        popular: true,
        category: "main-course"
      },
      {
        id: 2,
        name: "Chicken Mo:Mo",
        description: "Steamed dumplings filled with juicy minced chicken and aromatic spices.",
        price: "₹220",
        image: CMomoImage,
        rating: 4.7,
        popular: true,
        category: "appetizer"
      },
      {
        id: 3,
        name: "Veg Chaumin",
        description: "Stir-fried noodles with fresh seasonal vegetables and savory sauce.",
        price: "₹180",
        image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=800&q=80",
        rating: 4.5,
        popular: false,
        category: "noodles"
      },
      {
        id: 4,
        name: "Mutton Sekuwa",
        description: "Grilled spiced mutton pieces, a classic Nepali appetizer.",
        price: "₹350",
        image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w-800&q=80",
        rating: 4.6,
        popular: true,
        category: "grilled"
      },
    ]
  },
  {
    name: "Beverages & Desserts",
    icon: "🍹",
    description: "Quench your thirst and satisfy your sweet tooth.",
    items: [
      {
        id: 5,
        name: "Coca-Cola",
        description: "Chilled bottle of Coca-Cola, perfect with any meal.",
        price: "₹70",
        image: cocalaImage,
        rating: 4.9,
        popular: false,
        category: "beverage"
      },
      {
        id: 6,
        name: "Masala Milk Tea",
        description: "Aromatic black tea brewed with milk and traditional spices.",
        price: "₹90",
        image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800&q=80",
        rating: 4.7,
        popular: true,
        category: "beverage"
      },
      {
        id: 7,
        name: "Gajar Halwa",
        description: "Sweet carrot pudding slow-cooked with milk, sugar, and ghee.",
        price: "₹150",
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&q=80",
        rating: 4.6,
        popular: false,
        category: "dessert"
      },
    ]
  },
];

const MenuSection = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Helper for star ratings
  const StarRating = ({ rating }) => (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 transition-all duration-300 ${
            i < Math.floor(rating) 
              ? 'text-amber-500 fill-amber-500 drop-shadow-sm' 
              : 'text-gray-200'
          }`}
          fill={i < Math.floor(rating) ? 'currentColor' : 'none'}
          strokeWidth={i < Math.floor(rating) ? 0 : 1.5}
        />
      ))}
      <span className="ml-2 text-sm font-medium text-gray-700">{rating.toFixed(1)}</span>
    </div>
  );

  const CategoryFilter = () => (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      <button
        onClick={() => setSelectedCategory("all")}
        className={`px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 flex items-center gap-2 ${
          selectedCategory === "all"
            ? "bg-gradient-to-r from-red-600 to-orange-500 text-white shadow-lg shadow-red-200"
            : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
        }`}
      >
        <Sparkles className="w-4 h-4" />
        All Items
      </button>
      {["appetizer", "main-course", "beverage", "dessert", "noodles", "grilled"].map((cat) => (
        <button
          key={cat}
          onClick={() => setSelectedCategory(cat)}
          className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 capitalize ${
            selectedCategory === cat
              ? "bg-red-100 text-red-700 border border-red-200"
              : "text-gray-600 hover:text-red-600 hover:bg-red-50"
          }`}
        >
          {cat.replace("-", " ")}
        </button>
      ))}
    </div>
  );

  const filteredItems = selectedCategory === "all" 
    ? menuCategories.flatMap(cat => cat.items)
    : menuCategories.flatMap(cat => cat.items.filter(item => item.category === selectedCategory));

  return (
    <section 
      id="menu-section" 
      className="relative py-20 md:py-28 bg-gradient-to-b from-white via-rose-50/30 to-white overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-red-100/20 to-orange-100/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-amber-100/20 to-orange-100/20 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-50 to-orange-50 rounded-full mb-6 border border-red-100">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-red-600 tracking-wider">
              DELICIOUS SELECTION
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Discover Our
            <span className="relative inline-block ml-4">
              <span className="relative z-10 bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 bg-clip-text text-transparent">
                Exquisite Menu
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-3 bg-red-100/60 rounded-full -z-0"></div>
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            From traditional Nepali thalis to popular street foods and refreshing beverages, 
            each dish is crafted with authentic flavors and premium ingredients.
          </p>
        </div>

        {/* Category Filter */}
        <CategoryFilter />

        {/* Menu Categories */}
        <div className="space-y-20">
          {menuCategories.map((category) => (
            <div key={category.name} className="relative">
              {/* Category Header */}
              <div className="flex items-center justify-between mb-12">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-red-100 to-orange-100 rounded-2xl">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900">{category.name}</h3>
                    <p className="text-gray-600 mt-1">{category.description}</p>
                  </div>
                </div>
                <div className="hidden md:block text-sm font-medium text-red-600">
                  {category.items.length} items
                </div>
              </div>

              {/* Menu Items Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.items.map((item) => (
                  <div
                    key={item.id}
                    className="group relative bg-white rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02]"
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    {/* Popular Badge */}
                    {item.popular && (
                      <div className="absolute top-4 left-4 z-10">
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-bold rounded-full shadow-lg">
                          <Sparkles className="w-3 h-3" />
                          Popular
                        </span>
                      </div>
                    )}

                    {/* Item Image Container */}
                    <div className="relative h-56 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                      
                      {/* Price Tag */}
                      <div className="absolute bottom-4 right-4">
                        <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-xl">
                          <span className="text-xl font-bold bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
                            {item.price}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Item Details */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                          {item.name}
                        </h4>
                        <StarRating rating={item.rating} />
                      </div>
                      
                      <p className="text-gray-600 text-sm mb-6 leading-relaxed line-clamp-2">
                        {item.description}
                      </p>

                      {/* Add to Cart Button */}
                      <button
                        className={`w-full flex items-center justify-center gap-3 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                          hoveredItem === item.id
                            ? "bg-gradient-to-r from-red-600 to-orange-500 text-white shadow-lg shadow-red-200"
                            : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        <ShoppingBag className={`w-4 h-4 transition-transform duration-300 ${
                          hoveredItem === item.id ? "scale-110" : ""
                        }`} />
                        Add to Cart
                        <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${
                          hoveredItem === item.id ? "translate-x-1" : ""
                        }`} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Featured Item Banner */}
        <div className="mt-20 bg-gradient-to-r from-red-50 via-orange-50 to-amber-50 rounded-3xl overflow-hidden border border-red-100">
          <div className="grid md:grid-cols-2 items-center gap-8 p-8 md:p-12">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6 shadow-sm">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-sm font-semibold text-red-600">CHEF'S SPECIAL</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Try Our Award-Winning
                <span className="block text-red-600">Chicken Mo:Mo</span>
              </h3>
              <p className="text-gray-600 mb-6">
                Voted best momos in the city! Our secret recipe passed down through generations.
              </p>
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Order Now
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            <div className="relative">
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={CMomoImage}
                  alt="Chef's Special Mo:Mo"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600">4.8</div>
                  <StarRating rating={4.8} />
                  <div className="text-xs text-gray-500 mt-1">Average Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* View Full Menu CTA */}
        <div className="text-center mt-16">
          <button className="group inline-flex items-center gap-3 px-10 py-5 bg-white border-2 border-red-200 text-gray-900 rounded-full font-bold text-lg shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:border-red-300">
            <span>View Complete Menu</span>
            <div className="relative">
              <ChevronRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-2" />
              <ChevronRight className="absolute top-0 left-0 w-6 h-6 opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
            </div>
          </button>
          <p className="mt-4 text-gray-500 text-sm">
            Over 50+ delicious items to choose from
          </p>
        </div>

      </div>
    </section>
  );
};

export default MenuSection;