import db from "../config/db.js";

// GET semua maps
export const getMaps = (req, res) => {
  const query = "SELECT * FROM maps ORDER BY created_at DESC";
  
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ msg: "Database error", error: err });
    }
    res.json(results);
  });
};

// CREATE map
export const createMap = (req, res) => {
  const { title, embed_code } = req.body;
  const query = "INSERT INTO maps (title, embed_code) VALUES (?, ?)";
  
  db.query(query, [title, embed_code], (err, result) => {
    if (err) {
      return res.status(500).json({ msg: "Gagal membuat map", error: err });
    }
    res.status(201).json({
      msg: "Map berhasil dibuat",
      id: result.insertId,
      data: { title, embed_code }
    });
  });
};

// UPDATE map
export const updateMap = (req, res) => {
  const { id } = req.params;
  const { title, embed_code } = req.body;
  const query = "UPDATE maps SET title = ?, embed_code = ? WHERE id = ?";
  
  db.query(query, [title, embed_code, id], (err, result) => {
    if (err) {
      return res.status(500).json({ msg: "Gagal update map", error: err });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ msg: "Map tidak ditemukan" });
    }
    res.json({ msg: "Map berhasil diupdate" });
  });
};

// DELETE map
export const deleteMap = (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM maps WHERE id = ?";
  
  db.query(query, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ msg: "Gagal menghapus map", error: err });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ msg: "Map tidak ditemukan" });
    }
    res.json({ msg: "Map berhasil dihapus" });
  });
};
