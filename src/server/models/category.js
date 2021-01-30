import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const categorySchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
    unique: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
});

categorySchema.plugin(uniqueValidator, {
  message: 'Ya existe una categoria con el nombre: {PATH}',
});

export default mongoose.model('Category', categorySchema);
