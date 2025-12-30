const Home = () => {
  return (
    <div>
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white border-b">
        <div className="flex items-center justify-between px-8 py-3">
          
          <div className="flex items-center gap-6">
            <div className="flex items-center cursor-pointer">
              <span className="text-2xl font-extrabold tracking-tight">Do</span>
              <span className="text-2xl font-extrabold mx-1">-</span>
              <span className="text-2xl font-extrabold text-gray-600">IT</span>
            </div>

            <div className="flex items-center gap-1 text-sm border px-3 py-1 rounded-md focus-within:ring-1 focus-within:ring-black">
              <input
                type="text"
                placeholder="Location"
                className="focus:outline-none"
              />
            </div>
          </div>

          <div className="flex-1 mx-10">
            <input
              type="text"
              placeholder="Search for services (Salon, AC Repair, Cleaning...)"
              className="w-full px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>

          <div className="flex items-center gap-6 text-sm font-medium">
            <button className="hover:underline">Login</button>
            <button className="bg-black text-white px-4 py-2 rounded-md hover:opacity-90">
              Sign Up
            </button>
          </div>
        </div>
      </header>

      {/* MAIN BODY */}
      <div className="flex items-center px-8  gap-10 -mt-10">
        
        {/* LEFT SECTION */}
        <div className="w-[65%] px-25 ">
          <h2 className="text-4xl font-semibold mb-6">
            Home services at your doorstep
          </h2>

          
          <div className="relative border rounded-xl w-130 h-80 p-6">
            <h2 className="absolute top-4 left-8 text-lg font-medium text-gray-500">
              What are you looking for?
            </h2>
             
  <div className="mt-12 grid grid-cols-3 gap-6">
    <div className="flex flex-col items-center gap-2 cursor-pointer hover:scale-105 transition">
      <img
        src="https://res.cloudinary.com/dyjmgpb5p/image/upload/v1767024947/saloon_dskirs.jpg"
        alt="Salon"
        className="w-12 h-12"
      />
      <p className="text-sm font-medium">Salon</p>
    </div>

    <div className="flex flex-col items-center gap-2 cursor-pointer hover:scale-105 transition">
      <img
        src="https://res.cloudinary.com/dyjmgpb5p/image/upload/v1767025096/AC_Repair_in_Shepherd_TX_oq5hw7.jpg"
        alt="AC Repair"
        className="w-12 h-12"
      />
      <p className="text-sm font-medium">AC Repair</p>
    </div>

    <div className="flex flex-col items-center gap-2 cursor-pointer hover:scale-105 transition">
      <img
        src="https://res.cloudinary.com/dyjmgpb5p/image/upload/v1767062995/Leaning_equipment_a_bucket_of_water_a_mop_detergents_isolated_on_a_white_background_vector_illustration_in_bright_colors___Premium_Vector_xxiz11.jpg"
        alt="Cleaning"
        className="w-12 h-12"
      />
      <p className="text-sm font-medium">Cleaning</p>
    </div>

    <div className="flex flex-col items-center gap-2 cursor-pointer hover:scale-105 transition">
      <img
        src="https://res.cloudinary.com/dyjmgpb5p/image/upload/v1767031431/download_1_tqcfou.jpg"
        alt="Electrician"
        className="w-12 h-12"
      />
      <p className="text-sm font-medium">Electrician</p>
    </div>

    <div className="flex flex-col items-center gap-2 cursor-pointer hover:scale-105 transition">
      <img
        src="https://cdn-icons-png.flaticon.com/512/609/609803.png"
        alt="Plumber"
        className="w-12 h-12"
      />
      <p className="text-sm font-medium">Plumber</p>
    </div>

    <div className="flex flex-col items-center gap-2 cursor-pointer hover:scale-105 transition">
      <img
        src="https://cdn-icons-png.flaticon.com/512/1995/1995471.png"
        alt="Painting"
        className="w-12 h-12"
      />
      <p className="text-sm font-medium">Painting</p>
    </div>

  </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="w-auto h-auto scale-85  rounded-lg overflow-hidden flex items-center justify-center">
          <img
            className="w-full h-full object-contain"
            src="https://res.cloudinary.com/dyjmgpb5p/image/upload/v1766685416/ChatGPT_Image_Dec_25_2025_11_10_10_PM_mvo40m.png"
            alt="IMAGE"
          />
        </div>
      </div>
      {/**cards */}
      <div className="grid grid-cols-3 gap-6 pl-40">
        <div className="flex flwx-col  border">card1</div>
        <div>card2</div>
        <div>card3</div>
      </div>
    </div>
  );
};

export default Home;
