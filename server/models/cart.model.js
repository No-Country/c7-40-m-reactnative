const { db, DataTypes } = require('../utils/database.util');

const Cart = db.define('cart', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
	},
	userId: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
    status: {
		type: DataTypes.STRING,
		allowNull: false,
		defaultValue: 'active',
	},
});

module.exports = { Cart };
