'use client';
import {useNavigate } from "react-router-dom";
// import { useRouter } from "next/navigation";

const Home = () => {
  // const router = useRouter();
  // const navigate = (path) => router.push(path);
  const navigate = useNavigate();
  const services = [
    {
      id: 1,
      title: "Salon",
      icon: "https://res.cloudinary.com/dyjmgpb5p/image/upload/v1767024947/saloon_dskirs.jpg",
      path: "/salon",
    },
    {
      id: 2,
      title: "AC Repair",
      icon: "https://res.cloudinary.com/dyjmgpb5p/image/upload/v1767025096/AC_Repair_in_Shepherd_TX_oq5hw7.jpg",
      path: null,
    },
    {
      id: 3,
      title: "Cleaning",
      icon: "https://res.cloudinary.com/dyjmgpb5p/image/upload/v1767062995/Leaning_equipment_a_bucket_of_water_a_mop_detergents_isolated_on_a_white_background_vector_illustration_in_bright_colors___Premium_Vector_xxiz11.jpg",
      path: null,
    },
    {
      id: 4,
      title: "Electrician",
      icon: "https://res.cloudinary.com/dyjmgpb5p/image/upload/v1767031431/download_1_tqcfou.jpg",
      path: null,
    },
    {
      id: 5,
      title: "Plumber",
      icon: "https://cdn-icons-png.flaticon.com/512/609/609803.png",
      path: null,
    },
    {
      id: 6,
      title: "Painting",
      icon: "https://cdn-icons-png.flaticon.com/512/1995/1995471.png",
      path: null,
    },
  ];

  const featuredServices = [
    {
      id: 1,
      title: "Home Cleaning",
      description: "Professional cleaning service for your home",
      image: "https://res.cloudinary.com/dyjmgpb5p/image/upload/v1767066749/%D0%9C%D1%83%D0%B6%D1%87%D0%B8%D0%BD%D0%B0_%D0%B2%D0%B8%D0%B4_%D1%81%D0%BF%D0%B5%D1%80%D0%B5%D0%B4%D0%B8_%D1%83%D0%B1%D0%B8%D1%80%D0%B0%D0%B5%D1%82_%D0%B2_%D0%BF%D0%BE%D0%BC%D0%B5%D1%89%D0%B5%D0%BD%D0%B8%D0%B8___%D0%91%D0%B5%D1%81%D0%BF%D0%BB%D0%B0%D1%82%D0%BD%D0%BE%D0%B5_%D1%84%D0%BE%D1%82%D0%BE_tuvzoj.jpg",
      path: null,
      gradient: "from-emerald-400 to-teal-500",
    },
    {
      id: 2,
      title: "Salon",
      description: "Get haircut and makeup for men and women",
      image: "https://res.cloudinary.com/dyjmgpb5p/image/upload/v1767066757/Bold_Style_Fresh_Vibes_%EF%B8%8F_b32cl6.jpg",
      path: "/salon",
      gradient: "from-rose-400 to-pink-500",
    },
    {
      id: 3,
      title: "Massage",
      description: "Relaxing massage for men and women",
      image: "https://res.cloudinary.com/dyjmgpb5p/image/upload/v1767066766/Massage_su%C3%A9dois___tout_savoir_sur_le_massage_su%C3%A9dois_-_Elle_is1iqc.jpg",
      path: null,
      gradient: "from-violet-400 to-purple-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-50">
      {/* TOP BAR */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between py-2.5 text-sm gap-2 sm:gap-0">
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              <a href="mailto:contact@do-it.com" className="flex items-center gap-2 hover:text-sky-300 transition-colors duration-300">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>contact@do-it.com</span>
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-sky-300 transition-colors duration-300">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>(234) 567-8900</span>
              </a>
              <span className="hidden md:flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>123 Main St, New York, NY</span>
              </span>
            </div>
            <div className="flex items-center gap-4">
              {[
                { label: "Facebook", path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
                { label: "Twitter", path: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" },
                { label: "Instagram", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" },
                { label: "LinkedIn", path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
              ].map((social) => (
                <a key={social.label} href="#" className="hover:text-sky-300 transition-colors duration-300 hover:scale-110 transform" aria-label={social.label}>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d={social.path}/></svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* HEADER - Glassmorphism */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-white/20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center cursor-pointer group" onClick={() => navigate("/")}>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-sky-400 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg shadow-sky-200/50 group-hover:shadow-sky-300/50 transition-all duration-300 group-hover:scale-105">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">Do<span className="bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">-IT</span></span>
              </div>
            </div>

            {/* Search Bar - Hidden on mobile */}
            <div className="hidden md:flex flex-1 max-w-xl mx-8">
              <div className="relative w-full group">
                <input
                  type="text"
                  placeholder="Search for services (Salon, AC Repair, Cleaning...)"
                  className="w-full pl-12 pr-4 py-3 bg-white/60 backdrop-blur-sm border border-slate-200/50 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-400/50 focus:bg-white focus:border-sky-300 transition-all duration-300 shadow-sm hover:shadow-md"
                />
                <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-sky-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Navigation & Auth */}
            <div className="flex items-center gap-3">
              <button 
                className="text-slate-600 hover:text-sky-600 font-medium transition-all duration-300 px-4 py-2 rounded-xl hover:bg-sky-50" 
                onClick={() => navigate("Login")}
              >
                Login
              </button>
              <button 
                className="bg-gradient-to-r from-sky-500 to-indigo-500 text-white px-6 py-2.5 rounded-xl font-medium hover:from-sky-600 hover:to-indigo-600 transition-all duration-300 shadow-lg shadow-sky-200/50 hover:shadow-sky-300/50 hover:scale-105" 
                onClick={() => navigate("register")}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-sky-200/40 to-indigo-200/40 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-20 -left-20 w-60 h-60 bg-gradient-to-br from-rose-200/30 to-orange-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-gradient-to-br from-emerald-200/30 to-teal-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-100 to-indigo-100 text-sky-700 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
                <span className="w-2 h-2 bg-sky-500 rounded-full animate-pulse"></span>
                Trusted by 10,000+ customers
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance bg-gradient-to-r from-slate-900 via-slate-700 to-slate-800 bg-clip-text text-transparent">
                Home Services at Your Doorstep
              </h1>
              <p className="text-lg text-slate-600 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Quality services from trusted professionals. Book your home service today and experience the convenience.
              </p>
              
              {/* Mobile Search */}
              <div className="md:hidden mb-8">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search for services..."
                    className="w-full pl-12 pr-4 py-4 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400/50 shadow-lg"
                  />
                  <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>

              {/* Service Icons Grid - Glassmorphism Card */}
              <div className="backdrop-blur-xl bg-white/70 rounded-3xl p-6 shadow-xl shadow-slate-200/50 border border-white/50">
                <h3 className="text-slate-500 text-sm font-medium mb-5 text-left">What are you looking for?</h3>
                <div className="grid grid-cols-3 gap-3">
                  {services.map((service, index) => (
                    <div
                      key={service.id}
                      className="flex flex-col items-center gap-2 p-3 rounded-2xl cursor-pointer hover:bg-gradient-to-br hover:from-sky-50 hover:to-indigo-50 transition-all duration-300 group hover:scale-105 hover:shadow-lg"
                      onClick={() => service.path && navigate(service.path)}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center overflow-hidden group-hover:from-sky-100 group-hover:to-indigo-100 transition-all duration-300 shadow-sm group-hover:shadow-md">
                        <img
                          src={service.icon || "/placeholder.svg"}
                          alt={service.title}
                          className="w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <p className="text-sm font-medium text-slate-700 group-hover:text-sky-700 transition-colors">{service.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="hidden lg:flex justify-center">
              <div className="relative">
                <div className="absolute -inset-8 bg-gradient-to-br from-sky-200/50 via-indigo-200/30 to-rose-200/30 rounded-full blur-3xl animate-pulse"></div>
                <div className="relative backdrop-blur-sm bg-white/20 rounded-3xl p-4">
                  <img
                    className="relative w-full max-w-md object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                    src="https://res.cloudinary.com/dyjmgpb5p/image/upload/v1766685416/ChatGPT_Image_Dec_25_2025_11_10_10_PM_mvo40m.png"
                    alt="Home Services"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED SERVICES */}
      <section className="py-16 lg:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sky-50/30 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-14">
            <span className="inline-block text-sky-600 font-semibold text-sm uppercase tracking-wider mb-3">What We Offer</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-4">Our Services</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Choose from our wide range of professional home services delivered by trusted experts
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <div
                key={service.id}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-slate-300/50 transition-all duration-500 cursor-pointer border border-slate-100/50 hover:-translate-y-2"
                onClick={() => service.path && navigate(service.path)}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-0 group-hover:opacity-60 transition-opacity duration-500`}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  {/* Floating badge */}
                  <div className="absolute top-4 right-4">
                    <div className="backdrop-blur-md bg-white/20 border border-white/30 px-3 py-1 rounded-full text-white text-xs font-medium">
                      Popular
                    </div>
                  </div>
                  
                  {/* Icon */}
                  <div className="absolute bottom-4 left-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-sky-700 transition-colors">{service.title}</h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">{service.description}</p>
                  <button className="inline-flex items-center gap-2 text-sky-600 font-semibold hover:text-sky-700 transition-all group-hover:gap-3">
                    View Service
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION - Glassmorphism */}
      <section className="relative py-20 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-sky-400/20 to-indigo-400/20 rounded-full blur-2xl"></div>
                <img
                  src="https://res.cloudinary.com/dyjmgpb5p/image/upload/v1766685416/ChatGPT_Image_Dec_25_2025_11_10_10_PM_mvo40m.png"
                  alt="Professional Service"
                  className="relative w-full max-w-sm mx-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance text-white">
                Having a Problem?<br />
                <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">{"We'll Fix It Today!"}</span>
              </h2>
              <p className="text-slate-300 text-lg mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Get instant access to trusted professionals who can solve all your home service needs quickly and efficiently.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href="tel:+1234567890"
                  className="flex items-center gap-3 backdrop-blur-md bg-white/10 border border-white/20 px-6 py-3.5 rounded-2xl hover:bg-white/20 transition-all duration-300 text-white group"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-sky-400 to-indigo-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="font-semibold">(234) 567-8900</span>
                </a>
                <span className="text-slate-500 hidden sm:block">or</span>
                <button 
                  className="bg-gradient-to-r from-sky-500 to-indigo-500 text-white px-8 py-3.5 rounded-2xl font-semibold hover:from-sky-400 hover:to-indigo-400 transition-all duration-300 shadow-lg shadow-sky-500/25 hover:shadow-sky-400/40 hover:scale-105"
                  onClick={() => navigate("register")}
                >
                  Get a Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white">
        {/* Newsletter Section */}
        <div className="border-b border-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">Subscribe to our newsletter</h3>
                <p className="text-slate-400">Get the latest updates and offers delivered to your inbox</p>
              </div>
              <div className="flex w-full max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-5 py-3.5 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-l-2xl text-white placeholder-slate-500 focus:outline-none focus:border-sky-500/50 focus:bg-slate-800 transition-all"
                />
                <button className="bg-gradient-to-r from-sky-500 to-indigo-500 text-white px-6 py-3.5 rounded-r-2xl font-medium hover:from-sky-400 hover:to-indigo-400 transition-all duration-300 shadow-lg">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-10 h-10 bg-gradient-to-br from-sky-400 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <span className="text-xl font-bold">Do<span className="text-sky-400">-IT</span></span>
              </div>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                Quality home services at your doorstep. Trusted professionals, transparent pricing, and quick booking.
              </p>
              <div className="flex gap-3">
                {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((social) => (
                  <a key={social} href="#" className="w-10 h-10 bg-slate-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-sky-500 hover:to-indigo-500 transition-all duration-300 hover:scale-110 border border-slate-700/50 hover:border-transparent" aria-label={social}>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      {social === 'Facebook' && <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>}
                      {social === 'Twitter' && <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>}
                      {social === 'Instagram' && <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>}
                      {social === 'LinkedIn' && <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>}
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-lg mb-5 text-white">Services</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                {['Salon at Home', 'Cleaning', 'AC Repair', 'Electrician', 'Plumber'].map((item) => (
                  <li key={item}><a href="#" className="hover:text-sky-400 transition-colors duration-300">{item}</a></li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold text-lg mb-5 text-white">Company</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                {['About Us', 'Careers', 'Contact Us', 'Blog'].map((item) => (
                  <li key={item}><a href="#" className="hover:text-sky-400 transition-colors duration-300">{item}</a></li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold text-lg mb-5 text-white">Support</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                {['Help Center', 'Terms & Conditions', 'Privacy Policy', 'FAQs'].map((item) => (
                  <li key={item}><a href="#" className="hover:text-sky-400 transition-colors duration-300">{item}</a></li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
              <p>© {new Date().getFullYear()} Do-IT. All rights reserved.</p>
              <p>Designed with care for your home service needs</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}; 

export default Home;
