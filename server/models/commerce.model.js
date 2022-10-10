const { db, DataTypes } = require('../utils/database.util');

const Commerce = db.define('commerce', {
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
	address: {
		type: DataTypes.STRING,
		allowNull: false,
	},
    userId: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
    categoryCommerceId: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	status: {
		type: DataTypes.STRING,
		allowNull: false,
		defaultValue: 'active',
	},
});

module.exports = { Commerce };