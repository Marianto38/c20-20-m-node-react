const { Users, Reviews } = require("../db");

module.exports = async (req, res) => {
  const { name } = req.query;
  try {
    let user;
    if (!name) {
      user = await Users.findAll({
        include: [{ model: Reviews }],
      });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
