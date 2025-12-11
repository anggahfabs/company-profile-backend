import db from "../config/db.js";

// GET semua team members
export const getTeam = (req, res) => {
  const query = "SELECT * FROM team ORDER BY created_at DESC";
  
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ msg: "Database error", error: err });
    }
    res.json(results);
  });
};

// CREATE team member
export const createTeamMember = (req, res) => {
  const { name, position, bio, instagram, tiktok } = req.body;
  const photo = req.file ? `/uploads/${req.file.filename}` : null;

  const query = "INSERT INTO team (name, position, photo, bio, instagram, tiktok) VALUES (?, ?, ?, ?, ?, ?)";
  
  db.query(query, [name, position, photo, bio, instagram || null, tiktok || null], (err, result) => {
    if (err) {
      return res.status(500).json({ msg: "Gagal membuat team member", error: err });
    }
    res.status(201).json({
      msg: "Team member berhasil dibuat",
      id: result.insertId,
      data: { name, position, photo, bio, instagram, tiktok }
    });
  });
};

// UPDATE team member
export const updateTeamMember = (req, res) => {
  const { id } = req.params;
  const { name, position, bio, instagram, tiktok } = req.body;
  const photo = req.file ? `/uploads/${req.file.filename}` : req.body.photo;

  const query = "UPDATE team SET name = ?, position = ?, photo = ?, bio = ?, instagram = ?, tiktok = ? WHERE id = ?";
  
  db.query(query, [name, position, photo, bio, instagram || null, tiktok || null, id], (err, result) => {
    if (err) {
      return res.status(500).json({ msg: "Gagal update team member", error: err });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ msg: "Team member tidak ditemukan" });
    }
    res.json({ msg: "Team member berhasil diupdate" });
  });
};

// DELETE team member
export const deleteTeamMember = (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM team WHERE id = ?";
  
  db.query(query, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ msg: "Gagal menghapus team member", error: err });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ msg: "Team member tidak ditemukan" });
    }
    res.json({ msg: "Team member berhasil dihapus" });
  });
};
