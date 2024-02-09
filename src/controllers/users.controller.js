import { getConnection } from "../database/database";

const getUsers = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query(
      "SELECT id, email, password from users"
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const addUsers = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (email == undefined || password == undefined) {
      res.status(400).json({ message: "Bad Request. Fill all field." });
    }
    const user = { email, password };
    const connection = await getConnection();
    const result = await connection.query("INSERT INTO users SET ?", user);
    res.json({ message: "User added." });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const methods = {
  getUsers,
  addUsers,
};
