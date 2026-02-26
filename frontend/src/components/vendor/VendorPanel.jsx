import { useState , useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { setVendorStatus } from '../../redux/slices/vendorSlice.js';
import {fetchVendorStatus} from '../../api/vendorAPI.js';
 


const VendorPanel = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);

const dispatch = useDispatch();
const token = useSelector((state)=>state.auth.token);
const vendor = useSelector((state)=> state.vendor);

useEffect(() => {
  if (!token) return;

  const loadVendor = async () => {
    const data = await fetchVendorStatus(token);
    dispatch(setVendorStatus(data));
  };

  loadVendor();
}, [token, dispatch]);
 console.log("VENDOR FROM REDUX:", vendor);

  const [vendorData, setVendorData] = useState({
    businessName: vendor.businessName,
    serviceOffered: 'AC Repair & Maintenance',
    experienceYears: 8,
    address: '123 Main Street',
    city: 'New York',
    availability: 'Mon-Sun, 9AM-8PM',
    email: 'vendor@acservices.com',
    phone: '+1 (555) 123-4567',
    rating: 4.8,
    completedServices: 156,
    totalEarnings: '$12,450'
  });
 






   

  const [bookings, setBookings] = useState([
    {
      id: 1,
      customerName: 'John Doe',
      service: 'AC Gas Refilling',
      date: '2024-02-18',
      time: '10:00 AM',
      status: 'pending',
      amount: '$150'
    },
    {
      id: 2,
      customerName: 'Jane Smith',
      service: 'AC Repair',
      date: '2024-02-19',
      time: '2:00 PM',
      status: 'completed',
      amount: '$200'
    },
    {
      id: 3,
      customerName: 'Mike Johnson',
      service: 'AC Installation',
      date: '2024-02-20',
      time: '11:00 AM',
      status: 'pending',
      amount: '$350'
    }
  ]);

  const [editingProfile, setEditingProfile] = useState(false);
  const [editFormData, setEditFormData] = useState(vendorData);

  const handleUpdateProfile = () => {
    setVendorData(editFormData);
    setEditingProfile(false);
  };

  const handleBookingStatusChange = (id, newStatus) => {
    setBookings(bookings.map(booking =>
      booking.id === id ? { ...booking, status: newStatus } : booking
    ));
  };

  const getStatusBadge = (status) => {
    const statusColors = {
      pending: 'bg-yellow-100/70 text-yellow-800 border border-yellow-300/50',
      completed: 'bg-green-100/70 text-green-800 border border-green-300/50',
      cancelled: 'bg-red-100/70 text-red-800 border border-red-300/50'
    };
    return statusColors[status] || statusColors.pending;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50">
      {/* Animated Background Blobs */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-indigo-300/30 via-purple-300/20 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-32 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-300/20 via-blue-300/15 to-transparent rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-gradient-to-br from-purple-300/20 via-pink-300/15 to-transparent rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <div className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-white/70 backdrop-blur-xl border-r border-white/20 transition-all duration-300 flex flex-col`}>
          {/* Logo */}
          <div className="p-4 border-b border-white/10 flex items-center justify-between">
            {sidebarOpen && (
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="font-bold text-gray-900">Do-IT Vendor</span>
              </div>
            )}
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-1 hover:bg-gray-100 rounded-lg transition-colors">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: '📊' },
              { id: 'bookings', label: 'Bookings', icon: '📅' },
              { id: 'profile', label: 'Profile', icon: '👤' },
              { id: 'reviews', label: 'Reviews', icon: '⭐' },
              { id: 'analytics', label: 'Analytics', icon: '📈' }
            ].map(item => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  activeTab === item.id
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                    : 'text-gray-700 hover:bg-gray-100/50'
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                {sidebarOpen && <span className="font-medium">{item.label}</span>}
              </button>
            ))}
          </nav>

          {/* Logout */}
          <div className="p-4 border-t border-white/10">
            <button
              onClick={() => navigate('/')}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50/50 transition-all duration-200"
            >
              <span className="text-lg">🚪</span>
              {sidebarOpen && <span className="font-medium">Logout</span>}
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          {/* Header */}
          <div className="bg-white/70 backdrop-blur-xl border-b border-white/20 sticky top-0 z-40">
            <div className="px-8 py-4 flex items-center justify-between">
              <h1 className="text-3xl font-bold text-gray-900">
                {activeTab === 'dashboard' && 'Dashboard'}
                {activeTab === 'bookings' && 'My Bookings'}
                {activeTab === 'profile' && 'Profile Settings'}
                {activeTab === 'reviews' && 'Customer Reviews'}
                {activeTab === 'analytics' && 'Analytics'}
              </h1>
              <div className="flex items-center gap-4">
                <div className="hidden md:flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-indigo-100/50 to-purple-100/50 rounded-full border border-indigo-200/30">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    {vendor.businessName?.[0]?.toUpperCase() || "V"}
                  </div>
                  <div className="hidden sm:block">
                    <p className="text-sm font-semibold text-gray-900">{vendor.businessName}</p>
                    <p className="text-xs text-gray-600">Vendor</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="p-8">
            {/* Dashboard Tab */}
            {activeTab === 'dashboard' && (
              <div className="space-y-8">
                {/* Stats Grid */}
                <div className="grid md:grid-cols-4 gap-6">
                  {[
                    { label: 'Total Services', value: vendorData.completedServices, icon: '✅' },
                    { label: 'Rating', value: vendorData.rating, icon: '⭐' },
                    { label: 'Total Earnings', value: vendorData.totalEarnings, icon: '💰' },
                    { label: 'Availability', value: 'Open', icon: '🟢' }
                  ].map((stat, idx) => (
                    <div key={idx} className="bg-white/70 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:shadow-lg hover:bg-white/80 transition-all duration-300">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
                          <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                        </div>
                        <span className="text-3xl">{stat.icon}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Recent Bookings */}
                <div className="bg-white/70 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Bookings</h2>
                  <div className="space-y-3">
                    {bookings.slice(0, 3).map(booking => (
                      <div key={booking.id} className="flex items-center justify-between p-4 bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl border border-white/20 hover:shadow-md transition-all duration-200">
                        <div>
                          <p className="font-semibold text-gray-900">{booking.customerName}</p>
                          <p className="text-sm text-gray-600">{booking.service} • {booking.date}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusBadge(booking.status)}`}>
                          {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Bookings Tab */}
            {activeTab === 'bookings' && (
              <div className="space-y-6">
                <div className="bg-white/70 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
                  <div className="space-y-4">
                    {bookings.map(booking => (
                      <div key={booking.id} className="border border-white/20 rounded-xl p-6 bg-gradient-to-r from-slate-50 to-indigo-50">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-lg font-bold text-gray-900">{booking.customerName}</h3>
                            <p className="text-gray-600">{booking.service}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-bold text-indigo-600">{booking.amount}</p>
                            <p className="text-sm text-gray-600">{booking.date} • {booking.time}</p>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <select
                            value={booking.status}
                            onChange={(e) => handleBookingStatusChange(booking.id, e.target.value)}
                            className={`px-4 py-2 rounded-lg border border-white/20 bg-white/70 backdrop-blur-xl font-medium focus:outline-none transition-all ${getStatusBadge(booking.status)}`}
                          >
                            <option value="pending">Pending</option>
                            <option value="completed">Completed</option>
                            <option value="cancelled">Cancelled</option>
                          </select>
                          <button className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200 hover:scale-[1.02]">
                            Contact Customer
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div className="space-y-6">
                <div className="bg-white/70 backdrop-blur-xl border border-white/20 rounded-2xl p-8">
                  {!editingProfile ? (
                    <div className="space-y-6">
                      <div className="flex items-start justify-between">
                        <div>
                          <h2 className="text-2xl font-bold text-gray-900 mb-6">Business Profile</h2>
                        </div>
                        <button
                          onClick={() => setEditingProfile(true)}
                          className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200 hover:scale-[1.02]"
                        >
                          Edit Profile
                        </button>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        {[
                          { label: 'Business Name', value: vendor.businessName },
                          { label: 'Email', value: vendorData.email },
                          { label: 'Phone', value: vendorData.phone },
                          { label: 'Service Offered', value: vendorData.serviceOffered },
                          { label: 'Experience Years', value: `${vendorData.experienceYears} years` },
                          { label: 'City', value: vendorData.city },
                          { label: 'Address', value: vendorData.address },
                          { label: 'Availability', value: vendorData.availability }
                        ].map((field, idx) => (
                          <div key={idx} className="p-4 bg-gradient-to-br from-slate-50 to-indigo-50 rounded-xl border border-white/20">
                            <p className="text-sm font-semibold text-gray-600 mb-1">{field.label}</p>
                            <p className="text-lg text-gray-900">{field.value}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold text-gray-900">Edit Profile</h2>
                      <div className="grid md:grid-cols-2 gap-6">
                        {[
                          { key: 'businessName', label: 'Business Name' },
                          { key: 'email', label: 'Email' },
                          { key: 'phone', label: 'Phone' },
                          { key: 'serviceOffered', label: 'Service Offered' },
                          { key: 'experienceYears', label: 'Experience Years', type: 'number' },
                          { key: 'city', label: 'City' },
                          { key: 'address', label: 'Address' },
                          { key: 'availability', label: 'Availability' }
                        ].map(field => (
                          <div key={field.key}>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">{field.label}</label>
                            <input
                              type={field.type || 'text'}
                              value={editFormData[field.key]}
                              onChange={(e) => setEditFormData({
                                ...editFormData,
                                [field.key]: e.target.value
                              })}
                              className="w-full px-4 py-3 bg-white/70 backdrop-blur-xl border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900"
                            />
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-3">
                        <button
                          onClick={handleUpdateProfile}
                          className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200 hover:scale-[1.02]"
                        >
                          Save Changes
                        </button>
                        <button
                          onClick={() => setEditingProfile(false)}
                          className="px-6 py-3 bg-white/70 backdrop-blur-xl border border-white/20 text-gray-900 rounded-lg font-medium hover:bg-white/80 transition-all duration-200"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Reviews Tab */}
            {activeTab === 'reviews' && (
              <div className="space-y-6">
                <div className="bg-white/70 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Customer Reviews</h2>
                  <div className="space-y-4">
                    {[
                      { customer: 'John Doe', rating: 5, comment: 'Excellent service and very professional. Highly recommended!' },
                      { customer: 'Jane Smith', rating: 5, comment: 'Quick response and perfect installation. Very satisfied.' },
                      { customer: 'Mike Johnson', rating: 4, comment: 'Good service but took a bit longer than expected.' }
                    ].map((review, idx) => (
                      <div key={idx} className="p-4 bg-gradient-to-r from-slate-50 to-yellow-50 rounded-xl border border-white/20">
                        <div className="flex items-start justify-between mb-2">
                          <p className="font-semibold text-gray-900">{review.customer}</p>
                          <span className="text-lg">{'⭐'.repeat(review.rating)}</span>
                        </div>
                        <p className="text-gray-600">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Analytics Tab */}
            {activeTab === 'analytics' && (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/70 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Monthly Earnings</h3>
                    <div className="space-y-3">
                      {[
                        { month: 'January', amount: '$1,200' },
                        { month: 'February', amount: '$1,850' },
                        { month: 'March', amount: '$2,400' }
                      ].map((data, idx) => (
                        <div key={idx} className="flex items-center justify-between">
                          <p className="text-gray-700">{data.month}</p>
                          <div className="flex items-center gap-2">
                            <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div className="h-full bg-gradient-to-r from-indigo-600 to-purple-600" style={{width: `${(idx + 1) * 30}%`}} />
                            </div>
                            <p className="font-semibold text-gray-900">{data.amount}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white/70 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Services Distribution</h3>
                    <div className="space-y-3">
                      {[
                        { service: 'AC Repair', count: '45%' },
                        { service: 'Gas Refilling', count: '30%' },
                        { service: 'Installation', count: '25%' }
                      ].map((data, idx) => (
                        <div key={idx} className="flex items-center justify-between">
                          <p className="text-gray-700">{data.service}</p>
                          <div className="flex items-center gap-2">
                            <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div className="h-full bg-gradient-to-r from-cyan-600 to-blue-600" style={{width: data.count}} />
                            </div>
                            <p className="font-semibold text-gray-900 min-w-fit">{data.count}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorPanel;
