'use client';

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Painting = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("Interior");
  const [cart, setCart] = useState([]);

  const categories = ["Interior", "Exterior", "Texture", "Waterproofing", "Wood & Metal"];

  const services = [
    // Interior
    { id: 1, name: "1 Room Painting", category: "Interior", price: 2499, duration: "1 day", rating: 4.8, reviews: 1240, image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=400" },
    { id: 2, name: "2 Room Painting", category: "Interior", price: 4499, duration: "2 days", rating: 4.9, reviews: 980, image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400" },
    { id: 3, name: "Full Home (2 BHK)", category: "Interior", price: 12999, duration: "4-5 days", rating: 4.8, reviews: 756, image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400" },
    { id: 4, name: "Full Home (3 BHK)", category: "Interior", price: 18999, duration: "5-7 days", rating: 4.9, reviews: 542, image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400" },
    
    // Exterior
    { id: 5, name: "Exterior Wall Painting", category: "Exterior", price: 8999, duration: "3-4 days", rating: 4.7, reviews: 423, image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400" },
    { id: 6, name: "Balcony Painting", category: "Exterior", price: 2999, duration: "1 day", rating: 4.8, reviews: 312, image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400" },
    { id: 7, name: "Terrace Painting", category: "Exterior", price: 5999, duration: "2 days", rating: 4.6, reviews: 287, image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400" },
    { id: 8, name: "Building Exterior", category: "Exterior", price: 45999, duration: "7-10 days", rating: 4.9, reviews: 156, image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400" },
    
    // Texture
    { id: 9, name: "Texture Wall (per wall)", category: "Texture", price: 3499, duration: "1 day", rating: 4.8, reviews: 534, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400" },
    { id: 10, name: "Stencil Design", category: "Texture", price: 1999, duration: "4-5 hrs", rating: 4.7, reviews: 423, image: "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=400" },
    { id: 11, name: "Wallpaper Installation", category: "Texture", price: 1499, duration: "3-4 hrs", rating: 4.9, reviews: 678, image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=400" },
    { id: 12, name: "3D Wall Art", category: "Texture", price: 5999, duration: "2 days", rating: 4.8, reviews: 234, image: "https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?w=400" },
    
    // Waterproofing
    { id: 13, name: "Bathroom Waterproofing", category: "Waterproofing", price: 4999, duration: "1 day", rating: 4.8, reviews: 567, image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400" },
    { id: 14, name: "Terrace Waterproofing", category: "Waterproofing", price: 8999, duration: "2-3 days", rating: 4.7, reviews: 423, image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400" },
    { id: 15, name: "Wall Seepage Treatment", category: "Waterproofing", price: 2999, duration: "1 day", rating: 4.6, reviews: 345, image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=400" },
    { id: 16, name: "Tank Waterproofing", category: "Waterproofing", price: 3999, duration: "1 day", rating: 4.8, reviews: 234, image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=400" },
    
    // Wood & Metal
    { id: 17, name: "Door Painting (per door)", category: "Wood & Metal", price: 799, duration: "2-3 hrs", rating: 4.8, reviews: 876, image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400" },
    { id: 18, name: "Window Painting", category: "Wood & Metal", price: 599, duration: "1-2 hrs", rating: 4.7, reviews: 543, image: "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=400" },
    { id: 19, name: "Grill Painting", category: "Wood & Metal", price: 999, duration: "2-3 hrs", rating: 4.6, reviews: 432, image: "https://images.unsplash.com/photo-1600566752734-2a0cd66c42f9?w=400" },
    { id: 20, name: "Furniture Polishing", category: "Wood & Metal", price: 1499, duration: "3-4 hrs", rating: 4.9, reviews: 654, image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400" },
  ];

  const filteredServices = services.filter(service => service.category === selectedCategory);

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-yellow-200/25 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-white/20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center cursor-pointer" onClick={() => navigate("/")}>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-200/50">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <span className="text-2xl font-bold text-gray-900">Do<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-600">-IT</span></span>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <button onClick={() => navigate("/")} className="text-gray-600 hover:text-orange-600 font-medium transition-colors">Home</button>
              <button className="text-orange-600 font-medium">Painting</button>
          
            </nav>

            <div className="flex items-center gap-4">
              <div className="relative">
                <button className="p-2 rounded-full bg-gradient-to-br from-orange-100 to-amber-100 hover:from-orange-200 hover:to-amber-200 transition-all">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  {cart.length > 0 && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs rounded-full flex items-center justify-center font-medium">
                      {cart.length}
                    </span>
                  )}
                </button>
              </div>
              <button 
                onClick={() => navigate("/login")}
                className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-2.5 rounded-full font-medium hover:shadow-lg hover:shadow-orange-200/50 transition-all hover:scale-105"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-amber-100 px-4 py-2 rounded-full mb-6">
                <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.71 4.04c-.18-.18-.43-.29-.71-.29H4c-.28 0-.53.11-.71.29-.18.18-.29.43-.29.71v14.5c0 .28.11.53.29.71.18.18.43.29.71.29h16c.28 0 .53-.11.71-.29.18-.18.29-.43.29-.71V4.75c0-.28-.11-.53-.29-.71zM8 19H5v-3h3v3zm0-5H5v-3h3v3zm0-5H5V6h3v3zm11 10h-9v-3h9v3zm0-5h-9v-3h9v3zm0-5h-9V6h9v3z"/>
                </svg>
                <span className="text-orange-700 font-medium text-sm">Professional Painting Services</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                Transform Your Space with 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-600"> Expert Painting</span>
              </h1>
              <p className="text-gray-600 text-lg mb-8">
                Premium quality paints and skilled painters for your home. Get vibrant, long-lasting finishes with our professional services.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-100 to-amber-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">3-Year Warranty</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-100 to-amber-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Expert Painters</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-amber-400/20 rounded-3xl blur-2xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600" 
                alt="Professional Painting Service"
                className="relative rounded-3xl shadow-2xl shadow-orange-200/30 w-full object-cover h-80 lg:h-96"
              />
              <div className="absolute -bottom-4 -left-4 backdrop-blur-xl bg-white/80 rounded-2xl p-4 shadow-xl border border-white/20">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">10,000+</p>
                    <p className="text-sm text-gray-500">Homes Painted</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Painting Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Choose from our wide range of painting services with premium quality paints and finishes</p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-200/50 scale-105"
                    : "bg-white/70 backdrop-blur-sm text-gray-600 hover:bg-orange-50 border border-gray-200/50"
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
                    className="group backdrop-blur-xl bg-white/70 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 hover:scale-[1.02]"
                  >
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={service.image || "/placeholder.svg"}
                        alt={service.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-3 right-3 backdrop-blur-md bg-white/90 px-3 py-1 rounded-full">
                        <div className="flex items-center gap-1">
                          <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <span className="text-sm font-medium text-gray-700">{service.rating}</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-gray-900 text-lg mb-2">{service.name}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {service.duration}
                        </span>
                        <span>({service.reviews} reviews)</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-600">₹{service.price}</span>
                        </div>
                        {isInCart(service.id) ? (
                          <button
                            onClick={() => removeFromCart(service.id)}
                            className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-5 py-2.5 rounded-full font-medium transition-all"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Added
                          </button>
                        ) : (
                          <button
                            onClick={() => addToCart(service)}
                            className="bg-gradient-to-r from-orange-100 to-amber-100 text-orange-600 px-5 py-2.5 rounded-full font-medium hover:from-orange-500 hover:to-amber-500 hover:text-white transition-all hover:shadow-lg hover:shadow-orange-200/50"
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
              <div className="sticky top-24 backdrop-blur-xl bg-white/70 rounded-2xl p-6 shadow-xl border border-white/20">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  Booking Summary
                </h3>

                {cart.length === 0 ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <p className="text-gray-500">No services selected</p>
                    <p className="text-sm text-gray-400 mt-1">Add services to proceed</p>
                  </div>
                ) : (
                  <>
                    <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                      {cart.map((item) => (
                        <div key={item.id} className="flex items-center justify-between p-3 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl">
                          <div className="flex-1">
                            <p className="font-medium text-gray-900 text-sm">{item.name}</p>
                            <p className="text-orange-600 font-semibold">₹{item.price}</p>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="p-1.5 hover:bg-red-100 rounded-full transition-colors"
                          >
                            <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      ))}
                    </div>

                    <div className="border-t border-gray-200 pt-4 mb-6">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Total Amount</span>
                        <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-600">₹{totalPrice}</span>
                      </div>
                    </div>

                    <button className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-orange-200/50 transition-all hover:scale-[1.02]">
                      Proceed to Book
                    </button>
                  </>
                )}

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center gap-3 text-sm text-gray-500">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span>100% Satisfaction Guaranteed</span>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Why Choose Our Painting Services?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We deliver exceptional painting results with premium quality materials and expert craftsmanship</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", title: "Premium Paints", desc: "Asian Paints & Berger certified products" },
              { icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z", title: "Expert Painters", desc: "Trained & background verified professionals" },
              { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", title: "On-Time Delivery", desc: "Project completed as per schedule" },
              { icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", title: "3-Year Warranty", desc: "Free touch-ups within warranty period" },
            ].map((feature, index) => (
              <div key={index} className="backdrop-blur-xl bg-white/70 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 border border-white/20 hover:scale-105">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-orange-200/30">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-500">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <span className="text-xl font-bold">Do<span className="text-orange-400">-IT</span></span>
              </div>
              <p className="text-gray-400 text-sm mb-6">Quality painting services at your doorstep with premium materials and expert painters.</p>
              <div className="flex gap-4">
                {["M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z", "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z", "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"].map((path, i) => (
                  <a key={i} href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d={path}/></svg>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Services</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Interior Painting</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Exterior Painting</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Texture Painting</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Waterproofing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Wood & Metal</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Company</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Support</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <p className="text-center text-sm text-gray-400">© {new Date().getFullYear()} Do-IT. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Painting;
