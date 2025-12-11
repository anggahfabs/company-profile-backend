import db from "../config/db.js";

// GET semua slides
export const getSlides = (req, res) => {
  const query = "SELECT * FROM slides ORDER BY order_position ASC";
  
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ msg: "Database error", error: err });
    }
    res.json(results);
  });
};

// GET slide by ID
export const getSlideById = (req, res) => {
  const { id } = req.params;
  const query = "SELECT * FROM slides WHERE id = ?";
  
  db.query(query, [id], (err, results) => {
    if (err) {
      return res.status(500).json({ msg: "Database error", error: err });
    }
    if (results.length === 0) {
      return res.status(404).json({ msg: "Slide tidak ditemukan" });
    }
    res.json(results[0]);
  });
};

// CREATE slide
export const createSlide = (req, res) => {
  const { title, subtitle, order_position, is_active } = req.body;
  const image = req.file ? `/uploads/${req.file.filename}` : null;

  const query = "INSERT INTO slides (title, subtitle, image, order_position, is_active) VALUES (?, ?, ?, ?, ?)";
  
  db.query(query, [title, subtitle, image, order_position || 0, is_active || 1], (err, result) => {
    if (err) {
      return res.status(500).json({ msg: "Gagal membuat slide", error: err });
    }
    res.status(201).json({
      msg: "Slide berhasil dibuat",
      id: result.insertId,
      data: { title, subtitle, image, order_position, is_active }
    });
  });
};

// UPDATE slide
export const updateSlide = (req, res) => {
  const { id } = req.params;
  const { title, subtitle, order_position, is_active } = req.body;
  const image = req.file ? `/uploads/${req.file.filename}` : req.body.image;

  const query = "UPDATE slides SET title = ?, subtitle = ?, image = ?, order_position = ?, is_active = ? WHERE id = ?";
  
  db.query(query, [title, subtitle, image, order_position, is_active, id], (err, result) => {
    if (err) {
      return res.status(500).json({ msg: "Gagal update slide", error: err });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ msg: "Slide tidak ditemukan" });
    }
    res.json({ msg: "Slide berhasil diupdate" });
  });
};

// DELETE slide
export const deleteSlide = (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM slides WHERE id = ?";
  
  db.query(query, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ msg: "Gagal menghapus slide", error: err });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ msg: "Slide tidak ditemukan" });
    }
    res.json({ msg: "Slide berhasil dihapus" });
  });
};
