import { useNavigate } from "react-router-dom";



const Home = () => {
  const navigate = useNavigate();
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
            <button className="hover:underline" onClick={()=>navigate("Login")}>Login</button>
            <button className="bg-black text-white px-4 py-2 rounded-md hover:opacity-90" onClick={()=>navigate("register")}>
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
    <div className="flex flex-col items-center gap-2 cursor-pointer hover:scale-105 transition" onClick={()=>navigate("/salon")}>
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
      <div className="grid grid-cols-3 gap-5 pl-34 pr-20">
        <div className=" flex  border rounded-xl  overflow-hidden shadow-md hover:shadow-xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 cursor-pointer">
          <div className="w-1/2 h-50 ">
          <img src="https://res.cloudinary.com/dyjmgpb5p/image/upload/v1767066749/%D0%9C%D1%83%D0%B6%D1%87%D0%B8%D0%BD%D0%B0_%D0%B2%D0%B8%D0%B4_%D1%81%D0%BF%D0%B5%D1%80%D0%B5%D0%B4%D0%B8_%D1%83%D0%B1%D0%B8%D1%80%D0%B0%D0%B5%D1%82_%D0%B2_%D0%BF%D0%BE%D0%BC%D0%B5%D1%89%D0%B5%D0%BD%D0%B8%D0%B8___%D0%91%D0%B5%D1%81%D0%BF%D0%BB%D0%B0%D1%82%D0%BD%D0%BE%D0%B5_%D1%84%D0%BE%D1%82%D0%BE_tuvzoj.jpg" alt="cleaning" 
          className="w-full h-full object-cover"/>
        </div>
        <div className="flex flex-col justify-center p-4 w-1/2 bg-green-400">
        <h3 className="text-lg text-white font-semibold">Home cleaning </h3>
         <p className="text-sm text-white">
        Professional cleaning service for your home
      </p>
        </div>
        </div>
        <div className=" flex  border rounded-xl  overflow-hidden shadow-md hover:shadow-xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 cursor-pointer">
          <div className="w-1/2 h-50 ">
          <img src="https://res.cloudinary.com/dyjmgpb5p/image/upload/v1767066757/Bold_Style_Fresh_Vibes_%EF%B8%8F_b32cl6.jpg" alt="saloon" 
          className="w-full h-full object-cover"/>
        </div>
        <div className="flex flex-col justify-center p-4 w-1/2 bg-purple-400">
        <h3 className="text-lg text-white font-semibold">Salon </h3>
         <p className="text-sm text-white">
        Get haircut and mekup for men and women
      </p>
        </div>
        </div>
        <div className=" flex  border rounded-xl  overflow-hidden shadow-md hover:shadow-xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 cursor-pointer">
          <div className="w-1/2 h-50 ">
          <img src="https://res.cloudinary.com/dyjmgpb5p/image/upload/v1767066766/Massage_su%C3%A9dois___tout_savoir_sur_le_massage_su%C3%A9dois_-_Elle_is1iqc.jpg" alt="massage" 
          className="w-full h-full object-cover"/>
        </div>
        <div className="flex flex-col justify-center p-4 w-1/2 bg-pink-400">
        <h3 className="text-lg text-white font-semibold">Massage </h3>
         <p className="text-sm text-white">
        massage for men and women
      </p>
        </div>
        </div>
      </div>

      {/*  FOOTER */}
       <footer className="bg-gray-100 mt-16">
      
      <div className="max-w-7xl mx-auto px-8 py-12 grid grid-cols-4 gap-8 text-sm text-gray-700">
        
        <div>
          <h2 className="text-xl font-bold mb-4">Do-IT</h2>
          <p className="text-gray-600">
            Quality home services at your doorstep. Trusted professionals,
            transparent pricing, and quick booking.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Services</h3>
          <ul className="space-y-2">
            <li className="hover:underline cursor-pointer">Salon at Home</li>
            <li className="hover:underline cursor-pointer">Cleaning</li>
            <li className="hover:underline cursor-pointer">AC Repair</li>
            <li className="hover:underline cursor-pointer">Electrician</li>
            <li className="hover:underline cursor-pointer">Plumber</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li className="hover:underline cursor-pointer">About Us</li>
            <li className="hover:underline cursor-pointer">Careers</li>
            <li className="hover:underline cursor-pointer">Contact Us</li>
            <li className="hover:underline cursor-pointer">Blog</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Support</h3>
          <ul className="space-y-2">
            <li className="hover:underline cursor-pointer">Help Center</li>
            <li className="hover:underline cursor-pointer">Terms & Conditions</li>
            <li className="hover:underline cursor-pointer">Privacy Policy</li>
            <li className="hover:underline cursor-pointer">FAQs</li>
          </ul>
        </div>

      </div>

      <div className="border-t">
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center text-sm text-gray-600">
          
          <p>© {new Date().getFullYear()} Do-IT. All rights reserved.</p>

          <div className="flex gap-4">
            <span className="cursor-pointer hover:text-black">Facebook</span>
            <span className="cursor-pointer hover:text-black">Instagram</span>
            <span className="cursor-pointer hover:text-black">Twitter</span>
          </div>

        </div>
      </div>
    </footer>

    </div>
  );
}; 

export default Home;
