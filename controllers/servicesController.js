import db from "../config/db.js";

// GET semua services
export const getServices = (req, res) => {
  const query = "SELECT * FROM services ORDER BY created_at DESC";
  
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ msg: "Database error", error: err });
    }
    res.json(results);
  });
};

// CREATE service
export const createService = (req, res) => {
  const { title, description, icon } = req.body;
  const query = "INSERT INTO services (title, description, icon) VALUES (?, ?, ?)";
  
  db.query(query, [title, description, icon], (err, result) => {
    if (err) {
      return res.status(500).json({ msg: "Gagal membuat service", error: err });
    }
    res.status(201).json({
      msg: "Service berhasil dibuat",
      id: result.insertId,
      data: { title, description, icon }
    });
  });
};

// UPDATE service
export const updateService = (req, res) => {
  const { id } = req.params;
  const { title, description, icon } = req.body;
  const query = "UPDATE services SET title = ?, description = ?, icon = ? WHERE id = ?";
  
  db.query(query, [title, description, icon, id], (err, result) => {
    if (err) {
      return res.status(500).json({ msg: "Gagal update service", error: err });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ msg: "Service tidak ditemukan" });
    }
    res.json({ msg: "Service berhasil diupdate" });
  });
};

// DELETE service
export const deleteService = (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM services WHERE id = ?";
  
  db.query(query, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ msg: "Gagal menghapus service", error: err });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ msg: "Service tidak ditemukan" });
    }
    res.json({ msg: "Service berhasil dihapus" });
  });
};
