const { Users, Professions } = require("../db");

module.exports = async (req, res) => {
  try {
    let {
      name,
      last_name,
      password,
      description,
      email,
      tel,
      profession, //proveniente del front
      sexo,
    } = req.body;

    let existingProfession = await Professions.findOne({ where: { name: profession } });

    if (!existingProfession) {
      existingProfession = await Professions.create({ name: profession });
    }

    const existingUser = await Users.findOne({
      where: { name, last_name, email, professionId: existingProfession.id },
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
        professionId: existingProfession.id,
        sexo,
      });
      return res.status(200).json(newUser);
    }
  } catch (error) {
    console.error(error);
    return res.status(400).json({ error: error.message });
  }
};
