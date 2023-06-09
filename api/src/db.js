require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');

//---VERCEL---
const pg = require("pg")

const {
  DB_USER, DB_PASSWORD, DB_HOST, DB_DATABASE,
  RW_DB_USER, RW_DB_PASSWORD, RW_DB_HOST, RW_DB_PORT, RW_DB_DATABASE,
  EF_DB_USER, EF_DB_PASSWORD, EF_DB_HOST, EF_DB_PORT, EF_DB_DATABASE
} = process.env;


// DB RAYLWAY
//const sequelize = new Sequelize(`postgresql://${RW_DB_USER}:${RW_DB_PASSWORD}@${RW_DB_HOST}:${RW_DB_PORT}/${RW_DB_DATABASE}`, {

// DB ElephantSQL
const sequelize = new Sequelize(`postgres://${EF_DB_USER}:${EF_DB_PASSWORD}@${EF_DB_HOST}/${EF_DB_DATABASE}`, {

//const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_DATABASE}`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed

  dialectModule: pg, //---VERCEL---
});
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Pokemon, Type } = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);
Pokemon.belongsToMany(Type, { through: "PokemonType" });
Type.belongsToMany(Pokemon, { through: "PokemonType" });

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};
