const { db, DataTypes } = require('../utils/database.util');

const Record = db.define('record', {
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
    cartId: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	totalPrice: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	status: {
		type: DataTypes.STRING,
		allowNull: false,
		defaultValue: 'active',
	},
});

module.exports = { Record };