import { Request, Response } from 'express';
import authService from '../services/authService.js';

async function registerUser (req: Request, res: Response) {
  try{
    const { fullName, userName, password, email, phone } = req.body;
    const newUser = await authService.signUp({ fullName, userName, password, email, phone });
    res.status(201).json({
      message: 'User registered successfully', newUser
    });
  }
  catch (error) {
    res.status(400).json({
      message: (error instanceof Error ? error.message : String(error))
    });
  }
}

export default registerUser;
