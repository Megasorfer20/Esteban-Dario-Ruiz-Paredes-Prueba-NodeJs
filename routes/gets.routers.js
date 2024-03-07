import { Router } from "express";
import { productBasicData } from "../controllers/productos.controller.js";
import { categoriesBasicData } from "../controllers/categorias controller.js";

const router = Router();

router.get("/:parameter", async (req, res) => {
  try {
    const { parameter } = req.params;

    let elementWillGet;

    if (parameter === "productos") {
      elementWillGet = await productBasicData();
    }

    if (parameter === "categorias") {
      elementWillGet = await categoriesBasicData();
    }

    if (parameter === "promociones") {
      elementWillGet = await productBasicData();
    }

    res
      .status(200)
      .json({ message: "Consultado Correctamente", data: elementWillGet });
  } catch (error) {
    console.log(error);
    res.status(502).json(error);
  }
});

router.get("/:parameter/mas-vendidos", async (req, res) => {
  try {
    const { parameter } = req.params;

    let elementWillGet;

    if (parameter === "productos") {
      elementWillGet = await productBasicData();
    }

    res
      .status(200)
      .json({ message: "Consultado Correctamente", data: elementWillGet });
  } catch (error) {
    console.log(error);
    res.status(502).json(error);
  }
});

export default router;
