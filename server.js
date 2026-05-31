// 1. Register Route (AUTO-LOGIN enabled)
app.post("/api/register", async (req, res) => {
  try {
    const { username, password } = req.body || {};
    if (!username || !password) {
      return res.status(400).json({ message: "Username aur password zaroori hain!" });
    }

    const db = readDB();
    const userExists = db.users.find(u => u.username.toLowerCase() === username.toLowerCase());
    if (userExists) {
      return res.status(400).json({ message: "Yeh username pehle se majood hai!" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    db.users.push({
      id: newId(db.users),
      username,
      passwordHash: hashedPassword,
      createdAt: new Date().toISOString()
    });

    // AUTO-LOGIN: create session token immediately
    const token = makeToken();
    db.sessions.push({ token, username, createdAt: new Date().toISOString() });

    writeDB(db);

    return res.status(201).json({
      message: "Registration + Login successful!",
      username,
      token
    });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
});