import {
  bobNexusShoppingList as bobListData,
  arnoldBumsteadShoppingList as arnoldListData,
} from "../../data/data";
import ShoppingList from "../models/ShoppingList";

const createItems = async (shoppingList: any, itemsData: any) => {
  for (let itemData of itemsData) {
    //Multiply the quntity by 2
    const updatedData = { ...itemData, quantity: itemData.quantity * 2 };
    await shoppingList.createItem({
      ...updatedData,
      ShoppingListId: shoppingList.id,
      price: null,
    });
  }
};

const populateDatabase = async () => {
  const bobShoppingList = await ShoppingList.create({
    buyerName: "Bob's Shopping List",
  });
  const arnoldShoppingList = await ShoppingList.create({
    buyerName: "Arnold Bumstead Shopping List",
  });

  await createItems(bobShoppingList, bobListData);
  await createItems(arnoldShoppingList, arnoldListData);

  console.log("Database populated succesfully!");
};

export default populateDatabase;
