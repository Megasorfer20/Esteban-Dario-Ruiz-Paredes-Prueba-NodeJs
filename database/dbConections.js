import { config } from "dotenv";
import { Sequelize } from "sequelize";

config();

export const declarationDB = () => {
  const sequelize = new Sequelize(
    process.env.DATABASE,
    process.env.DBUSER,
    process.env.PASSWORD,
    {
      host: process.env.HOST,
      dialect: process.env.DBDIALECT,
    }
  );
  return sequelize;
};

export const getConnection = async () => {
  try {
    const sequelize = declarationDB();
    await sequelize.sync();
    await sequelize.authenticate();
    return sequelize;
  } catch (error) {
    console.log(`You can't connect into the database: ${error}`);
  }
};
