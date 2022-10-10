const { db, DataTypes } = require('../utils/database.util');

const Product = db.define('product', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	description: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	quantity: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
    price: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
    categoryProductId: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
    commerceId: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	status: {
		type: DataTypes.STRING,
		allowNull: false,
		defaultValue: 'active',
	},
});

module.exports = { Product };