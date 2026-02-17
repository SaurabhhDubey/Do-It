const BASE_URL = "http://localhost:5000"

export const vendorRegister = async (formData, token)=>{
    const response = await fetch (`${BASE_URL}/api/vendors` , {method:'post' , headers:{'Content-Type' : 'application/json', Authorization: `Bearer ${token}`,},
    body:JSON.stringify( formData)
});
const data = await response.json();
return data;
};