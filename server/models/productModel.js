import mongoose from "mongoose";
const Schema = mongoose.Schema;

const productSchema = new Schema(
   {
      title: { type: String },
      price: { type: Number },
      description: { type: String },
      category: { type: String },
      image: { type: String }
   },
   { collection: 'Fake' }
);

const productLoginSchema = new Schema(
   {
      name: { type: String },
      email: { type: String },
      password: { type: String },
      isAdmin: { type: Boolean, default: false }
   },
   { collection: 'login', versionKey: false }
);


const productModel = mongoose.model('productModel', productSchema);
const productLoginModel = mongoose.model('productLoginModel', productLoginSchema);

export { productModel, productLoginModel };
