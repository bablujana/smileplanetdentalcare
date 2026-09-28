DROP TABLE IF EXISTS appointments;

CREATE TABLE appointments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  fullName TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  service TEXT NOT NULL,
  message TEXT,
  preferredDate TEXT,
  preferredTime TEXT,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
);
