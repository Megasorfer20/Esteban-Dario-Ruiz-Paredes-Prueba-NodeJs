import { DataTypes } from "sequelize";
import { declarationDB } from "../database/dbConections.js";

const sequelize = declarationDB();

export const ProductosStokcs = sequelize.define(
  "productos_stocks",
  {
    id: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    cantidad: {
      type: DataTypes.DECIMAL(8, 3),
      allowNull: false,
    },
    id_tienda: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true,
      defaultValue: null,
    },
    id_producto: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    fecha_ingreso: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: "productos_stocks",
    timestamps: false,
    comment: "Es el Historial de Stock disponible de un Producto",
    charset: "utf8mb4",
    collate: "utf8mb4_unicode_ci",
    engine: "InnoDB",
  }
);
