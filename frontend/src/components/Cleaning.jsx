import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../redux/slices/cartSlice";


import { useState } from "react";

const Cleaning = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  

  const categories = ["All", "Home Cleaning", "Deep Cleaning", "Kitchen", "Bathroom", "Sofa & Carpet"];

  const services = [
    {
      id: 1,
      name: "1 BHK Home Cleaning",
      category: "Home Cleaning",
      price: 999,
      duration: "2-3 hours",
      description: "Complete cleaning of 1 BHK including dusting, mopping, and bathroom cleaning",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop",
      rating: 4.8,
      reviews: 2341,
    },
    {
      id: 2,
      name: "2 BHK Home Cleaning",
      category: "Home Cleaning",
      price: 1499,
      duration: "3-4 hours",
      description: "Complete cleaning of 2 BHK with detailed dusting and floor cleaning",
      image: "https://images.unsplash.com/photo-1527515545081-5db817172677?w=400&h=300&fit=crop",
      rating: 4.7,
      reviews: 1876,
    },
    {
      id: 3,
      name: "3 BHK Home Cleaning",
      category: "Home Cleaning",
      price: 1999,
      duration: "4-5 hours",
      description: "Thorough cleaning of 3 BHK apartment with all rooms and balconies",
      image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=400&h=300&fit=crop",
      rating: 4.9,
      reviews: 1523,
    },
    {
      id: 4,
      name: "Deep Home Cleaning",
      category: "Deep Cleaning",
      price: 2999,
      duration: "5-6 hours",
      description: "Intensive deep cleaning including behind furniture, ceiling fans, and windows",
      image: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=400&h=300&fit=crop",
      rating: 4.9,
      reviews: 987,
    },
    {
      id: 5,
      name: "Move-in/Move-out Cleaning",
      category: "Deep Cleaning",
      price: 3499,
      duration: "6-8 hours",
      description: "Complete property cleaning for moving in or out with detailed attention",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=300&fit=crop",
      rating: 4.8,
      reviews: 654,
    },
    {
      id: 6,
      name: "Post Construction Cleaning",
      category: "Deep Cleaning",
      price: 4999,
      duration: "8-10 hours",
      description: "Heavy duty cleaning after renovation or construction work",
      image: "https://images.unsplash.com/photo-1585421514738-01798e348b17?w=400&h=300&fit=crop",
      rating: 4.7,
      reviews: 432,
    },
    {
      id: 7,
      name: "Kitchen Deep Cleaning",
      category: "Kitchen",
      price: 1299,
      duration: "2-3 hours",
      description: "Complete kitchen cleaning including chimney, cabinets, and appliances",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
      rating: 4.8,
      reviews: 1234,
    },
    {
      id: 8,
      name: "Chimney Cleaning",
      category: "Kitchen",
      price: 599,
      duration: "1 hour",
      description: "Professional chimney cleaning with degreasing and filter wash",
      image: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=400&h=300&fit=crop",
      rating: 4.6,
      reviews: 876,
    },
    {
      id: 9,
      name: "Gas Stove Cleaning",
      category: "Kitchen",
      price: 399,
      duration: "45 mins",
      description: "Deep cleaning of gas stove with burner and grate cleaning",
      image: "https://images.unsplash.com/photo-1585351650024-67f9dc61a9c2?w=400&h=300&fit=crop",
      rating: 4.7,
      reviews: 543,
    },
    {
      id: 10,
      name: "Bathroom Deep Cleaning",
      category: "Bathroom",
      price: 699,
      duration: "1-2 hours",
      description: "Thorough bathroom cleaning with tile scrubbing and fixture polishing",
      image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&h=300&fit=crop",
      rating: 4.8,
      reviews: 1567,
    },
    {
      id: 11,
      name: "Bathroom + Kitchen Combo",
      category: "Bathroom",
      price: 1799,
      duration: "3-4 hours",
      description: "Complete cleaning of bathroom and kitchen at discounted combo price",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop",
      rating: 4.9,
      reviews: 789,
    },
    {
      id: 12,
      name: "Sofa Cleaning (3 Seater)",
      category: "Sofa & Carpet",
      price: 799,
      duration: "1-2 hours",
      description: "Deep vacuuming and shampooing of 3 seater sofa",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop",
      rating: 4.7,
      reviews: 987,
    },
    {
      id: 13,
      name: "Carpet Cleaning (per 100 sqft)",
      category: "Sofa & Carpet",
      price: 499,
      duration: "1-2 hours",
      description: "Professional carpet shampooing and deep cleaning",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      rating: 4.6,
      reviews: 654,
    },
    {
      id: 14,
      name: "Mattress Cleaning",
      category: "Sofa & Carpet",
      price: 599,
      duration: "1 hour",
      description: "Deep cleaning and sanitization of mattress with anti-allergen treatment",
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop",
      rating: 4.8,
      reviews: 876,
    },
  ];

  const filteredServices =
    selectedCategory === "All"
      ? services
      : services.filter((service) => service.category === selectedCategory);

  const dispatch = useDispatch();
const cart = useSelector(state => state.cart.items);
const totalPrice = useSelector(state => state.cart.totalPrice);


  const isInCart = (serviceId) => {
    return cart.some((item) => item.id === serviceId);
  };

  

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 relative overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-emerald-200/40 to-teal-200/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-gradient-to-br from-green-200/40 to-emerald-200/40 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute -bottom-40 right-1/3 w-72 h-72 bg-gradient-to-br from-teal-200/40 to-cyan-200/40 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-white/20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center cursor-pointer">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-200/50">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <span className="text-2xl font-bold text-gray-900">Do<span className="text-emerald-600">-IT</span></span>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <a href="/" className="text-gray-600 hover:text-emerald-600 font-medium transition-colors">Home</a>
              <a href="#services" className="text-emerald-600 font-medium">Services</a>
              <a href="#about" className="text-gray-600 hover:text-emerald-600 font-medium transition-colors">About</a>
              <a href="#contact" className="text-gray-600 hover:text-emerald-600 font-medium transition-colors">Contact</a>
            </nav>

            <div className="flex items-center gap-4">
              <button className="relative p-2 text-gray-600 hover:text-emerald-600 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs rounded-full flex items-center justify-center font-medium">
                    {cart.length}
                  </span>
                )}
              </button>
              <button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-2.5 rounded-full font-medium hover:shadow-lg hover:shadow-emerald-200/50 transition-all duration-300 hover:scale-[1.02]">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100/80 backdrop-blur-sm rounded-full text-emerald-700 text-sm font-medium mb-6">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                Professional Cleaning Services
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Sparkling Clean
                <span className="block bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Homes & Spaces
                </span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-lg">
                Professional cleaning services at your doorstep. Our trained experts use eco-friendly products to make your space spotless and hygienic.
              </p>
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Eco-Friendly Products</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">On-Time Service</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-200/50 to-teal-200/50 rounded-3xl blur-2xl"></div>
              <div className="relative backdrop-blur-sm bg-white/30 rounded-3xl p-3 border border-white/40 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=450&fit=crop"
                  alt="Professional Cleaning Service"
                  className="w-full h-80 object-cover rounded-2xl"
                />
                <div className="absolute -bottom-6 -left-6 backdrop-blur-xl bg-white/80 rounded-2xl p-4 shadow-xl border border-white/40">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">50K+</p>
                      <p className="text-sm text-gray-500">Happy Customers</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 backdrop-blur-xl bg-white/80 rounded-2xl p-3 shadow-xl border border-white/40">
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-500 text-lg">★</span>
                    <span className="font-bold text-gray-900">4.9</span>
                    <span className="text-gray-500 text-sm">(12k+)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Cleaning Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From regular home cleaning to deep cleaning, we have got all your cleaning needs covered
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-200/50"
                    : "bg-white/70 backdrop-blur-sm text-gray-600 hover:bg-emerald-50 border border-gray-200/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Services Grid */}
            <div className="lg:col-span-2">
              <div className="grid sm:grid-cols-2 gap-6">
                {filteredServices.map((service) => (
                  <div
                    key={service.id}
                    className="group backdrop-blur-xl bg-white/70 rounded-2xl overflow-hidden border border-white/40 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                  >
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={service.image || "/placeholder.svg"}
                        alt={service.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-3 right-3 backdrop-blur-md bg-white/80 px-2 py-1 rounded-lg text-sm font-medium text-gray-700">
                        {service.duration}
                      </div>
                      <div className="absolute bottom-3 left-3 flex items-center gap-1 backdrop-blur-md bg-white/80 px-2 py-1 rounded-lg">
                        <span className="text-yellow-500">★</span>
                        <span className="text-sm font-medium text-gray-700">{service.rating}</span>
                        <span className="text-xs text-gray-500">({service.reviews})</span>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-bold text-gray-900 text-lg">{service.name}</h3>
                      </div>
                      <p className="text-gray-500 text-sm mb-4 line-clamp-2">{service.description}</p>
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                            ₹{service.price}
                          </span>
                        </div>
                        {isInCart(service.id) ? (
                          <button
                            onClick={() => dispatch(removeFromCart(service.id))}
                            className="flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full font-medium hover:bg-emerald-200 transition-colors"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Added
                          </button>
                        ) : (
                          <button
                            onClick={() =>dispatch(addToCart(service))}
                            className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-emerald-200/50 transition-all duration-300 hover:scale-[1.05]"
                          >
                            Add
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Booking Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 backdrop-blur-xl bg-white/70 rounded-2xl border border-white/40 shadow-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  Booking Summary
                </h3>

                {cart.length === 0 ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <p className="text-gray-500">No services selected</p>
                    <p className="text-sm text-gray-400 mt-1">Add services to get started</p>
                  </div>
                ) : (
                  <>
                    <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                      {cart.map((item) => (
                        <div key={item.id} className="flex items-center justify-between p-3 bg-emerald-50/50 rounded-xl">
                          <div className="flex-1">
                            <p className="font-medium text-gray-900 text-sm">{item.name}</p>
                            <p className="text-emerald-600 font-semibold">₹{item.price}</p>
                          </div>
                          <button
                            onClick={() =>dispatch(removeFromCart(item.id))}
                            className="p-1 text-gray-400 hover:text-red-500 transition-colors"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      ))}
                    </div>

                    <div className="border-t border-emerald-100 pt-4 mb-6">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-600">Subtotal</span>
                        <span className="font-medium">₹{totalPrice}</span>
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-600">Service Fee</span>
                        <span className="font-medium">₹49</span>
                      </div>
                      <div className="flex justify-between items-center text-lg font-bold mt-4 pt-4 border-t border-emerald-100">
                        <span>Total</span>
                        <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                          ₹{totalPrice + 49}
                        </span>
                      </div>
                    </div>

                    <button className="w-full py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-emerald-200/50 transition-all duration-300 hover:scale-[1.02]">
                      Proceed to Book
                    </button>
                  </>
                )}

                {/* Trust Badges */}
                <div className="mt-6 pt-6 border-t border-emerald-100">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 text-sm">Satisfaction Guaranteed</p>
                      <p className="text-xs text-gray-500">Re-clean if not satisfied</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 text-sm">Verified Professionals</p>
                      <p className="text-xs text-gray-500">Background checked staff</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Why Choose Our Cleaning Services?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We are committed to providing the best cleaning experience with trained professionals
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z", title: "Eco-Friendly", desc: "Safe & green cleaning products" },
              { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", title: "Punctual Service", desc: "Always on time, every time" },
              { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", title: "Insured Staff", desc: "Fully insured professionals" },
              { icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z", title: "100% Satisfaction", desc: "Re-clean guarantee" },
            ].map((feature, index) => (
              <div
                key={index}
                className="backdrop-blur-xl bg-white/70 rounded-2xl p-6 border border-white/40 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] text-center"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-200/50">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <span className="text-xl font-bold">Do<span className="text-emerald-400">-IT</span></span>
              </div>
              <p className="text-gray-400 text-sm mb-6">
                Professional cleaning services for homes and offices. Making spaces sparkle since 2020.
              </p>
              <div className="flex gap-3">
                {["M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z", "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z", "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"].map((path, i) => (
                  <a key={i} href="#" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d={path}/></svg>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Services</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Home Cleaning</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Deep Cleaning</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Kitchen Cleaning</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sofa Cleaning</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Company</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Support</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <p className="text-center text-sm text-gray-400">
              © {new Date().getFullYear()} Do-IT Cleaning Services. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Cleaning;
