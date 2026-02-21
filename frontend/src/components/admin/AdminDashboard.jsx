import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  fetchDashboardStats,
  fetchAllUsers,
  fetchAllVendors,
  approveVendor,
} from "../../api/adminAPI";

export default function AdminDashboard() {
  const { user, token, isLoggedIn } = useSelector((state) => state.auth);

  const [stats, setStats] = useState([]);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [users, setUsers] = useState([]);
  const [vendors, setVendors] = useState([]);

  // 🔐 Protect admin route
  if (!isLoggedIn) return <Navigate to="/login" />;
  if (user?.role !== "admin") return <Navigate to="/" />;

  // Load dashboard stats
  useEffect(() => {
    const loadStats = async () => {
      const data = await fetchDashboardStats(token);
      setStats([
        { title: "Total Users", value: data.users },
        { title: "Total Vendors", value: data.vendors },
        { title: "Total Admins", value: data.admins },
      ]);
    };
    loadStats();
  }, [token]);

  // Load Users
  useEffect(() => {
    if (activeTab === "users") {
      fetchAllUsers(token).then(setUsers);
    }
  }, [activeTab, token]);

  // Load Vendors
  useEffect(() => {
    if (activeTab === "vendors") {
      fetchAllVendors(token).then(setVendors);
    }
  }, [activeTab, token]);

  // Approve vendor
  const handleApprove = async (vendorId) => {
    await approveVendor(vendorId, token);
    setVendors((prev) =>
      prev.map((v) =>
        v._id === vendorId ? { ...v, isApproved: true } : v // v means all vendors , ...v means copy all old vendors data , :v if nothing happend keep same
      )
    );

      const data = await fetchDashboardStats(token);

  setStats([
    { title: "Total Users", value: data.users },
    { title: "Total Vendors", value: data.vendors },
    { title: "Total Admins", value: data.admins },
  ]);
  };

  return (
    <div className="flex min-h-screen bg-slate-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg p-5">
        <h2 className="text-2xl font-bold text-sky-600 mb-8">Admin Panel</h2>

        <nav className="flex flex-col gap-3">
          {["dashboard", "users", "vendors", "bookings"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-xl font-medium capitalize ${
                activeTab === tab
                  ? "bg-sky-100 text-sky-600"
                  : "hover:bg-sky-50"
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6">
          Welcome, {user.username}
        </h1>

        {/* Dashboard */}
        {activeTab === "dashboard" && (
          <div className="grid md:grid-cols-3 gap-6">
            {stats.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow"
              >
                <h3 className="text-gray-500">{item.title}</h3>
                <p className="text-2xl font-bold mt-2">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Users Section */}
        {activeTab === "users" && (
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-bold mb-4">All Users</h2>

            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="p-3 text-left">Name</th>
                  <th className="p-3 text-left">Email</th>
                  <th className="p-3 text-left">Role</th>
                </tr>
              </thead>
              <tbody>
                {users.map((u) => (
                  <tr key={u._id} className="border-t">
                    <td className="p-3">{u.username}</td>
                    <td className="p-3">{u.email}</td>
                    <td className="p-3 capitalize">{u.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Vendors Section */}
        {activeTab === "vendors" && (
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-bold mb-4">
              Vendor Approval
            </h2>

            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="p-3 text-left">Business</th>
                  <th className="p-3 text-left">Email</th>
                  <th className="p-3 text-left">Status</th>
                  <th className="p-3 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {vendors.map((v) => (
                  <tr key={v._id} className="border-t">
                    <td className="p-3">{v.businessName}</td>
                    <td className="p-3">{v.email}</td>
                    <td className="p-3">
                      {v.isApproved ? (
                        <span className="text-green-600 font-semibold">
                          Approved
                        </span>
                      ) : (
                        <span className="text-yellow-600 font-semibold">
                          Pending
                        </span>
                      )}
                    </td>
                    <td className="p-3">
                      {!v.isApproved && (
                        <button
                          onClick={() =>
                            handleApprove(v._id)
                          }
                          className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600"
                        >
                          Approve
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Bookings Placeholder */}
        {activeTab === "bookings" && (
          <h2 className="text-xl font-bold">
            Booking Management Coming Soon
          </h2>
        )}
      </div>
    </div>
  );
}
