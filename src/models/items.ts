import { DataTypes, Model, Sequelize } from "sequelize";
//export default class User extends Model {}

// I'm going to infer that  types imported have to be respected but with typescript  TypeScript >= 4.1 && Sequelize >=6.14.0  we are able to use a verbose solution using InferAttributes, InferCreationAttributes

class Item extends Model {
  declare id: number;
  declare name: string;
  declare unit: string | null;
  declare quantity: number;
  declare price: number | null;

  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;
}

const initItem = function (sequelize: Sequelize) {
  Item.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      unit: {
        type: DataTypes.STRING,
      },
      quantity: {
        type: DataTypes.INTEGER,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      ShoppingListId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Item",
    }
  );
};

export default Item;
export { initItem };
