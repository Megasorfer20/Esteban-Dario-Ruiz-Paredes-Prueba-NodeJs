import { declarationDB, getConnection } from "../database/dbConections.js";
import { Categorias } from "../models/categorias.models.js";
import { Productos } from "../models/productos.model.js";
import { ProductosCategorias } from "../models/productosCategorias.models.js";
import { ProductosStokcs } from "../models/productosStocks.models.js";
import { Tiendas } from "../models/tiendas.model.js";

export const productBasicData = async () => {
  const findData = await ProductosCategorias.findAll({
    include: [
      {
        model: Categorias,
        required: true,
      },
      {
        model: Productos,
        required: false,
        where:{
            estado:1
        }
      },
    ],
  });

  const data = findData.reduce((listadoProductos, producto)=> {
    if(!listadoProductos[producto.producto.id]){
      listadoProductos[producto.producto.id] = {
        idProducto: producto.producto.id,
        nombre: producto.producto.nombre,
        presentacion: producto.producto.presentacion,
        tiendas:[]
      }
    }

    const tiendas = {
      idTienda:producto.tienda.id,
      nombre:producto.tienda.nombre,
      stock:producto.cantidad
    }

    listadoProductos[producto.producto.id].tiendas.push(tiendas)

    return listadoProductos
  },{})

  const result = Object.values(data)

  return result
};
