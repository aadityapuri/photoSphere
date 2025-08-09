import { generateToken } from "../common/auth/generate-token.js";
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
  const token = generateToken(newUser._id.toString());

  return { newUser, token };
}

async function login({username, password}: {username: string, password: string}) {
  if(!username || !password) throw new Error('Username and password are required');
  const loginField = detectLoginField(username);
  const user = await User.findOne({ [loginField]: username });

  if(!user) throw new Error('User not found');
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if(!isPasswordValid) throw new Error('Invalid password');
  
  const token = generateToken(user._id.toString());
  if (!token) {
    throw new Error('Failed to generate token');
  }
  return { user, token };
}

function detectLoginField(identifier: string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\d{10}$/;

  if (emailRegex.test(identifier)) return 'email';
  if (phoneRegex.test(identifier)) return 'phone';
  return 'userName';
}

export default { signUp, login };
