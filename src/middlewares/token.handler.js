// Middlware que valida el token
// Language: javascript

const jwt = require("jsonwebtoken");

const validateJWT = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res.status(401).json({
        ok: false,
        message: "No hay token en la petición",
      });
    }
    const { id } = jwt.verify(token, process.env.JWT_SECRET);
    console.log(id);
    req.body.userId = id;
    next();
  } catch (error) {
    return res.status(401).json({
      ok: false,
      message: "Token inválido",
    });
  }
};

module.exports = { validateJWT };
