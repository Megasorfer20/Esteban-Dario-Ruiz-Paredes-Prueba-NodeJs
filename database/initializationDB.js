import { Categorias } from "../models/categorias.models.js";
import { Productos } from "../models/productos.model.js";
import { ProductosCategorias } from "../models/productosCategorias.models.js";
import { ProductosStokcs } from "../models/productosStocks.models.js";
import { Promociones } from "../models/promociones.models.js";
import { Tiendas } from "../models/tiendas.model.js";
import { TiendasPromociones } from "../models/tiendasPromociones.models.js";

export const initializeModels = async () => {
  await Tiendas.sync();
  await Productos.sync();
  await ProductosStokcs.sync();
  await Categorias.sync();
  await ProductosCategorias.sync();
  await Promociones.sync();
  await TiendasPromociones.sync();

  TiendasPromociones.belongsTo(Tiendas, {
    foreignKey: "id_tienda",
    targetKey: "id",
  });

  TiendasPromociones.belongsTo(Promociones, {
    foreignKey: "id_promocion",
    targetKey: "id",
  });

  Tiendas.hasMany(TiendasPromociones, {
    foreignKey: "id_tienda",
    sourceKey: "id",
  });
  
  Promociones.hasMany(TiendasPromociones, {
    foreignKey: "id_promocion",
    sourceKey: "id",
  });

  ProductosStokcs.belongsTo(Tiendas, {
    foreignKey: "id_tienda",
    targetKey: "id",
  });

  ProductosStokcs.belongsTo(Productos, {
    foreignKey: "id_producto",
    targetKey: "id",
  });

  Tiendas.hasMany(ProductosStokcs, {
    foreignKey: "id_tienda",
    sourceKey: "id",
  });

  Productos.hasMany(ProductosStokcs, {
    foreignKey: "id_producto",
    sourceKey: "id",
  });

  ProductosCategorias.belongsTo(Categorias, {
    foreignKey: "id_categoria",
    targetKey: "id",
  });

  ProductosCategorias.belongsTo(Productos, {
    foreignKey: "id_producto",
    targetKey: "id",
  });

  Categorias.hasMany(ProductosCategorias, {
    foreignKey: "id_categoria",
    sourceKey: "id",
  });

  Productos.hasMany(ProductosCategorias, {
    foreignKey: "id_producto",
    sourceKey: "id",
  });
};
