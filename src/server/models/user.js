import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const validRoles = {
  values: ['ADMIN_ROLE', 'USER_ROLE'],
  message: '{VALUE} no es un rol valid',
};

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'El nombre es necesario'],
  },
  email: {
    type: String,
    required: [true, 'El email es necesario'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'La contraseña es necesaria'],
  },
  img: {
    type: String,
    required: false,
  },
  role: {
    type: String,
    default: 'USER_ROLE',
    enum: validRoles,
  },
  state: {
    type: Boolean,
    default: true,
  },
  google: {
    type: Boolean,
    default: false,
  },
});

userSchema.plugin(uniqueValidator, {
  message: 'El {PATH} ingresado ya esta siendo utilizado',
});

userSchema.methods.toJSON = function () {
  let userObject = this.toObject();
  delete userObject.password;
  delete userObject.google;

  return userObject;
};

export default mongoose.model('User', userSchema);
