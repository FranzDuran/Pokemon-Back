const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    life:{
      type: DataTypes.INTEGER,
      validate : {
        min : 0 ,
        max : 100
      },
      defaultValue : 10
    },
    attack: {
      type: DataTypes.INTEGER,
      validate : {
        min : 0 ,
        max : 100
      },
      defaultValue : 10
    },
    defending: {
      type: DataTypes.INTEGER,
      validate : {
        min : 0 ,
        max : 100
      },
      defaultValue : 10
    },
    speed: {
      type: DataTypes.INTEGER,
      validate : {
        min : 0 ,
        max : 100
      },
      defaultValue : 10
    },
    height: {
      type: DataTypes.INTEGER
    },
    weight: {
      type: DataTypes.INTEGER
    },
    image:{
      type:DataTypes.STRING
      
    },
    createdInDb:{
      type:DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    }
  }, {timestamps: false});
};
