'use client';

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Electrician = () => {
  const navigate = useNavigate();

  const [activeCategory, setActiveCategory] = useState("Wiring");
  const [cart, setCart] = useState([]);

  const categories = ["Wiring", "Switches", "Fans", "Lights", "Appliances"];

  const services = [
    // Wiring Services
    {
      id: 1,
      name: "New Point Wiring",
      category: "Wiring",
      price: 299,
      duration: "45 mins",
      rating: 4.8,
      reviews: 1245,
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=300&fit=crop",
      description: "Installation of new electrical point with concealed wiring"
    },
    {
      id: 2,
      name: "Wiring Repair",
      category: "Wiring",
      price: 199,
      duration: "30 mins",
      rating: 4.7,
      reviews: 987,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      description: "Repair faulty or damaged electrical wiring"
    },
    {
      id: 3,
      name: "Complete House Rewiring",
      category: "Wiring",
      price: 8999,
      duration: "2-3 days",
      rating: 4.9,
      reviews: 432,
      image: "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?w=400&h=300&fit=crop",
      description: "Complete rewiring for 2BHK with new cables and points"
    },
    {
      id: 4,
      name: "MCB/Fuse Box Installation",
      category: "Wiring",
      price: 1499,
      duration: "2 hrs",
      rating: 4.8,
      reviews: 654,
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop",
      description: "Install new MCB box with safety trip switches"
    },
    // Switches & Sockets
    {
      id: 5,
      name: "Switch/Socket Replacement",
      category: "Switches",
      price: 99,
      duration: "15 mins",
      rating: 4.6,
      reviews: 2134,
      image: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?w=400&h=300&fit=crop",
      description: "Replace old or faulty switches and sockets"
    },
    {
      id: 6,
      name: "Modular Switch Installation",
      category: "Switches",
      price: 249,
      duration: "30 mins",
      rating: 4.7,
      reviews: 876,
      image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400&h=300&fit=crop",
      description: "Install premium modular switches with plates"
    },
    {
      id: 7,
      name: "Dimmer Switch Installation",
      category: "Switches",
      price: 349,
      duration: "30 mins",
      rating: 4.5,
      reviews: 432,
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=400&h=300&fit=crop",
      description: "Install dimmer switches for adjustable lighting"
    },
    // Fan Services
    {
      id: 8,
      name: "Ceiling Fan Installation",
      category: "Fans",
      price: 349,
      duration: "45 mins",
      rating: 4.8,
      reviews: 1876,
      image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=300&fit=crop",
      description: "Install ceiling fan with proper wiring and balancing"
    },
    {
      id: 9,
      name: "Fan Repair & Servicing",
      category: "Fans",
      price: 199,
      duration: "30 mins",
      rating: 4.6,
      reviews: 1543,
      image: "https://images.unsplash.com/photo-1635070040463-2c1c64da7cc5?w=400&h=300&fit=crop",
      description: "Repair noisy fan, replace capacitor, and servicing"
    },
    {
      id: 10,
      name: "Exhaust Fan Installation",
      category: "Fans",
      price: 299,
      duration: "45 mins",
      rating: 4.7,
      reviews: 765,
      image: "https://images.unsplash.com/photo-1631545806609-e5d4027e3a5c?w=400&h=300&fit=crop",
      description: "Install exhaust fan in kitchen or bathroom"
    },
    {
      id: 11,
      name: "Fan Regulator Installation",
      category: "Fans",
      price: 149,
      duration: "20 mins",
      rating: 4.5,
      reviews: 432,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      description: "Install electronic or conventional fan regulator"
    },
    // Lights
    {
      id: 12,
      name: "Light Fixture Installation",
      category: "Lights",
      price: 199,
      duration: "30 mins",
      rating: 4.7,
      reviews: 1234,
      image: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=400&h=300&fit=crop",
      description: "Install any type of light fixture - tube, bulb, or LED"
    },
    {
      id: 13,
      name: "Chandelier Installation",
      category: "Lights",
      price: 599,
      duration: "1 hr",
      rating: 4.8,
      reviews: 543,
      image: "https://images.unsplash.com/photo-1543198126-a8ad8e47fb22?w=400&h=300&fit=crop",
      description: "Install decorative chandelier with proper support"
    },
    {
      id: 14,
      name: "LED Strip Light Installation",
      category: "Lights",
      price: 449,
      duration: "1 hr",
      rating: 4.6,
      reviews: 321,
      image: "https://images.unsplash.com/photo-1558470598-a5dda9640f68?w=400&h=300&fit=crop",
      description: "Install LED strip lights for false ceiling or decor"
    },
    {
      id: 15,
      name: "Motion Sensor Light",
      category: "Lights",
      price: 699,
      duration: "45 mins",
      rating: 4.7,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=400&h=300&fit=crop",
      description: "Install motion sensor lights for security"
    },
    // Appliances
    {
      id: 16,
      name: "Geyser Installation",
      category: "Appliances",
      price: 499,
      duration: "1 hr",
      rating: 4.8,
      reviews: 876,
      image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=300&fit=crop",
      description: "Install instant or storage water heater"
    },
    {
      id: 17,
      name: "Inverter/UPS Installation",
      category: "Appliances",
      price: 699,
      duration: "1.5 hrs",
      rating: 4.9,
      reviews: 654,
      image: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?w=400&h=300&fit=crop",
      description: "Install inverter/UPS with battery connection"
    },
    {
      id: 18,
      name: "TV Wall Mount Installation",
      category: "Appliances",
      price: 399,
      duration: "45 mins",
      rating: 4.7,
      reviews: 1432,
      image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=300&fit=crop",
      description: "Mount TV on wall with concealed wiring"
    },
    {
      id: 19,
      name: "Doorbell Installation",
      category: "Appliances",
      price: 199,
      duration: "30 mins",
      rating: 4.5,
      reviews: 543,
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=400&h=300&fit=crop",
      description: "Install wired or wireless doorbell"
    },
  ];

  const filteredServices = services.filter(service => service.category === activeCategory);

  const addToCart = (service) => {
    if (!cart.find(item => item.id === service.id)) {
      setCart([...cart, service]);
    }
  };

  const removeFromCart = (serviceId) => {
    setCart(cart.filter(item => item.id !== serviceId));
  };

  const isInCart = (serviceId) => {
    return cart.some(item => item.id === serviceId);
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-amber-50">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-yellow-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-orange-200/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-white/20 shadow-lg shadow-amber-100/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center cursor-pointer" onClick={() => navigate("/")}>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg shadow-amber-200/50">
                 <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <span className="text-2xl font-bold text-gray-900">Do<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">-IT</span></span>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <button onClick={() => navigate("/")} className="text-gray-600 hover:text-amber-600 font-medium transition-colors">Home</button>
              <button className="text-amber-600 font-medium">Electrician</button>
             
            </nav>

            {/* Cart */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
                  <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs rounded-full flex items-center justify-center font-medium shadow-lg">
                    {cart.length}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full text-amber-700 text-sm font-medium mb-6">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Certified Electricians
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">Electrical</span> Services
              </h1>
              <p className="text-gray-600 text-lg mb-8">
                Safe and reliable electrical solutions for your home. Licensed professionals with guaranteed workmanship.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span>Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span>Same Day Service</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <span>90-Day Warranty</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-orange-400/20 rounded-3xl blur-2xl"></div>
              <img
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=400&fit=crop"
                alt="Professional Electrician"
                className="relative rounded-3xl shadow-2xl shadow-amber-200/30 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Our Services</h2>
            <p className="text-gray-600">Professional electrical services for all your needs</p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-200/50 scale-105"
                    : "bg-white/70 backdrop-blur-sm text-gray-600 hover:bg-amber-50 border border-amber-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Service Cards */}
            <div className="lg:col-span-2">
              <div className="grid sm:grid-cols-2 gap-6">
                {filteredServices.map((service) => (
                  <div
                    key={service.id}
                    className="group bg-white/70 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/20 shadow-lg shadow-amber-100/10 hover:shadow-xl hover:shadow-amber-200/20 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={service.image || "/placeholder.svg"}
                        alt={service.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-gray-700">
                        {service.duration}
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center gap-1">
                          <svg className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <span className="text-sm font-medium text-gray-700">{service.rating}</span>
                        </div>
                        <span className="text-xs text-gray-500">({service.reviews} reviews)</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-1">{service.name}</h3>
                      <p className="text-sm text-gray-500 mb-4 line-clamp-2">{service.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
                          ₹{service.price}
                        </span>
                        {isInCart(service.id) ? (
                          <button
                            onClick={() => removeFromCart(service.id)}
                            className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full text-sm font-medium flex items-center gap-1 hover:opacity-90 transition-opacity"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Added
                          </button>
                        ) : (
                          <button
                            onClick={() => addToCart(service)}
                            className="px-4 py-2 bg-amber-50 text-amber-600 rounded-full text-sm font-medium hover:bg-gradient-to-r hover:from-amber-500 hover:to-orange-500 hover:text-white transition-all duration-300"
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
              <div className="sticky top-24 bg-white/70 backdrop-blur-xl rounded-2xl border border-white/20 shadow-lg shadow-amber-100/10 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  Booking Summary
                </h3>

                {cart.length === 0 ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <p className="text-gray-500 text-sm">No services selected yet</p>
                    <p className="text-gray-400 text-xs mt-1">Add services to get started</p>
                  </div>
                ) : (
                  <>
                    <div className="space-y-3 mb-6 max-h-64 overflow-y-auto">
                      {cart.map((item) => (
                        <div key={item.id} className="flex items-center justify-between p-3 bg-amber-50/50 rounded-xl">
                          <div className="flex-1">
                            <p className="font-medium text-gray-900 text-sm">{item.name}</p>
                            <p className="text-xs text-gray-500">{item.duration}</p>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="font-semibold text-amber-600">₹{item.price}</span>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="w-6 h-6 bg-red-100 text-red-500 rounded-full flex items-center justify-center hover:bg-red-200 transition-colors"
                            >
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="border-t border-amber-100 pt-4 mb-6">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Total</span>
                        <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">₹{totalPrice}</span>
                      </div>
                    </div>

                    <button className="w-full py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-amber-200/50 transition-all duration-300 hover:scale-[1.02]">
                      Book Now
                    </button>
                  </>
                )}

                {/* Trust Badges */}
                <div className="mt-6 pt-6 border-t border-amber-100">
                  <div className="flex items-center gap-3 text-sm text-gray-600 mb-3">
                    <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span>90-Day Service Warranty</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>Licensed Electricians</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-br from-amber-50/50 to-orange-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Why Choose Us</h2>
            <p className="text-gray-600">Quality electrical services you can trust</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "M13 10V3L4 14h7v7l9-11h-7z", title: "Licensed Experts", desc: "All electricians are certified and licensed professionals" },
              { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", title: "Safety First", desc: "We follow all safety protocols and use quality materials" },
              { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", title: "On-Time Service", desc: "Punctual arrivals and efficient work completion" },
              { icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z", title: "Customer First", desc: "100% satisfaction guarantee on all services" },
            ].map((feature, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-lg shadow-amber-100/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <span className="text-xl font-bold">Do<span className="text-amber-400">-IT</span></span>
              </div>
              <p className="text-gray-400 text-sm mb-6">
                Quality electrical services at your doorstep. Licensed professionals and guaranteed workmanship.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Services</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Wiring</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Fan Installation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Light Fixtures</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Appliances</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Company</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Support</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <p className="text-center text-sm text-gray-400">
              © {new Date().getFullYear()} Do-IT. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Electrician;
