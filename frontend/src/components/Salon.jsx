'use client';

import { useState } from "react";

const SalonBooking = () => {
  const [activeCategory, setActiveCategory] = useState("Hair");
  const [cart, setCart] = useState([]);

  const servicesData = [
    {
      id: 1,
      category: "Hair",
      title: "Haircut & Styling",
      desc: "Professional haircut with blow-dry",
      price: 499,
      time: "45 mins",
      icon: "M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z",
    },
    {
      id: 2,
      category: "Hair",
      title: "Hair Spa",
      desc: "Nourishing hair spa treatment",
      price: 799,
      time: "60 mins",
      icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
    },
    {
      id: 3,
      category: "Hair",
      title: "Hair Coloring",
      desc: "Premium hair color with styling",
      price: 1299,
      time: "90 mins",
      icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
    },
    {
      id: 4,
      category: "Facial",
      title: "Facial & Cleanup",
      desc: "Glow facial with deep cleansing",
      price: 699,
      time: "60 mins",
      icon: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    },
    {
      id: 5,
      category: "Facial",
      title: "Gold Facial",
      desc: "Luxurious gold facial treatment",
      price: 1499,
      time: "75 mins",
      icon: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    },
    {
      id: 6,
      category: "Waxing",
      title: "Full Body Waxing",
      desc: "Smooth & hygienic waxing",
      price: 999,
      time: "75 mins",
      icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
    },
    {
      id: 7,
      category: "Waxing",
      title: "Arms & Legs Waxing",
      desc: "Professional waxing service",
      price: 599,
      time: "45 mins",
      icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
    },
    {
      id: 8,
      category: "Cleanup",
      title: "Skin Cleanup",
      desc: "Basic face cleanup",
      price: 399,
      time: "40 mins",
      icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    },
    {
      id: 9,
      category: "Cleanup",
      title: "Deep Pore Cleanup",
      desc: "Advanced deep cleansing treatment",
      price: 599,
      time: "50 mins",
      icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    },
  ];

  const categories = [
    { name: "Hair", icon: "M12 14l9-5-9-5-9 5 9 5z" },
    { name: "Facial", icon: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
    { name: "Waxing", icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" },
    { name: "Cleanup", icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" },
  ];

  const filteredServices = servicesData.filter(
    (service) => service.category === activeCategory
  );

  const addToCart = (service) => {
    if (!cart.find((item) => item.id === service.id)) {
      setCart([...cart, service]);
    }
  };

  const removeFromCart = (serviceId) => {
    setCart(cart.filter((item) => item.id !== serviceId));
  };

  const isInCart = (serviceId) => {
    return cart.some((item) => item.id === serviceId);
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-rose-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-rose-200/40 to-pink-200/40 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-fuchsia-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-br from-amber-200/30 to-orange-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-white/20 shadow-lg shadow-slate-200/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center cursor-pointer">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg shadow-rose-200/50">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <span className="text-2xl font-bold text-slate-800">
                  Do<span className="bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">-IT</span>
                </span>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <a href="/" className="text-slate-600 hover:text-rose-600 font-medium transition-colors">Home</a>
              <a href="#" className="text-slate-600 hover:text-rose-600 font-medium transition-colors">Services</a>
              <a href="#" className="text-slate-600 hover:text-rose-600 font-medium transition-colors">About</a>
              <a href="#" className="text-slate-600 hover:text-rose-600 font-medium transition-colors">Contact</a>
            </nav>

            <div className="flex items-center gap-3">
              <button className="relative p-2 rounded-full hover:bg-rose-50 transition-colors">
                <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-rose-500 to-pink-600 text-white text-xs rounded-full flex items-center justify-center font-medium">
                    {cart.length}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="backdrop-blur-xl bg-white/60 rounded-3xl border border-white/30 shadow-xl shadow-slate-200/30 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-rose-100 to-pink-100 rounded-full text-rose-700 text-sm font-medium mb-6 w-fit">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span>4.8 Rating (12k+ Reviews)</span>
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4 leading-tight">
                  Premium{' '}
                  <span className="bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                    Salon Services
                  </span>
                  <br />at Your Doorstep
                </h1>
                
                <p className="text-slate-600 text-lg mb-8 max-w-md">
                  Professional salon services at home by verified experts. Relax and let our professionals pamper you.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/80 rounded-xl border border-slate-200/50">
                    <svg className="w-5 h-5 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-slate-700 font-medium">Avg. 60 mins</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/80 rounded-xl border border-slate-200/50">
                    <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span className="text-slate-700 font-medium">Verified Experts</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/80 rounded-xl border border-slate-200/50">
                    <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-slate-700 font-medium">Best Prices</span>
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative h-64 lg:h-auto">
                <img
                  src="https://res.cloudinary.com/dyjmgpb5p/image/upload/v1767066757/Bold_Style_Fresh_Vibes_%EF%B8%8F_b32cl6.jpg"
                  alt="Salon Services"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Left: Services */}
            <div className="lg:w-2/3">
              {/* Category Tabs */}
              <div className="backdrop-blur-xl bg-white/60 rounded-2xl border border-white/30 shadow-lg shadow-slate-200/20 p-2 mb-8">
                <div className="flex gap-2 overflow-x-auto">
                  {categories.map((cat) => (
                    <button
                      key={cat.name}
                      onClick={() => setActiveCategory(cat.name)}
                      className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 whitespace-nowrap ${
                        activeCategory === cat.name
                          ? 'bg-gradient-to-r from-rose-500 to-pink-600 text-white shadow-lg shadow-rose-200/50 scale-[1.02]'
                          : 'text-slate-600 hover:bg-white/80 hover:text-rose-600'
                      }`}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={cat.icon} />
                      </svg>
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Service List */}
              <div className="space-y-4">
                {filteredServices.map((service, index) => (
                  <div
                    key={service.id}
                    className="group backdrop-blur-xl bg-white/70 rounded-2xl border border-white/30 p-6 shadow-lg shadow-slate-200/20 hover:shadow-xl hover:shadow-rose-200/20 transition-all duration-300 hover:scale-[1.01]"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-rose-100 to-pink-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:from-rose-200 group-hover:to-pink-200 transition-colors">
                          <svg className="w-7 h-7 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-slate-800 mb-1 group-hover:text-rose-700 transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-slate-500 text-sm mb-2">
                            {service.desc}
                          </p>
                          <div className="flex items-center gap-3">
                            <span className="text-lg font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                              ₹{service.price}
                            </span>
                            <span className="text-slate-400">•</span>
                            <span className="text-slate-500 text-sm flex items-center gap-1">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              {service.time}
                            </span>
                          </div>
                        </div>
                      </div>

                      {isInCart(service.id) ? (
                        <button
                          onClick={() => removeFromCart(service.id)}
                          className="px-6 py-2.5 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-xl font-medium shadow-lg shadow-rose-200/50 hover:shadow-xl hover:shadow-rose-300/50 transition-all duration-300 flex items-center gap-2"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Added
                        </button>
                      ) : (
                        <button
                          onClick={() => addToCart(service)}
                          className="px-6 py-2.5 border-2 border-rose-300 text-rose-600 rounded-xl font-medium hover:bg-gradient-to-r hover:from-rose-500 hover:to-pink-600 hover:text-white hover:border-transparent hover:shadow-lg hover:shadow-rose-200/50 transition-all duration-300"
                        >
                          Add
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Booking Summary */}
            <div className="lg:w-1/3">
              <div className="backdrop-blur-xl bg-white/70 rounded-2xl border border-white/30 p-6 shadow-xl shadow-slate-200/20 sticky top-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">Booking Summary</h3>
                </div>

                {cart.length === 0 ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                    </div>
                    <p className="text-slate-500">Select services to proceed</p>
                  </div>
                ) : (
                  <div className="space-y-3 mb-6">
                    {cart.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between p-3 bg-white/80 rounded-xl border border-slate-100"
                      >
                        <div>
                          <p className="font-medium text-slate-800 text-sm">{item.title}</p>
                          <p className="text-rose-600 font-semibold">₹{item.price}</p>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-1.5 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                <div className="border-t border-slate-200/50 pt-4">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-slate-600 font-medium">Total Amount</span>
                    <span className="text-2xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                      ₹{totalPrice}
                    </span>
                  </div>

                  <button
                    className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                      cart.length > 0
                        ? 'bg-gradient-to-r from-rose-500 to-pink-600 text-white shadow-lg shadow-rose-200/50 hover:shadow-xl hover:shadow-rose-300/50 hover:scale-[1.02]'
                        : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                    }`}
                    disabled={cart.length === 0}
                  >
                    {cart.length > 0 ? `Proceed to Book (${cart.length} services)` : 'Select Services'}
                  </button>

                  <p className="text-center text-slate-500 text-xs mt-4">
                    Free cancellation up to 2 hours before the service
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Why Choose{' '}
              <span className="bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">
                Our Salon Services
              </span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Experience the best salon services at the comfort of your home
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                title: "Verified Professionals",
                description: "All our beauty experts are thoroughly verified and trained",
              },
              {
                icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                title: "Transparent Pricing",
                description: "No hidden charges, pay exactly what you see",
              },
              {
                icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
                title: "Premium Products",
                description: "We use only high-quality, branded beauty products",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="backdrop-blur-xl bg-white/60 rounded-2xl border border-white/30 p-8 shadow-lg shadow-slate-200/20 hover:shadow-xl hover:shadow-rose-200/20 transition-all duration-300 hover:scale-[1.02] group text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-rose-100 to-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-rose-200 group-hover:to-pink-200 transition-colors">
                  <svg className="w-8 h-8 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}; 

export default SalonBooking;
