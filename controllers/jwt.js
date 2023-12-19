const { connection } = require('../model/connection');
const bcrypt = require('bcrypt');


const userRegister = async (req, res) => {
  try {
    const salt = 10;
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    const data = {
      id: req.id,
      name: req.body.name,
      email: req.body.email,
      password: hashPassword,
    };
    const query = "INSERT INTO users SET ?";
    
    // Use arrow function or define error inside the function scope
    await connection.query(query, data, (error, result) => {
      if (error) {
        console.log("Error:", error.sqlMessage);
        return res.status(500).json({ error: "Invalid data" });
      } else {
        return res.json(result);
      }
    });
  } catch (error) {
    console.log("Error found...", error);
    return res.status(500).json({ error: "Error" });
  }
};

module.exports = { userRegister };
