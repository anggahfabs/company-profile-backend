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

// text Contact form
// CREATE contact message (from visitor)
export const createContactMessage = (req, res) => {
  const {
    name,
    email,
    phone,
    company,
    event_type,
    event_info,
    message
  } = req.body;

  // validasi minimal
  if (!name || !email || !message) {
    return res.status(400).json({
      msg: "Nama, email, dan pesan wajib diisi"
    });
  }

  const query = `
    INSERT INTO contact_messages
    (name, email, phone, company, event_type, event_info, message)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    query,
    [name, email, phone, company, event_type, event_info, message],
    (err, result) => {
      if (err) {
        return res.status(500).json({
          msg: "Gagal menyimpan pesan",
          error: err
        });
      }

      res.status(201).json({
        msg: "Pesan berhasil dikirim",
        id: result.insertId
      });
    }
  );
};

// GET contact messages (for admin)
export const getContactMessages = (req, res) => {
  const query = `
    SELECT
      id,
      name,
      email,
      phone,
      company,
      event_type,
      event_info,
      message,
      created_at
    FROM contact_messages
    ORDER BY created_at DESC
  `;

  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({
        msg: "Gagal mengambil pesan pengunjung",
        error: err
      });
    }

    res.json(results);
  });
};

