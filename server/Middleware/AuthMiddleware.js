const { verify } = require("jsonwebtoken");
const { valid } = require("semver");

const validateToken = (req, res, next) => {
  const accessToken = req.header("accessToken");
  if (!accessToken) return res.json({ error: "User not logged" });
  try {
    const validToken = verify(accessToken, "important secret");
    req.user = validToken;
    if (validToken) {
      return next();
    }
  } catch (err) {
    return res.json({ error: err });
  }
};
module.exports = { validateToken };
