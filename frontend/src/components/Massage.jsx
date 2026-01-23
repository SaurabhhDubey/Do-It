'use client';

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Massage = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cart, setCart] = useState([]);

  const categories = ["All", "Relaxation", "Therapeutic", "Ayurvedic", "Couples", "Facial"];

  const services = [
    // Relaxation
    { id: 1, name: "Swedish Massage", category: "Relaxation", price: 1499, duration: "60 min", rating: 4.9, reviews: 2847, image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=300&fit=crop", description: "Full body relaxation massage" },
    { id: 2, name: "Aromatherapy Massage", category: "Relaxation", price: 1799, duration: "75 min", rating: 4.8, reviews: 1956, image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=400&h=300&fit=crop", description: "Essential oils relaxation therapy" },
    { id: 3, name: "Hot Stone Massage", category: "Relaxation", price: 2199, duration: "90 min", rating: 4.9, reviews: 1654, image: "https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=400&h=300&fit=crop", description: "Heated stones for deep relaxation" },
    { id: 4, name: "Head & Scalp Massage", category: "Relaxation", price: 699, duration: "30 min", rating: 4.7, reviews: 3241, image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&h=300&fit=crop", description: "Stress relief head massage" },
    
    // Therapeutic
    { id: 5, name: "Deep Tissue Massage", category: "Therapeutic", price: 1899, duration: "60 min", rating: 4.8, reviews: 2156, image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=400&h=300&fit=crop", description: "Target deep muscle tension" },
    { id: 6, name: "Sports Massage", category: "Therapeutic", price: 1699, duration: "60 min", rating: 4.7, reviews: 1823, image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=300&fit=crop", description: "For athletes and active lifestyle" },
    { id: 7, name: "Back Pain Relief", category: "Therapeutic", price: 1299, duration: "45 min", rating: 4.9, reviews: 2934, image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop", description: "Targeted back pain therapy" },
    { id: 8, name: "Neck & Shoulder Therapy", category: "Therapeutic", price: 999, duration: "30 min", rating: 4.8, reviews: 2567, image: "https://images.unsplash.com/photo-1552693673-1bf958298935?w=400&h=300&fit=crop", description: "Relief for desk workers" },
    
    // Ayurvedic
    { id: 9, name: "Abhyanga Massage", category: "Ayurvedic", price: 2499, duration: "90 min", rating: 4.9, reviews: 1432, image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=400&h=300&fit=crop", description: "Traditional warm oil massage" },
    { id: 10, name: "Shirodhara", category: "Ayurvedic", price: 2999, duration: "60 min", rating: 4.9, reviews: 987, image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&h=300&fit=crop", description: "Warm oil forehead therapy" },
    { id: 11, name: "Potli Massage", category: "Ayurvedic", price: 1999, duration: "75 min", rating: 4.8, reviews: 1156, image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=400&h=300&fit=crop", description: "Herbal pouch therapy" },
    { id: 12, name: "Pizhichil", category: "Ayurvedic", price: 3499, duration: "90 min", rating: 4.9, reviews: 654, image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&h=300&fit=crop", description: "Royal oil bath treatment" },
    
    // Couples
    { id: 13, name: "Couples Swedish", category: "Couples", price: 2799, duration: "60 min", rating: 4.9, reviews: 1876, image: "https://images.unsplash.com/photo-1591343395082-e120087004b4?w=400&h=300&fit=crop", description: "Side-by-side relaxation" },
    { id: 14, name: "Couples Aromatherapy", category: "Couples", price: 3299, duration: "75 min", rating: 4.8, reviews: 1234, image: "https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?w=400&h=300&fit=crop", description: "Romantic aromatherapy session" },
    { id: 15, name: "Couples Hot Stone", category: "Couples", price: 3999, duration: "90 min", rating: 4.9, reviews: 876, image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=300&fit=crop", description: "Premium couples experience" },
    { id: 16, name: "Couples Spa Package", category: "Couples", price: 5999, duration: "120 min", rating: 4.9, reviews: 543, image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&h=300&fit=crop", description: "Complete spa day for two" },
    
    // Facial
    { id: 17, name: "Classic Facial", category: "Facial", price: 1299, duration: "45 min", rating: 4.7, reviews: 2341, image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=300&fit=crop", description: "Deep cleansing facial" },
    { id: 18, name: "Anti-Aging Facial", category: "Facial", price: 1999, duration: "60 min", rating: 4.8, reviews: 1654, image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=400&h=300&fit=crop", description: "Rejuvenating treatment" },
    { id: 19, name: "Hydrating Facial", category: "Facial", price: 1599, duration: "50 min", rating: 4.8, reviews: 1876, image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&h=300&fit=crop", description: "Deep hydration therapy" },
    { id: 20, name: "Gold Facial", category: "Facial", price: 2999, duration: "75 min", rating: 4.9, reviews: 987, image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&h=300&fit=crop", description: "Luxury gold leaf treatment" },
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

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-violet-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-fuchsia-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-white/20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center cursor-pointer" onClick={() => navigate("/")}>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-200/50">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <span className="text-2xl font-bold text-gray-900">Do<span className="text-purple-600">-IT</span></span>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors font-medium">Services</a>
              <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors font-medium">About</a>
              <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors font-medium">Contact</a>
            </nav>

            <div className="flex items-center gap-4">
              <button className="relative p-2 text-gray-600 hover:text-purple-600 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-purple-500 to-violet-600 text-white text-xs rounded-full flex items-center justify-center font-medium">
                    {cart.length}
                  </span>
                )}
              </button>
              <button 
                className="bg-gradient-to-r from-purple-500 to-violet-600 text-white px-6 py-2.5 rounded-full font-medium hover:shadow-lg hover:shadow-purple-300/50 transition-all duration-300 hover:scale-105"
                onClick={() => navigate("/login")}
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
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100/80 backdrop-blur-sm rounded-full text-purple-700 text-sm font-medium mb-6">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                Premium Spa & Massage
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Relax, Rejuvenate & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-violet-600">Restore</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Experience the ultimate relaxation with our professional massage therapists. From Swedish to Ayurvedic, we bring the spa experience to your doorstep.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Certified Therapists</p>
                    <p className="text-sm text-gray-500">100% trained professionals</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Flexible Timing</p>
                    <p className="text-sm text-gray-500">Book at your convenience</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-violet-400/20 rounded-3xl blur-2xl"></div>
              <img
                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=500&fit=crop"
                alt="Massage Therapy"
                className="relative rounded-3xl shadow-2xl shadow-purple-200/50 w-full object-cover"
              />
              <div className="absolute -bottom-6 -left-6 backdrop-blur-xl bg-white/80 rounded-2xl p-4 shadow-xl border border-white/20">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">4.9</p>
                    <p className="text-sm text-gray-500">25K+ Reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Massage Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our wide range of massage and spa treatments designed to relax your body and mind
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-purple-500 to-violet-600 text-white shadow-lg shadow-purple-300/50"
                    : "bg-white/80 backdrop-blur-sm text-gray-600 hover:bg-purple-50 border border-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="group backdrop-blur-xl bg-white/70 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-purple-200/50 transition-all duration-500 border border-white/20 hover:scale-[1.02]"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 right-4 backdrop-blur-md bg-white/90 px-3 py-1 rounded-full text-sm font-medium text-purple-700">
                    {service.duration}
                  </div>
                  <div className="absolute bottom-4 left-4 flex items-center gap-1 text-white">
                    <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                    <span className="font-medium">{service.rating}</span>
                    <span className="text-white/80 text-sm">({service.reviews.toLocaleString()})</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{service.name}</h3>
                      <p className="text-gray-500 text-sm">{service.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div>
                      <span className="text-2xl font-bold text-gray-900">₹{service.price.toLocaleString()}</span>
                    </div>
                    {isInCart(service.id) ? (
                      <button
                        onClick={() => removeFromCart(service.id)}
                        className="flex items-center gap-2 bg-purple-100 text-purple-700 px-5 py-2.5 rounded-full font-medium hover:bg-purple-200 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Added
                      </button>
                    ) : (
                      <button
                        onClick={() => addToCart(service)}
                        className="bg-gradient-to-r from-purple-500 to-violet-600 text-white px-5 py-2.5 rounded-full font-medium hover:shadow-lg hover:shadow-purple-300/50 transition-all duration-300 hover:scale-105"
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
      </section>

      {/* Booking Summary - Fixed on Desktop */}
      {cart.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 lg:bottom-8 lg:left-auto lg:right-8 lg:w-96 z-40">
          <div className="backdrop-blur-xl bg-white/90 lg:rounded-3xl shadow-2xl border border-white/20 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900">Your Booking</h3>
              <span className="text-sm text-gray-500">{cart.length} service{cart.length > 1 ? 's' : ''}</span>
            </div>
            <div className="max-h-40 overflow-y-auto mb-4 space-y-3">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center justify-between bg-purple-50/50 rounded-xl p-3">
                  <div className="flex-1">
                    <p className="font-medium text-gray-900 text-sm">{item.name}</p>
                    <p className="text-xs text-gray-500">{item.duration}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-gray-900">₹{item.price.toLocaleString()}</span>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-gray-200 pt-4">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-600">Total Amount</span>
                <span className="text-2xl font-bold text-gray-900">₹{totalPrice.toLocaleString()}</span>
              </div>
              <button className="w-full bg-gradient-to-r from-purple-500 to-violet-600 text-white py-4 rounded-2xl font-semibold hover:shadow-lg hover:shadow-purple-300/50 transition-all duration-300 hover:scale-[1.02]">
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Why Choose Us */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience the difference with our premium massage services
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", title: "Certified Therapists", desc: "100% trained & verified professionals" },
              { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", title: "Flexible Timing", desc: "Book slots at your convenience" },
              { icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z", title: "Premium Products", desc: "Only the best oils & products" },
              { icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z", title: "Hygienic Service", desc: "Sanitized equipment always" },
            ].map((feature, index) => (
              <div
                key={index}
                className="backdrop-blur-xl bg-white/70 rounded-3xl p-6 text-center hover:shadow-xl hover:shadow-purple-200/30 transition-all duration-300 border border-white/20 hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-200/50">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white relative mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <span className="text-xl font-bold">Do<span className="text-purple-400">-IT</span></span>
              </div>
              <p className="text-gray-400 text-sm mb-6">
                Premium massage and spa services at your doorstep. Relax, rejuvenate, and restore with our expert therapists.
              </p>
              <div className="flex gap-4">
                {['M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z', 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z', 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z'].map((path, i) => (
                  <a key={i} href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d={path}/></svg>
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Services</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Swedish Massage</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Deep Tissue</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Aromatherapy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Couples Spa</a></li>
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
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
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

export default Massage;
