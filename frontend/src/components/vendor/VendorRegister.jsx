import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { vendorRegister } from '../../api/vendorAPI';
import { useSelector } from "react-redux";



function VendorRegister() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    businessName: '',
    serviceOffered: '',
    experienceYears: '',
    address: '',
    city: '',
    availability: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const serviceOptions = [
    'Salon',
    'AC Repair',
    'Cleaning',
    'Electrician',
    'Plumber',
    'Painting',
    'Massage',
  ];

  const cityOptions = [
  "Delhi",
  "Mumbai",
  "Bengaluru",
  "Hyderabad",
  "Ahmedabad",
  "Chennai",
  "Kolkata",
  "Pune",
  "Jaipur",
  "Lucknow",
  "Kanpur",
  "Nagpur",
  "Indore",
  "Bhopal",
  "Patna",
  "Surat",
  "Chandigarh",
  "Visakhapatnam",
  "Agra",
  "Varanasi",
  "Ranchi",
  "Raipur",
  "Noida",
  "Gurugram",
  "Ghaziabad",
  "Faridabad",
  "Amritsar",
  "Jodhpur",
  "Udaipur",
  "Dehradun"
];


  const availabilityOptions = [
    'Full Time',
    'Part Time',
    'Weekends Only',
    'Flexible',
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.businessName.trim()) {
      newErrors.businessName = 'Business name is required';
    }

    if (!formData.serviceOffered) {
      newErrors.serviceOffered = 'Service offered is required';
    }

    if (!formData.experienceYears) {
      newErrors.experienceYears = 'Experience years is required';
    } else if (isNaN(formData.experienceYears) || formData.experienceYears < 0) {
      newErrors.experienceYears = 'Please enter a valid number';
    }

    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
    }

    if (!formData.city) {
      newErrors.city = 'City is required';
    }

    if (!formData.availability) {
      newErrors.availability = 'Availability is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const token = useSelector((state)=> state.auth.token);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
   if (!token){
    alert("please login first");
    navigate("/");
    return;
   }
   if(validateForm()){
    try{
        const data = await vendorRegister(formData , token);
        if (data.success) {
        setSubmitted(true);

        setTimeout(() => {
          navigate("/vendorPanel");
        }, 2000);
      } else {
        alert(data.message);
      }
    }
    catch(error){
        alert("somthing went wrong");
        console.log("error");
    }
   }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 relative overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-0 w-80 h-80 bg-gradient-to-br from-purple-200 via-indigo-200 to-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center cursor-pointer gap-2" onClick={() => navigate('/')}>
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <span className="text-2xl font-bold text-gray-900">Do<span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">-IT</span></span>
            </div>
            <button
              onClick={() => navigate('/')}
              className="text-gray-600 hover:text-indigo-600 font-medium transition-colors"
            >
              Back to Home
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Section - Info */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 text-balance">
              Join Our Vendor Network
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Grow your business and reach thousands of customers. Register as a vendor and start earning today.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900">Easy Registration</h3>
                  <p className="text-sm text-gray-600">Simple and quick setup process</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900">Grow Your Business</h3>
                  <p className="text-sm text-gray-600">Access to thousands of customers</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900">Transparent Pricing</h3>
                  <p className="text-sm text-gray-600">No hidden fees or surprises</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900">24/7 Support</h3>
                  <p className="text-sm text-gray-600">Dedicated support team</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="relative">
            {submitted && (
              <div className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-3xl flex items-center justify-center z-50">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Registered Successfully!</h3>
                  <p className="text-gray-600 mb-4">Redirecting to home page...</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6 bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Vendor Registration Form</h2>

              {/* Business Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Business Name *
                </label>
                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  placeholder="Enter your business name"
                  className={`w-full px-4 py-3 rounded-xl border-2 bg-white/50 focus:bg-white focus:outline-none transition-all ${
                    errors.businessName ? 'border-red-400 focus:border-red-500' : 'border-indigo-200 focus:border-indigo-500'
                  }`}
                />
                {errors.businessName && <p className="text-red-600 text-sm mt-1">{errors.businessName}</p>}
              </div>

              {/* Service Offered */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Service Offered *
                </label>
                <select
                  name="serviceOffered"
                  value={formData.serviceOffered}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border-2 bg-white/50 focus:bg-white focus:outline-none transition-all ${
                    errors.serviceOffered ? 'border-red-400 focus:border-red-500' : 'border-indigo-200 focus:border-indigo-500'
                  }`}
                >
                  <option value="">Select a service</option>
                  {serviceOptions.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
                {errors.serviceOffered && <p className="text-red-600 text-sm mt-1">{errors.serviceOffered}</p>}
              </div>

              {/* Experience Years */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Years of Experience *
                </label>
                <input
                  type="number"
                  name="experienceYears"
                  value={formData.experienceYears}
                  onChange={handleChange}
                  placeholder="Enter years of experience"
                  min="0"
                  className={`w-full px-4 py-3 rounded-xl border-2 bg-white/50 focus:bg-white focus:outline-none transition-all ${
                    errors.experienceYears ? 'border-red-400 focus:border-red-500' : 'border-indigo-200 focus:border-indigo-500'
                  }`}
                />
                {errors.experienceYears && <p className="text-red-600 text-sm mt-1">{errors.experienceYears}</p>}
              </div>

              {/* Address */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Address *
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter your business address"
                  className={`w-full px-4 py-3 rounded-xl border-2 bg-white/50 focus:bg-white focus:outline-none transition-all ${
                    errors.address ? 'border-red-400 focus:border-red-500' : 'border-indigo-200 focus:border-indigo-500'
                  }`}
                />
                {errors.address && <p className="text-red-600 text-sm mt-1">{errors.address}</p>}
              </div>

              {/* City */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  City *
                </label>
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border-2 bg-white/50 focus:bg-white focus:outline-none transition-all ${
                    errors.city ? 'border-red-400 focus:border-red-500' : 'border-indigo-200 focus:border-indigo-500'
                  }`}
                >
                  <option value="">Select a city</option>
                  {cityOptions.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
                {errors.city && <p className="text-red-600 text-sm mt-1">{errors.city}</p>}
              </div>

              {/* Availability */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Availability *
                </label>
                <select
                  name="availability"
                  value={formData.availability}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border-2 bg-white/50 focus:bg-white focus:outline-none transition-all ${
                    errors.availability ? 'border-red-400 focus:border-red-500' : 'border-indigo-200 focus:border-indigo-500'
                  }`}
                >
                  <option value="">Select availability</option>
                  {availabilityOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {errors.availability && <p className="text-red-600 text-sm mt-1">{errors.availability}</p>}
              </div>

             
           

             

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-[1.02] transition-all duration-200 mt-8"
              >
                Register as Vendor
              </button>

              
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VendorRegister;
