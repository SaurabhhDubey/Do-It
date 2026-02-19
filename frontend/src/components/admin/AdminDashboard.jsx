import { useSelector } from "react-redux";
import { Navigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchDashboardStats , fetchAllUsers } from "../../api/adminAPI";




export default function AdminDashboard() {
  const { user,token, isLoggedIn } = useSelector((state) => state.auth);
  


  const [stats, setStats] = useState([]);


  // 🔐 Protect admin route
  if (!isLoggedIn) return <Navigate to="/login" />;
  if (user?.role !== "admin") return <Navigate to="/" />;
  

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

  return (
    <div className="flex min-h-screen bg-slate-100">
      {/* ================= SIDEBAR ================= */}
      <div className="w-64 bg-white shadow-lg p-5">
        <h2 className="text-2xl font-bold text-sky-600 mb-8">Admin Panel</h2>

        <nav className="flex flex-col gap-3">
          <Link className="px-4 py-2 rounded-xl hover:bg-sky-50 font-medium" to="/admin">
            Dashboard
          </Link>

          <Link className="px-4 py-2 rounded-xl hover:bg-sky-50 font-medium" to="/admin/users">
            Users
          </Link>

          <Link className="px-4 py-2 rounded-xl hover:bg-sky-50 font-medium" to="/admin/vendors">
            Vendors
          </Link>

          <Link className="px-4 py-2 rounded-xl hover:bg-sky-50 font-medium" to="/admin/bookings">
            Bookings
          </Link>
        </nav>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="flex-1 p-6">
        {/* Header */}
        <h1 className="text-3xl font-bold text-slate-800 mb-6">
          Welcome, {user.username} 
        </h1>

        {/* ================= DASHBOARD STATS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-slate-500 text-sm">{item.title}</h3>
              <p className="text-2xl font-bold text-slate-800 mt-2">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        {/* ================= RECENT ACTIVITY TABLE ================= */}
        <div className="mt-8 bg-white rounded-2xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Users</h2>

          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b">
                <th className="py-2">Name</th>
                <th>Email</th>
                <th>Role</th>
              </tr>
            </thead>

            <tbody>
              {/* Dummy rows → later from backend */}
              <tr className="border-b">
                <td className="py-2">Rahul Sharma</td>
                <td>rahul@mail.com</td>
                <td>User</td>
              </tr>

              <tr className="border-b">
                <td className="py-2">Amit Verma</td>
                <td>amit@mail.com</td>
                <td>Vendor</td>
              </tr>

              <tr>
                <td className="py-2">Admin</td>
                <td>admin@mail.com</td>
                <td>Admin</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
