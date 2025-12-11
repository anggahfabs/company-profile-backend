import db from "../config/db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const login = (req, res) => {
  const { email, password } = req.body;

  // cek email ada atau tidak
  db.query("SELECT * FROM users WHERE email = ?", [email], (err, result) => {
    if (err) return res.status(500).json({ msg: "DB Error", err });

    if (result.length === 0) {
      return res.status(400).json({ msg: "Email tidak ditemukan" });
    }

    const user = result[0];

    // cek password
    const valid = bcrypt.compareSync(password, user.password);
    if (!valid) {
      return res.status(400).json({ msg: "Password salah" });
    }

    // generate token
    const token = jwt.sign(
      { id: user.id },
      "SECRET_KEY",
      { expiresIn: "1d" }
    );

    res.json({
      msg: "Login success",
      token,
      username: user.username
    });
  });
};
