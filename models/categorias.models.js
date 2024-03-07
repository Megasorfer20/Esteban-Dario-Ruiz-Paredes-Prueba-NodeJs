import { DataTypes } from "sequelize";
import { declarationDB } from "../database/dbConections.js";

const sequelize = declarationDB();

export const Categorias = sequelize.define(
  "categorias",
  {
    id: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    nombre: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    adultos: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      validate: {
        isIn: [[0, 1]],
      },
      comment: "0=No 1=Si... Categoría para mayores de edad",
    },
  },
  {
    tableName: "categorias",
    timestamps: false,
    comment: "Son las posibles Categorías para aplicar a un Producto de una Tienda, se manejan como un Pasillo",
    charset: "utf8mb4",
    collate: "utf8mb4_unicode_ci",
    engine: "InnoDB",
  }
);
