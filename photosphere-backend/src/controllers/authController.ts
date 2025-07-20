import authService from '../services/authService.js';
import { Body, Controller, Post, Route, Tags } from 'tsoa';
import { createUserDto } from '../dtos/user/createUserDto.js';


@Tags('Auth')
@Route('api/auth')
export class AuthController extends Controller{
  @Post('register')
  public async registerUser (@Body () body: createUserDto): Promise<{message?: string, newUser?: any, statusCode?: number}> {
    try{
      const { fullName, userName, password, email, phone, profilePicture, bio } = body;
      const newUser = await authService.signUp({ fullName, userName, password, email, phone });
      return {
        message: 'User registered successfully',
        newUser,
        statusCode: 201
      }
    }
    catch (error: any) {
      return{
        message: error?.message || 'An error occurred during registration',
        newUser: null,
        statusCode: 400 // Bad Request
      }
    }
  }
}

export default AuthController;
