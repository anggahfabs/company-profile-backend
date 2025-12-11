import db from "../config/db.js";

// GET semua social media
export const getSocialMedia = (req, res) => {
  const query = "SELECT * FROM social_media ORDER BY created_at DESC";
  
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ msg: "Database error", error: err });
    }
    res.json(results);
  });
};

// CREATE social media
export const createSocialMedia = (req, res) => {
  const { platform, url } = req.body;
  const query = "INSERT INTO social_media (platform, url) VALUES (?, ?)";
  
  db.query(query, [platform, url], (err, result) => {
    if (err) {
      return res.status(500).json({ msg: "Gagal membuat social media", error: err });
    }
    res.status(201).json({
      msg: "Social media berhasil dibuat",
      id: result.insertId,
      data: { platform, url }
    });
  });
};

// UPDATE social media
export const updateSocialMedia = (req, res) => {
  const { id } = req.params;
  const { platform, url } = req.body;
  const query = "UPDATE social_media SET platform = ?, url = ? WHERE id = ?";
  
  db.query(query, [platform, url, id], (err, result) => {
    if (err) {
      return res.status(500).json({ msg: "Gagal update social media", error: err });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ msg: "Social media tidak ditemukan" });
    }
    res.json({ msg: "Social media berhasil diupdate" });
  });
};

// DELETE social media
export const deleteSocialMedia = (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM social_media WHERE id = ?";
  
  db.query(query, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ msg: "Gagal menghapus social media", error: err });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ msg: "Social media tidak ditemukan" });
    }
    res.json({ msg: "Social media berhasil dihapus" });
  });
};
