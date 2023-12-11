import { Request, Response } from "express";
import ShoppingList from "../models/ShoppingList";
import Item from "../models/items";

const getAllShoppingLists = async (req: Request, res: Response) => {
  try {
    const shoppingList = await ShoppingList.findAll({
      attributes: ["buyerName"],
      include: [
        {
          model: Item,
          attributes: ["name", "unit", "quantity", "price"],
        },
      ],
    });
    res.json(shoppingList);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getShoppingListDetail = async (req: Request, res: Response) => {
  try {
    const { shoppingListId } = req.params;

    const shoppingList = await ShoppingList.findByPk(shoppingListId, {
      attributes: ["buyerName"],
      include: [
        {
          model: Item,
          attributes: ["name", "unit", "quantity", "price"],
        },
      ],
    });

    if (!shoppingList) {
      return res.status(404).json({ error: "Resource not found" });
    }

    res.json(shoppingList);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export { getAllShoppingLists, getShoppingListDetail };
