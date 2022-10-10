const { db, DataTypes } = require('../utils/database.util');

const User = db.define('user', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
	},
	firstName: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	lastName: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	address: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	mobile: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	email: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
	},
	password: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	role: {
		type: DataTypes.STRING,
		defaultValue: 'consumer',
		allowNull: false,
	},
	status: {
		type: DataTypes.STRING,
		allowNull: false,
		defaultValue: 'active',
	},
});

module.exports = { User };
