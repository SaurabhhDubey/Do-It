const BASE_URL = "http://localhost:5000";

export const fetchDashboardStats = async (token) => {
  const res = await fetch(`${BASE_URL}/api/admin/dashboard`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.json();
};

export const fetchAllUsers = async (token) => {
  const res = await fetch(`${BASE_URL}/api/admin/users`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.json();
};

export const fetchAllVendors = async (token) => {
  const res = await fetch(`${BASE_URL}/api/vendors`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.json();
};

export const approveVendor = async (vendorId, token) => {
  const res = await fetch(
    `${BASE_URL}/api/admin/vendors/${vendorId}/approve`,
    {
      method: "PUT",
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return res.json();
};

