export const isAdmin = (req, res, next) => {
  try {
    if (!req.user || req.user.role !== "admin") {
      return res.status(403).json({ message: "Admin access only" });
    }

    next();
  } catch (error) {
    res.status(500).json({ message: "Authorization error" });
  }
};
