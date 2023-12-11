import { DataTypes, Model, Sequelize } from "sequelize";
//export default class User extends Model {}

//I'm going to infer that types imported have to be respected but with typescript  TypeScript >= 4.1 && Sequelize >=6.14.0  we are able to use a verbose solution using InferAttributes, InferCreationAttributes

class ShoppingList extends Model {
  declare id: number;
  declare buyerName: string;

  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;
}

const initShoppingList = function (sequelize: Sequelize) {
  ShoppingList.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      buyerName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "ShoppingList",
    }
  );
};

export default ShoppingList;
export { initShoppingList };
