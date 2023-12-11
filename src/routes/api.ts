import express from "express";
import {
  getAllShoppingLists,
  getShoppingListDetail,
} from "../controllers/shoppingListController";
import { getAllItems } from "../controllers/itemController";

export const router = express.Router();

router.get("/shopping-list", getAllShoppingLists);
router.get("/shopping-list/:shoppingListId", getShoppingListDetail);
router.get("/items", getAllItems);

export default router;
