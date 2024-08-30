const { Users } = require('../db')
const bcrypt = require ('bcrypt')

const loginUser = async (req, res) =>{
    try{
        let { email, password} = req.body

        const existingUser = await Users.findOne({ where: { email } });

        if (!existingUser) {
            return res.status(404).json({ error: "Email no encontrado" });
        }

        const isValid = bcrypt.compareSync(password, existingUser.password);

        if (isValid){
            //implementar JWT
            return res.status(200).json({message: 'login realizado', user: existingUser});
        }
        else{
            return res.status(401).json({error: 'Contraseña incorrecta'});
        }
    } catch (error){
        console.error(error);
        return res.status(500).json({error: 'Error de servidor'})
    }
}

module.exports = loginUser;