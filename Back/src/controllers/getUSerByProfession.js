const { Users } = require("../db");

module.exports = async (req, res) => {
  const { profession } = req.query;
  console.log(profession);
  try {
    if (!profession) {
      return res.status(400).json({
        error: "Ingrese una profesion",
      });
    } else {
      const usuarios = await Users.findAll({
        where: { profession },
      });

      if (usuarios.length === 0) {
        return res.status(404).json({
          message: "No se encontraros usuarios con esa profesión",
        });
      }
      res.status(200).json(usuarios);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
