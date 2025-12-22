

const Home = () => {
  return (
  <div>
   <header className="sticky top-0 z-50 bg-white border-b">
      <div className="flex items-center justify-between px-8 py-3">

        {/* Left */}
        <div className="flex items-center gap-6">
        <div className="flex items-center cursor-pointer">
  <span className="text-2xl font-extrabold tracking-tight">
    Do
  </span>
  <span className="text-2xl font-extrabold mx-1">-</span>
  <span className="text-2xl font-extrabold text-gray-600">
    IT
  </span>
</div>

          <div className="flex items-center gap-1 text-sm border px-3 py-1 rounded-md cursor-pointer">
            <span>📍</span>
            <span>Lucknow</span>
          </div>
        </div>

        {/* Search */}
        <div className="flex-1 mx-10">
          <input
            type="text"
            placeholder="Search for services (Salon, AC Repair, Cleaning...)"
            className="w-full px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-black"
          />
        </div>

        {/* Right */}
        <div className="flex items-center gap-6 text-sm font-medium">
          <button className="hover:underline">Login</button>
          <button className="bg-black text-white px-4 py-2 rounded-md hover:opacity-90">
            Sign Up
          </button>
        </div>

      </div>
    </header>
  </div>

      
  );
};

export default Home;
