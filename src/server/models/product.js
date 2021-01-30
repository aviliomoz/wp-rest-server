import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'El nombre es necesario'],
    unique: true,
  },
  price: {
    type: Number,
    required: [true, 'El precio unitario es necesario'],
  },
  description: { type: String, required: false },
  img: { type: String, required: false },
  active: { type: Boolean, required: true, default: true },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

productSchema.plugin(uniqueValidator, {
  message: 'Ya existe un producto con el nombre: {VALUE}',
});

export default mongoose.model('Product', productSchema);
