import { DataTypes } from "sequelize";
import { declarationDB } from "../database/dbConections.js";

const sequelize = declarationDB();

export const ProductosCategorias = sequelize.define(
  "productos_categorias",
  {
    id: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    id_categoria: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
    },
    id_producto: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
  },
  {
    tableName: "productos_categorias",
    timestamps: false,
    comment: "Son las Categorías o Pasillos asociados a un Producto",
    charset: "utf8mb4",
    collate: "utf8mb4_unicode_ci",
    engine: "InnoDB",
  }
);
