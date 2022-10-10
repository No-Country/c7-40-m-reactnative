// Models
const { User } = require("./user.model");
const { Commerce } = require("../models/commerce.model");
const { Product } = require("../models/product.model");
const { Cart } = require("../models/cart.model");
const { Record } = require("../models/record.model");
const { ReviewCommerce } = require("../models/reviewCommerce.model")
const { LogoImg } = require("../models/logoImg.model")
const { CategoryCommerce } = require("../models/categoryCommerce.model")
const { CategoryProduct } = require("../models/categoryProduct.model")
const { ProductImg } = require("../models/productImg.model")
const { ProductsInCart } = require("../models/productsInCart.model")


const initModels = () => {

  // 1 User <-----> 1 Cart
  User.hasOne(Cart, { foreignKey: "userId" });
  Cart.belongsTo(User);

  // 1 User <----> M Record
  User.hasMany(Record, { foreignKey: "userId" });
  Record.belongsTo(User);

  // 1 User <----> M review
  User.hasMany(ReviewCommerce, { foreignKey: "userId" });
  ReviewCommerce.belongsTo(User);

  // 1 User <----> 1 Commerce
  User.hasOne(Commerce, { foreignKey: "userId" });
  Commerce.belongsTo(User);

  

  // commerce 1 <----> M product
  Commerce.hasMany(Product, { foreignKey: "commerceId" });
  Product.belongsTo(Commerce);

  // 1 Commerce <----> M Review
  Commerce.hasMany(ReviewCommerce, { foreignKey: "commerceId" });
  ReviewCommerce.belongsTo(Commerce);

   // 1 Commerce <----> 1 LogoImg
   Commerce.hasOne(LogoImg, { foreignKey: "commerceId" });
   LogoImg.belongsTo(Commerce);

   // 1 Category <-----> 1 Commerce
  CategoryCommerce.hasOne(Commerce, { foreignKey: "categoryCommerceId" });
  Commerce.belongsTo(CategoryCommerce);




 // 1 Category <-----> 1 Product
 CategoryProduct.hasOne(Commerce, { foreignKey: "categoryProductId" });
 Commerce.belongsTo(CategoryProduct);

 // Product 1 <----> M productImg
 Product.hasMany(ProductImg, { foreignKey: "productId" });
 ProductImg.belongsTo(Product);

  // 1 Product <----> 1 ProducInCart
  Product.hasOne(ProductsInCart, { foreignKey: "productId" });
  ProductsInCart.belongsTo(Product);



  // 1 Cart <-----> 1 Order
  Cart.hasOne(Record, { foreignKey: "cartId" });
  Record.belongsTo(Cart);

  // 1 Cart <----> M ProductInCart
  Cart.hasMany(ProductsInCart, { foreignKey: "cartId" });
  ProductsInCart.belongsTo(Cart);
};

module.exports = { initModels };
