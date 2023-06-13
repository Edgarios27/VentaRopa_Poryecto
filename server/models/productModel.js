import mongoose from "mongoose";
const Schema = mongoose.Schema

const productSchema = new Schema(
   {
      title: { type: String },
      price: { type: Number },
      description: { type: String },
      category: { type: String },
      image: { type: String }
   },
   { collection: 'Fake' }
)

export default mongoose.model('productModel', productSchema)