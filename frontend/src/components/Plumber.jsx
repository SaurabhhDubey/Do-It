'use client';

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Plumber = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cart, setCart] = useState([]);

  const categories = ["All", "Tap & Mixer", "Leakage", "Drainage", "Installation", "Tank"];

  const services = [
    // Tap & Mixer
    {
      id: 1,
      name: "Tap Repair",
      category: "Tap & Mixer",
      price: 149,
      rating: 4.8,
      reviews: 2840,
      duration: "30 mins",
      image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=400&h=300&fit=crop",
      description: "Fix leaking or damaged taps"
    },
    {
      id: 2,
      name: "Tap Replacement",
      category: "Tap & Mixer",
      price: 249,
      rating: 4.7,
      reviews: 1950,
      duration: "45 mins",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=300&fit=crop",
      description: "Replace old tap with new one"
    },
    {
      id: 3,
      name: "Mixer Installation",
      category: "Tap & Mixer",
      price: 399,
      rating: 4.9,
      reviews: 1620,
      duration: "1 hr",
      image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&h=300&fit=crop",
      description: "Install new mixer tap in kitchen or bathroom"
    },
    {
      id: 4,
      name: "Sensor Tap Installation",
      category: "Tap & Mixer",
      price: 599,
      rating: 4.8,
      reviews: 890,
      duration: "1.5 hrs",
      image: "https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?w=400&h=300&fit=crop",
      description: "Touchless sensor tap installation"
    },
    // Leakage
    {
      id: 5,
      name: "Pipe Leakage Repair",
      category: "Leakage",
      price: 299,
      rating: 4.8,
      reviews: 3200,
      duration: "1 hr",
      image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=400&h=300&fit=crop",
      description: "Fix leaking pipes and joints"
    },
    {
      id: 6,
      name: "Ceiling Leakage",
      category: "Leakage",
      price: 499,
      rating: 4.6,
      reviews: 1450,
      duration: "2 hrs",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop",
      description: "Repair ceiling water seepage"
    },
    {
      id: 7,
      name: "Wall Seepage Treatment",
      category: "Leakage",
      price: 699,
      rating: 4.7,
      reviews: 980,
      duration: "3 hrs",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      description: "Waterproofing for wall seepage"
    },
    {
      id: 8,
      name: "Bathroom Leakage",
      category: "Leakage",
      price: 599,
      rating: 4.8,
      reviews: 2100,
      duration: "2.5 hrs",
      image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=400&h=300&fit=crop",
      description: "Complete bathroom leak fixing"
    },
    // Drainage
    {
      id: 9,
      name: "Drain Blockage Removal",
      category: "Drainage",
      price: 349,
      rating: 4.9,
      reviews: 4500,
      duration: "1 hr",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      description: "Clear blocked drains and pipes"
    },
    {
      id: 10,
      name: "Toilet Unclogging",
      category: "Drainage",
      price: 299,
      rating: 4.8,
      reviews: 3800,
      duration: "45 mins",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=300&fit=crop",
      description: "Fix clogged toilet bowl"
    },
    {
      id: 11,
      name: "Kitchen Sink Drainage",
      category: "Drainage",
      price: 249,
      rating: 4.7,
      reviews: 2900,
      duration: "45 mins",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
      description: "Clear kitchen sink blockages"
    },
    {
      id: 12,
      name: "Main Line Cleaning",
      category: "Drainage",
      price: 799,
      rating: 4.6,
      reviews: 1200,
      duration: "3 hrs",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop",
      description: "Deep cleaning of main drainage"
    },
    // Installation
    {
      id: 13,
      name: "Toilet Seat Installation",
      category: "Installation",
      price: 449,
      rating: 4.8,
      reviews: 2200,
      duration: "1.5 hrs",
      image: "https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?w=400&h=300&fit=crop",
      description: "Install new toilet seat"
    },
    {
      id: 14,
      name: "Wash Basin Installation",
      category: "Installation",
      price: 549,
      rating: 4.7,
      reviews: 1800,
      duration: "2 hrs",
      image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&h=300&fit=crop",
      description: "Install wash basin with fittings"
    },
    {
      id: 15,
      name: "Geyser Installation",
      category: "Installation",
      price: 699,
      rating: 4.9,
      reviews: 1650,
      duration: "2 hrs",
      image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=400&h=300&fit=crop",
      description: "Water heater installation"
    },
    {
      id: 16,
      name: "Water Purifier Installation",
      category: "Installation",
      price: 399,
      rating: 4.8,
      reviews: 2400,
      duration: "1 hr",
      image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=400&h=300&fit=crop",
      description: "RO/UV water purifier setup"
    },
    // Tank
    {
      id: 17,
      name: "Tank Cleaning",
      category: "Tank",
      price: 999,
      rating: 4.8,
      reviews: 3100,
      duration: "3 hrs",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop",
      description: "Complete water tank cleaning"
    },
    {
      id: 18,
      name: "Tank Repair",
      category: "Tank",
      price: 599,
      rating: 4.6,
      reviews: 1400,
      duration: "2 hrs",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      description: "Fix tank leaks and cracks"
    },
    {
      id: 19,
      name: "Tank Installation",
      category: "Tank",
      price: 1499,
      rating: 4.9,
      reviews: 980,
      duration: "4 hrs",
      image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=400&h=300&fit=crop",
      description: "New water tank installation"
    },
    {
      id: 20,
      name: "Motor Pump Installation",
      category: "Tank",
      price: 799,
      rating: 4.7,
      reviews: 1650,
      duration: "2 hrs",
      image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=400&h=300&fit=crop",
      description: "Water pump motor setup"
    },
  ];

  const filteredServices = selectedCategory === "All" 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  const addToCart = (service) => {
    if (!cart.find(item => item.id === service.id)) {
      setCart([...cart, service]);
    }
  };

  const removeFromCart = (serviceId) => {
    setCart(cart.filter(item => item.id !== serviceId));
  };

  const isInCart = (serviceId) => cart.some(item => item.id === serviceId);

  const totalAmount = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-sky-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-cyan-200/30 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-white/20 shadow-lg shadow-blue-100/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center cursor-pointer" onClick={() => navigate("/")}>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200/50">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  Do<span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">-IT</span>
                </span>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <button onClick={() => navigate("/")} className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Home</button>
              <button className="text-blue-600 font-semibold">Services</button>
              <button className="text-gray-600 hover:text-blue-600 font-medium transition-colors">About</button>
              <button className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Contact</button>
            </nav>

            <div className="flex items-center gap-4">
              <div className="relative">
                <button className="p-2 rounded-full bg-white/50 hover:bg-white transition-colors shadow-md">
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  {cart.length > 0 && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs rounded-full flex items-center justify-center font-semibold">
                      {cart.length}
                    </span>
                  )}
                </button>
              </div>
              <button 
                onClick={() => navigate("/login")}
                className="px-5 py-2.5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full font-medium hover:shadow-lg hover:shadow-blue-200/50 transition-all hover:scale-105"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-blue-100 mb-6">
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm font-medium text-gray-700">Trusted by 50,000+ customers</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 bg-clip-text text-transparent">Expert </span>
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Plumbing</span>
                <br />
                <span className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 bg-clip-text text-transparent">Services</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
                Professional plumbers for all your water and drainage needs. Quick response, quality service, and guaranteed satisfaction.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-xl border border-blue-100">
                  <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm font-medium text-gray-700">30 Min Response</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-xl border border-blue-100">
                  <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="text-sm font-medium text-gray-700">90-Day Warranty</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-3xl blur-2xl"></div>
              <img
                src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=600&h=500&fit=crop"
                alt="Professional Plumber"
                className="relative w-full rounded-3xl shadow-2xl shadow-blue-200/30"
              />
              <div className="absolute -bottom-6 -left-6 bg-white/80 backdrop-blur-xl rounded-2xl p-4 shadow-xl border border-white/20">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Licensed Plumbers</p>
                    <p className="text-sm text-gray-500">Verified & Background Checked</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-200/50 scale-105"
                    : "bg-white/60 backdrop-blur-sm text-gray-600 hover:bg-white hover:shadow-md border border-white/40"
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
                    className="group bg-white/60 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/40 shadow-lg shadow-blue-100/20 hover:shadow-xl hover:shadow-blue-200/30 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={service.image || "/placeholder.svg"}
                        alt={service.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute top-3 right-3 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full">
                        <span className="text-sm font-semibold text-blue-600">{service.duration}</span>
                      </div>
                      <div className="absolute bottom-3 left-3 flex items-center gap-1 px-2 py-1 bg-white/90 backdrop-blur-sm rounded-full">
                        <svg className="w-4 h-4 text-yellow-500 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                        <span className="text-sm font-medium text-gray-700">{service.rating}</span>
                        <span className="text-xs text-gray-500">({service.reviews})</span>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-bold text-gray-800 text-lg">{service.name}</h3>
                        <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                          Rs. {service.price}
                        </span>
                      </div>
                      <p className="text-gray-500 text-sm mb-4">{service.description}</p>
                      <button
                        onClick={() => isInCart(service.id) ? removeFromCart(service.id) : addToCart(service)}
                        className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                          isInCart(service.id)
                            ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg shadow-green-200/50"
                            : "bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:shadow-lg hover:shadow-blue-200/50 hover:scale-[1.02]"
                        }`}
                      >
                        {isInCart(service.id) ? (
                          <span className="flex items-center justify-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Added
                          </span>
                        ) : (
                          "Add to Cart"
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Booking Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-white/70 backdrop-blur-xl rounded-2xl border border-white/40 shadow-xl shadow-blue-100/20 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-5">
                  <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    Booking Summary
                  </h2>
                </div>
                <div className="p-5">
                  {cart.length === 0 ? (
                    <div className="text-center py-8">
                      <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-10 h-10 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <p className="text-gray-500">Your cart is empty</p>
                      <p className="text-sm text-gray-400 mt-1">Add services to proceed</p>
                    </div>
                  ) : (
                    <>
                      <div className="space-y-3 mb-6 max-h-64 overflow-y-auto">
                        {cart.map((item) => (
                          <div key={item.id} className="flex items-center justify-between p-3 bg-blue-50/50 rounded-xl">
                            <div className="flex-1">
                              <p className="font-medium text-gray-800 text-sm">{item.name}</p>
                              <p className="text-xs text-gray-500">{item.duration}</p>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="font-semibold text-blue-600">Rs. {item.price}</span>
                              <button
                                onClick={() => removeFromCart(item.id)}
                                className="p-1 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors"
                              >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="border-t border-blue-100 pt-4 mb-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-600">Subtotal</span>
                          <span className="font-medium">Rs. {totalAmount}</span>
                        </div>
                        <div className="flex justify-between items-center text-lg font-bold">
                          <span className="text-gray-800">Total</span>
                          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Rs. {totalAmount}</span>
                        </div>
                      </div>
                      <button className="w-full py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-200/50 transition-all hover:scale-[1.02]">
                        Proceed to Book
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Why Choose </span>
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Our Plumbers</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", title: "Licensed Plumbers", desc: "All plumbers are certified and verified" },
              { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", title: "Quick Response", desc: "Reach you within 30 minutes" },
              { icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", title: "90-Day Warranty", desc: "Guaranteed workmanship" },
              { icon: "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z", title: "Transparent Pricing", desc: "No hidden charges, pay what you see" },
            ].map((feature, index) => (
              <div key={index} className="bg-white/60 backdrop-blur-xl rounded-2xl p-6 border border-white/40 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-200/50">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-500">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <span className="text-xl font-bold">Do<span className="text-blue-400">-IT</span></span>
              </div>
              <p className="text-gray-400 text-sm mb-4">Professional plumbing services at your doorstep.</p>
              <div className="flex gap-3">
                {["M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z", "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z", "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"].map((path, i) => (
                  <a key={i} href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d={path}/></svg>
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Tap Repair</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Leakage Fix</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Drainage</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tank Cleaning</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Do-IT. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Plumber;
