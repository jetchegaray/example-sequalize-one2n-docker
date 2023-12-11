import express from "express";
import { Sequelize } from "sequelize";
import Item, { initItem } from "./models/items";
import ShoppingList, { initShoppingList } from "./models/ShoppingList";
import populateDatabase from "./db/dataPopulation";

import apiRouter from "./routes/api";

console.log("Starting application");

const sequelize = new Sequelize({
  dialect: "postgres",
  database: "postgres",
  username: "postgres",
  password: "postgres",
  host: "db", // Use the service name defined in docker-compose.yml
  port: 5432,
  //storage: ":memory:",
  // Uncomment if you don't want to see the executed SQL requests in the logs
  //logging: false,
});

// maybe we may want to move all the config of the DB to another file.
const initModels = async () => {
  await initItem(sequelize);
  await initShoppingList(sequelize);

  Item.belongsTo(ShoppingList, { foreignKey: "ShoppingListId" });
  ShoppingList.hasMany(Item, { foreignKey: "ShoppingListId" });

  await sequelize.sync({ alter: true, force: true });
};

const initializeDatabase = async () => {
  await initModels();
  await populateDatabase();
};
initializeDatabase();

const app = express();

app.use("/api", apiRouter);

app.use(express.static("static"));

const port = 3000;
const server = app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

const shutdown = async () => {
  server.close();
  await sequelize.close();
};

process.once("SIGTERM", async function () {
  console.log("Stopping application");
  await shutdown();
  process.exit();
});
