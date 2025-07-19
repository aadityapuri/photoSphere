import User from "../models/User.js";
import bcrypt from 'bcryptjs';

async function signUp ({fullName, userName, password, email, phone} : {fullName: string, userName: string, password: string, email: string, phone?: string}) {
  if(!fullName || !userName || !password || !email) {
    throw new Error('All fields are required');
  }
  
  const existingUser = await User.findOne({$or : [{userName}, {email}]})

  if(existingUser) {
    throw new Error('User with this username or email already exists');
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  
  const newUser = new User({
    fullName,
    userName,
    email,
    password: hashedPassword,
    phone
  });

  await newUser.save();

  return newUser;
}

export default {signUp};
