const { db, DataTypes } = require('../utils/database.util');

const ReviewCommerce = db.define('reviewCommerce', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
	},
	score: {
		type: DataTypes.INTEGER,
		allowNull: false,
        defaultValue: 0
	},
    isFavorite: {
		type: DataTypes.BOOLEAN,
		allowNull: false,
        defaultValue: false,
	},
    commerceId: {
		type: DataTypes.INTEGER,
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

module.exports = { ReviewCommerce };