import express from "express";
import User from "../Models/User";
import bcrypt from "bcrypt";
import validateToken from "../Middleware/AuthMiddleware";
// User Registration
router.post("/", async (req, res) => {
  const { firstName, lastName, username, password } = req.body;
  bcrypt.hash(password, 10).then((hash) => {
    User.create({
      firstName: first_name,
      lastName: last_name,
      username: username,
      password: hash,
    });
    res.json("SUCCESS");
  });
});
// User Login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ where: { username: username } });
  if (!user) res.json({ error: "User Doesn't Exist" });
  bcrypt.compare(password, user.password).then((match) => {
    if (!match) res.json({ error: "Wrong Username and Password Combination" });
    const accessToken = sign(
      { username: user.username, id: user.id },
      "important secret"
    );
    res.json({ token: accessToken, username: username, id: user.id });
  });
});

// User Password Change
router.put("/changepassword", validateToken, async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  const user = await User.findOne({ where: { username: req.user.username } });

  bcrypt.compare(oldPassword, user.password).then(async (match) => {
    if (!match) res.json({ error: "Wrong Password Entered!" });

    bcrypt.hash(newPassword, 10).then((hash) => {
      User.update(
        { password: hash },
        { where: { username: req.user.username } }
      );
      res.json("SUCCESS");
    });
  });
});
export default router;
