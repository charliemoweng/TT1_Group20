import jwt from "jsonwebtoken";


const validateToken = (req, res, next) => {
  const accessToken = req.header("accessToken");
  if (!accessToken) return res.json({ error: "User not logged" });
  try {
    const validToken = jwt.verify(accessToken, "important secret");
    req.user = validToken;
    if (validToken) {
      return next();
    }
  } catch (err) {
    return res.json({ error: err });
  }
};
export default validateToken;
