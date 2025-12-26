

const Home = () => {
  return (
  <div> 
   <header className="sticky top-0 z-50 bg-white border-b">
      <div className="flex items-center justify-between px-8 py-3">

        
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

          <div className="flex items-center gap-1 text-sm border px-3 py-1 rounded-md cursor-pointer focus-within:ring-1 focus-within:ring-black"> {/* focus-within for highlighting whole search box always apply in parent tag */}
            <input
            type="text"
            placeholder="Location"
            className=" w-full focus:outline-none "
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


    {/**main body */}

    <div className="flex px-8 py-6 gap-6">
    {/** left section */}
    <div className="flex-col px-20 py-12">
    <h2 className="text-4xl font-semibold  mb-4">Home services at your doorstep</h2>
    <div className="w-1/4 border rounded-lg px-68 py-40">
     
    </div>
    </div>

    {/**right section */}
    <div className="">
      <img src="https://res.cloudinary.com/dyjmgpb5p/image/upload/v1766685416/ChatGPT_Image_Dec_25_2025_11_10_10_PM_mvo40m.png" alt="IMAGE"/>
    </div>

  </div>
   </div>
      
  );
};

export default Home;
