import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  // Format: "Bearer tokenxxxxx"
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ msg: "Token tidak ada, akses ditolak" });
  }

  try {
    const decoded = jwt.verify(token, "SECRET_KEY");
    req.user = decoded;     // simpan data user ke req
    next();                 // lanjut ke controller berikutnya
  } catch (err) {
    return res.status(403).json({ msg: "Token invalid" });
  }
};
