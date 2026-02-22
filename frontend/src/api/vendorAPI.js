const BASE_URL = "http://localhost:5000"

export const vendorRegister = async (formData, token)=>{
    const response = await fetch (`${BASE_URL}/api/vendors` , {method:'post' , headers:{'Content-Type' : 'application/json', Authorization: `Bearer ${token}`,},
    body:JSON.stringify( formData)
});
const data = await response.json();
return data;
};

export const fetchVendorStatus = async (token) => {
  try {
    const res = await fetch(`${BASE_URL}/api/vendors/status`, {
        method:"GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch vendor status");
    }

    return await res.json();
  } catch (error) {
    console.error("Vendor status error:", error);
    throw error;
  }
};