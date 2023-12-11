import { Request, Response } from "express";
import Item from "../models/items";

export const getAllItems = async (req: Request, res: Response) => {
  try {
    const items = await Item.findAll({
      attributes: ["name", "unit", "quantity", "price"],
    });
    res.json(items);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
