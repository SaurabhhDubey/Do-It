const SalonBooking = () => {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* HERO SECTION */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-8 py-10 flex gap-10 items-center">
          
          <div className="w-1/2">
            <h1 className="text-3xl font-bold mb-3">
              Salon for Women
            </h1>
            <p className="text-gray-600 mb-4">
              Professional salon services at home by verified experts.
            </p>

            <div className="flex items-center gap-4 text-sm">
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                ⭐ 4.8 (12k reviews)
              </span>
              <span className="text-gray-500">
                ⏱ Avg. 60 mins
              </span>
            </div>
          </div>

          <div className="w-1/2 h-64 rounded-xl overflow-hidden">
            <img
              src="https://res.cloudinary.com/dyjmgpb5p/image/upload/v1767066757/Bold_Style_Fresh_Vibes_%EF%B8%8F_b32cl6.jpg"
              alt="Salon"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-8 py-10 flex gap-8">

        {/* LEFT: SERVICES */}
        <div className="w-2/3">

          {/* CATEGORY TABS */}
          <div className="flex gap-6 mb-8 border-b pb-3 text-sm font-medium">
            <span className="border-b-2 border-black pb-2 cursor-pointer">
              Hair
            </span>
            <span className="text-gray-500 cursor-pointer">Facial</span>
            <span className="text-gray-500 cursor-pointer">Waxing</span>
            <span className="text-gray-500 cursor-pointer">Cleanup</span>
          </div>

          {/* SERVICE CARD */}
          <div className="bg-white border rounded-xl p-6 mb-6 flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold">
                Haircut & Styling
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                Professional haircut with blow-dry
              </p>
              <span className="text-sm font-medium">
                ₹499 • 45 mins
              </span>
            </div>

            <button className="border px-6 py-2 rounded-md hover:bg-black hover:text-white transition">
              Add
            </button>
          </div>

          <div className="bg-white border rounded-xl p-6 mb-6 flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold">
                Facial & Cleanup
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                Glow facial with deep cleansing
              </p>
              <span className="text-sm font-medium">
                ₹699 • 60 mins
              </span>
            </div>

            <button className="border px-6 py-2 rounded-md hover:bg-black hover:text-white transition">
              Add
            </button>
          </div>

          <div className="bg-white border rounded-xl p-6 mb-6 flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold">
                Manicure & Pedicure
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                Complete hand & foot care
              </p>
              <span className="text-sm font-medium">
                ₹799 • 70 mins
              </span>
            </div>

            <button className="border px-6 py-2 rounded-md hover:bg-black hover:text-white transition">
              Add
            </button>
          </div>
        </div>

        {/* RIGHT: BOOKING SUMMARY */}
        <div className="w-1/3">
          <div className="bg-white border rounded-xl p-6 sticky top-24">
            <h3 className="text-lg font-semibold mb-4">
              Booking Summary
            </h3>

            <p className="text-sm text-gray-600 mb-4">
              No services added yet
            </p>

            <div className="border-t pt-4">
              <div className="flex justify-between mb-2">
                <span>Total</span>
                <span className="font-semibold">₹0</span>
              </div>

              <button className="w-full bg-black text-white py-3 rounded-md mt-4">
                Proceed to Book
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SalonBooking;
