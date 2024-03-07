import { Tiendas } from "../models/tiendas.model.js";
import { Promociones } from "../models/promociones.models.js";
import { TiendasPromociones } from "../models/tiendasPromociones.models.js";
import { Op } from "sequelize";

export const promotionsBasicData = async (query) => {
  const { dia } = query;

  const findData = await TiendasPromociones.findAll({
    where:{
        estado:1,
        inicio: {
            [Op.lte]: new Date(),
          },
          fin: {
            [Op.gte]: new Date(),
          },
    },
    include: [
      {
        model: Tiendas,
        required: true,
        where: {
          estado: 1,
        },
      },
      {
        model: Promociones,
        required: true,
        where: {
          estado: 1,
        },
      },
    ],
  });

  for (let i = 0; i < findData.length; i++) {
    findData[i].promocione.dias_semana = JSON.parse(findData[i].promocione.dias_semana)
  }

  const filteredData = findData.filter(data => data.promocione.dias_semana[dia - 1] === 1)

  const data = filteredData.reduce((listadoPromociones, promocion) => {
    if (!listadoPromociones[promocion.promocione.id]) {
      listadoPromociones[promocion.promocione.id] = {
        idPromocion: promocion.promocione.id,
        nombre: promocion.promocione.nombre,
        tiendas: [],
      };
    }

    listadoPromociones[promocion.promocione.id].tiendas.push(promocion.tienda.nombre)

    return listadoPromociones;
  }, {});

  const result = Object.values(data);

  return result;
};
