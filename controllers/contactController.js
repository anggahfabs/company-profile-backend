import db from "../config/db.js";

// GET contact info
export const getContactInfo = (req, res) => {
  const query = "SELECT * FROM contact_info LIMIT 1";
  
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ msg: "Database error", error: err });
    }
    // Return array untuk konsistensi dengan frontend
    res.json(results);
  });
};

// UPDATE contact info
export const updateContactInfo = (req, res) => {
  const { id } = req.params;
  const { address, phone, whatsapp, email, weekday_hours, saturday_hours, sunday_hours } = req.body;
  
  const query = "UPDATE contact_info SET address = ?, phone = ?, whatsapp = ?, email = ?, weekday_hours = ?, saturday_hours = ?, sunday_hours = ? WHERE id = ?";
  
  db.query(query, [address, phone, whatsapp, email, weekday_hours, saturday_hours, sunday_hours, id], (err, result) => {
    if (err) {
      return res.status(500).json({ msg: "Gagal update contact info", error: err });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ msg: "Contact info tidak ditemukan" });
    }
    res.json({ msg: "Contact info berhasil diupdate" });
  });
};

// CREATE contact info (jika belum ada)
export const createContactInfo = (req, res) => {
  const { address, phone, whatsapp, email, weekday_hours, saturday_hours, sunday_hours } = req.body;
  
  const query = "INSERT INTO contact_info (address, phone, whatsapp, email, weekday_hours, saturday_hours, sunday_hours) VALUES (?, ?, ?, ?, ?, ?, ?)";
  
  db.query(query, [address, phone, whatsapp, email, weekday_hours, saturday_hours, sunday_hours], (err, result) => {
    if (err) {
      return res.status(500).json({ msg: "Gagal membuat contact info", error: err });
    }
    res.status(201).json({
      msg: "Contact info berhasil dibuat",
      id: result.insertId
    });
  });
};
