import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    fullName: {type: String, required: true},
    userName: {type: String, required: true, unique: true},
    email: {type:String, required:true, unique:true},
    password: {type: String, required:true},
    phone: {type: String},
    profilePicture: {type: String, default: 'default.jpg'},
    bio: {type: String, default: ''}
  }, {timestamps: true}
);

export default model('User', userSchema);