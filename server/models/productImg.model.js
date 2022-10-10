const { db, DataTypes } = require('../utils/database.util');

const ProductImg = db.define('productImg', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
	},
	imgUrl: {
		type: DataTypes.STRING,
		allowNull: false,
	},
    productId: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	status: {
		type: DataTypes.STRING,
		allowNull: false,
		defaultValue: 'active',
	},
});

module.exports = { ProductImg };