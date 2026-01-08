import { useState } from "react";
const SalonBooking = () => {
  const [activeCategory, setActiveCategory] = useState("Hair");

  const servicesData = [
    {
      id: 1,
      category: "Hair",
      title: "Haircut & Styling",
      desc: "Professional haircut with blow-dry",
      price: 499,
      time: "45 mins",
    },
    {
      id: 2,
      category: "Hair",
      title: "Hair Spa",
      desc: "Nourishing hair spa treatment",
      price: 799,
      time: "60 mins",
    },
    {
      id: 3,
      category: "Facial",
      title: "Facial & Cleanup",
      desc: "Glow facial with deep cleansing",
      price: 699,
      time: "60 mins",
    },
    {
      id: 4,
      category: "Waxing",
      title: "Full Body Waxing",
      desc: "Smooth & hygienic waxing",
      price: 999,
      time: "75 mins",
    },
    {
      id: 5,
      category: "Cleanup",
      title: "Skin Cleanup",
      desc: "Basic face cleanup",
      price: 399,
      time: "40 mins",
    },
  ];

  const filteredServices = servicesData.filter(
    (service) => service.category === activeCategory
  );

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* ================= HERO SECTION ================= */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-8 py-10 flex gap-10 items-center">

          {/* LEFT TEXT */}
          <div className="w-1/2">
            <h1 className="text-3xl font-bold mb-3">
              Salon for Men and Women
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

          {/* RIGHT IMAGE (RESTORED) */}
          <div className="w-1/2 h-64 rounded-xl overflow-hidden">
            <img
              src="https://res.cloudinary.com/dyjmgpb5p/image/upload/v1767066757/Bold_Style_Fresh_Vibes_%EF%B8%8F_b32cl6.jpg"
              alt="Salon"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-8 py-10 flex gap-8">

        {/* LEFT: SERVICES */}
        <div className="w-2/3">

          {/* CATEGORY TABS */}
          <div className="flex gap-6 mb-8 border-b pb-3 text-sm font-medium">
            {["Hair", "Facial", "Waxing", "Cleanup"].map((cat) => (
              <span
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`cursor-pointer pb-2 ${
                  activeCategory === cat
                    ? "border-b-2 border-black text-black"
                    : "text-gray-500"
                }`}
              >
                {cat}
              </span>
            ))}
          </div>

          {/* SERVICE LIST */}
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white border rounded-xl p-6 mb-6 flex justify-between items-center"
            >
              <div>
                <h3 className="text-lg font-semibold">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  {service.desc}
                </p>
                <span className="text-sm font-medium">
                  ₹{service.price} • {service.time}
                </span>
              </div>

              <button className="border px-6 py-2 rounded-md 
                                 hover:bg-black hover:text-white transition">
                Add
              </button>
            </div>
          ))}
        </div>

        {/* RIGHT: BOOKING SUMMARY (STICKY) */}
        <div className="w-1/3">
          <div className="bg-white border rounded-xl p-6 sticky top-24">
            <h3 className="text-lg font-semibold mb-4">
              Booking Summary
            </h3>

            <p className="text-sm text-gray-600 mb-4">
              Select services to proceed
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
