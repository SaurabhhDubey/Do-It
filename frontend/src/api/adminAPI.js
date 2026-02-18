const BASE_URL = "http://localhost:5000";

export const fetchDashboardStats = async (token) => {
  const res = await fetch(`${BASE_URL}/dashboard`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.json();
};
