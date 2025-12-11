import db from "../config/db.js";

// GET semua projects
export const getProjects = (req, res) => {
  const query = "SELECT * FROM projects ORDER BY created_at DESC";
  
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ msg: "Database error", error: err });
    }
    res.json(results);
  });
};

// CREATE project
export const createProject = (req, res) => {
  const { title, description, category } = req.body;
  const image = req.file ? `/uploads/${req.file.filename}` : null;

  const query = "INSERT INTO projects (title, description, image, category) VALUES (?, ?, ?, ?)";
  
  db.query(query, [title, description, image, category], (err, result) => {
    if (err) {
      return res.status(500).json({ msg: "Gagal membuat project", error: err });
    }
    res.status(201).json({
      msg: "Project berhasil dibuat",
      id: result.insertId,
      data: { title, description, image, category }
    });
  });
};

// UPDATE project
export const updateProject = (req, res) => {
  const { id } = req.params;
  const { title, description, category } = req.body;
  const image = req.file ? `/uploads/${req.file.filename}` : req.body.image;

  const query = "UPDATE projects SET title = ?, description = ?, image = ?, category = ? WHERE id = ?";
  
  db.query(query, [title, description, image, category, id], (err, result) => {
    if (err) {
      return res.status(500).json({ msg: "Gagal update project", error: err });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ msg: "Project tidak ditemukan" });
    }
    res.json({ msg: "Project berhasil diupdate" });
  });
};

// DELETE project
export const deleteProject = (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM projects WHERE id = ?";
  
  db.query(query, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ msg: "Gagal menghapus project", error: err });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ msg: "Project tidak ditemukan" });
    }
    res.json({ msg: "Project berhasil dihapus" });
  });
};
