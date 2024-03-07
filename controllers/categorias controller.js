import { Categorias } from "../models/categorias.models.js";
import { Productos } from "../models/productos.model.js";
import { ProductosCategorias } from "../models/productosCategorias.models.js";

export const categoriesBasicData = async () => {
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

  const data = findData.reduce((listadoCategorias, categoria)=> {
    if(!listadoCategorias[categoria.categoria.id]){
      listadoCategorias[categoria.categoria.id] = {
        idCategoria: categoria.categoria.id,
        nombre: categoria.categoria.nombre,
        cantidadProductos: 0
      }
    }

    listadoCategorias[categoria.categoria.id].cantidadProductos += 1

    return listadoCategorias
  },{})

  const result = Object.values(data)

  result.sort(function(a,b){
    if (a.cantidadProductos > b.cantidadProductos){
        return -1
    }
    if (a.cantidadProductos < b.cantidadProductos){
        return 1
    }
    return 0
  })

  return result
};
