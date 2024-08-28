const { Users } = require("../db");
module.exports = async (req, res) => {
  try {
    let {
      name,
      last_name,
      password,
      description,
      email,
      tel,
      profession,
      sexo,
    } = req.body;

    const existingUser = await Users.findOne({
      where: { name, last_name, profession },
    });

    if (existingUser) {
      throw new Error("El usuario ya existe.");
    } else {
      const newUser = await Users.create({
        name,
        last_name,
        password,
        description,
        email,
        tel,
        profession,
        sexo,
      });
      return res.status(200).json(newUser);
    }
  } catch (error) {
    console.error(error);
    return res.status(400).json({ error: error.message });
  }
};
