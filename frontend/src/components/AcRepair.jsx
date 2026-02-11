import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../redux/slices/cartSlice";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ACRepair = () => {
  const [activeCategory, setActiveCategory] = useState("Repair");
  

  const servicesData = [
    {
      id: 1,
      category: "Repair",
      title: "AC Not Cooling",
      desc: "Complete diagnosis and repair for cooling issues",
      price: 499,
      time: "60 mins",
      icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    },
    {
      id: 2,
      category: "Repair",
      title: "Gas Refilling",
      desc: "AC gas top-up with leak detection",
      price: 1499,
      time: "45 mins",
      icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
    },
    {
      id: 3,
      category: "Repair",
      title: "Compressor Repair",
      desc: "Compressor diagnosis and repair service",
      price: 2499,
      time: "90 mins",
      icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
    },
    {
      id: 4,
      category: "Repair",
      title: "PCB Repair",
      desc: "Circuit board diagnosis and repair",
      price: 1999,
      time: "75 mins",
      icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
    },
    {
      id: 5,
      category: "Service",
      title: "Regular AC Service",
      desc: "Complete AC cleaning and maintenance",
      price: 599,
      time: "45 mins",
      icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
    },
    {
      id: 6,
      category: "Service",
      title: "Deep Cleaning Service",
      desc: "Jet spray deep cleaning with foam wash",
      price: 899,
      time: "60 mins",
      icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
    },
    {
      id: 7,
      category: "Service",
      title: "Anti-Bacterial Treatment",
      desc: "Sanitization and odor removal",
      price: 499,
      time: "30 mins",
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    },
    {
      id: 8,
      category: "Installation",
      title: "AC Installation",
      desc: "Professional split AC installation",
      price: 1499,
      time: "120 mins",
      icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    },
    {
      id: 9,
      category: "Installation",
      title: "AC Uninstallation",
      desc: "Safe AC removal and packing",
      price: 799,
      time: "60 mins",
      icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
    },
    {
      id: 10,
      category: "Installation",
      title: "AC Relocation",
      desc: "Complete shifting with reinstallation",
      price: 2499,
      time: "180 mins",
      icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
    },
    {
      id: 11,
      category: "AMC",
      title: "Basic AMC",
      desc: "2 services per year with basic repairs",
      price: 1999,
      time: "Annual",
      icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
    },
    {
      id: 12,
      category: "AMC",
      title: "Premium AMC",
      desc: "4 services per year with all repairs covered",
      price: 3999,
      time: "Annual",
      icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
    },
  ];

  const categories = [
    { name: "Repair", icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" },
    { name: "Service", icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" },
    { name: "Installation", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
    { name: "AMC", icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" },
  ];

  const filteredServices = servicesData.filter(
    (service) => service.category === activeCategory
  );

  const dispatch = useDispatch();
const cart = useSelector(state => state.cart.items);
const totalPrice = useSelector(state => state.cart.totalPrice);


  const isInCart = (serviceId) => {
    return cart.some((item) => item.id === serviceId);
  };

  

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-cyan-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-cyan-200/40 to-teal-200/40 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-sky-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-br from-indigo-200/30 to-violet-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-white/20 shadow-lg shadow-slate-200/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center cursor-pointer">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-200/50">
                   <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <span className="text-2xl font-bold text-slate-800">
                  Do<span className="bg-gradient-to-r from-cyan-500 to-teal-600 bg-clip-text text-transparent">-IT</span>
                </span>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <a href="/" className="text-slate-600 hover:text-cyan-600 font-medium transition-colors">Home</a>
              <a href="#" className="text-slate-600 hover:text-cyan-600 font-medium transition-colors">Services</a>
              <a href="#" className="text-slate-600 hover:text-cyan-600 font-medium transition-colors">About</a>
              <a href="#" className="text-slate-600 hover:text-cyan-600 font-medium transition-colors">Contact</a>
            </nav>

            <div className="flex items-center gap-3">
              <button className="relative p-2 rounded-full hover:bg-cyan-50 transition-colors">
                <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-cyan-500 to-teal-600 text-white text-xs rounded-full flex items-center justify-center font-medium">
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
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-100 to-teal-100 rounded-full text-cyan-700 text-sm font-medium mb-6 w-fit">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span>4.9 Rating (15k+ Reviews)</span>
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4 leading-tight">
                  Expert{' '}
                  <span className="bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-500 bg-clip-text text-transparent">
                    AC Repair
                  </span>
                  <br />& Services
                </h1>
                
                <p className="text-slate-600 text-lg mb-8 max-w-md">
                  Professional AC repair and maintenance by certified technicians. Get your AC running like new with our expert services.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/80 rounded-xl border border-slate-200/50">
                    <svg className="w-5 h-5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-slate-700 font-medium">Same Day Service</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/80 rounded-xl border border-slate-200/50">
                    <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span className="text-slate-700 font-medium">90-Day Warranty</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/80 rounded-xl border border-slate-200/50">
                    <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="text-slate-700 font-medium">Certified Experts</span>
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative h-64 lg:h-auto">
                <img
                  src="https://res.cloudinary.com/dyjmgpb5p/image/upload/v1769278092/Professional_Service_AC_Repair_In_Plano_TX_hp7ldm.jpg"
                  alt="AC Repair Services"
                  className="w-full h-auto object-cover"
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
                          ? 'bg-gradient-to-r from-cyan-500 to-teal-600 text-white shadow-lg shadow-cyan-200/50 scale-[1.02]'
                          : 'text-slate-600 hover:bg-white/80 hover:text-cyan-600'
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
                    className="group backdrop-blur-xl bg-white/70 rounded-2xl border border-white/30 p-6 shadow-lg shadow-slate-200/20 hover:shadow-xl hover:shadow-cyan-200/20 transition-all duration-300 hover:scale-[1.01]"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-cyan-100 to-teal-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:from-cyan-200 group-hover:to-teal-200 transition-colors">
                          <svg className="w-7 h-7 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-slate-800 mb-1 group-hover:text-cyan-700 transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-slate-500 text-sm mb-2">
                            {service.desc}
                          </p>
                          <div className="flex items-center gap-3">
                            <span className="text-lg font-bold bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
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
                          onClick={() => dispatch(removeFromCart(service.id))}
                          className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-teal-600 text-white rounded-xl font-medium shadow-lg shadow-cyan-200/50 hover:shadow-xl hover:shadow-cyan-300/50 transition-all duration-300 flex items-center gap-2"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Added
                        </button>
                      ) : (
                        <button
                          onClick={() =>dispatch(addToCart(service))}
                          className="px-6 py-2.5 border-2 border-cyan-300 text-cyan-600 rounded-xl font-medium hover:bg-gradient-to-r hover:from-cyan-500 hover:to-teal-600 hover:text-white hover:border-transparent hover:shadow-lg hover:shadow-cyan-200/50 transition-all duration-300"
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
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-xl flex items-center justify-center">
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
                          <p className="text-cyan-600 font-semibold">₹{item.price}</p>
                        </div>
                        <button
                          onClick={() =>dispatch(removeFromCart(item.id))}
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

                {/* Total */}
                <div className="border-t border-slate-200 pt-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600 font-medium">Total Amount</span>
                    <span className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
                      ₹{totalPrice}
                    </span>
                  </div>
                </div>

                {/* Book Button */}
                <button
                  disabled={cart.length === 0}
                  className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                    cart.length > 0
                      ? 'bg-gradient-to-r from-cyan-500 to-teal-600 text-white shadow-lg shadow-cyan-200/50 hover:shadow-xl hover:shadow-cyan-300/50 hover:scale-[1.02]'
                      : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  {cart.length > 0 ? 'Book Service' : 'Select Services'}
                </button>

                {/* Trust Badges */}
                <div className="mt-6 pt-6 border-t border-slate-200">
                  <div className="flex items-center justify-center gap-4 text-sm text-slate-500">
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <span>Secure Payment</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>On-Time</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              Why Choose{' '}
              <span className="bg-gradient-to-r from-cyan-500 to-teal-600 bg-clip-text text-transparent">
                Our AC Services
              </span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We provide the best AC repair and maintenance services with certified technicians and genuine spare parts
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                title: "90-Day Warranty",
                desc: "All repairs come with a 90-day service warranty"
              },
              {
                icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                title: "Certified Technicians",
                desc: "Expert technicians trained by AC manufacturers"
              },
              {
                icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                title: "Transparent Pricing",
                desc: "No hidden charges, pay only for what you need"
              },
              {
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
                title: "Same Day Service",
                desc: "Quick response and same-day service available"
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="backdrop-blur-xl bg-white/60 rounded-2xl border border-white/30 p-6 shadow-lg shadow-slate-200/20 hover:shadow-xl hover:shadow-cyan-200/20 transition-all duration-300 hover:scale-[1.02] text-center"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-100 to-teal-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{feature.title}</h3>
                <p className="text-slate-500 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl" />
        </div>

        {/* Newsletter */}
        <div className="relative border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Get AC Maintenance Tips</h3>
                <p className="text-slate-400">Subscribe for seasonal AC care tips and exclusive offers</p>
              </div>
              <div className="flex w-full max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-5 py-3 bg-white/10 border border-white/20 rounded-l-xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 backdrop-blur-xl"
                />
                <button className="bg-gradient-to-r from-cyan-500 to-teal-600 text-white px-6 py-3 rounded-r-xl font-medium hover:from-cyan-600 hover:to-teal-700 transition-all shadow-lg shadow-cyan-500/25">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-xl flex items-center justify-center">
                   <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <span className="text-xl font-bold">Do<span className="text-cyan-400">-IT</span></span>
              </div>
              <p className="text-slate-400 text-sm mb-6">
                Professional AC repair and maintenance services at your doorstep.
              </p>
              <div className="flex gap-3">
                {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-gradient-to-r hover:from-cyan-500 hover:to-teal-600 transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Services</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">AC Repair</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">AC Service</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">AC Installation</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">AMC Plans</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Company</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Blog</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Support</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">FAQs</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="relative border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
              <p>© {new Date().getFullYear()} Do-IT. All rights reserved.</p>
              <p>Professional AC services at your doorstep</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ACRepair;
