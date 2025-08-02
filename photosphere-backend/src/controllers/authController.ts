import authService from '../services/authService.js';
import { Body, Controller, Post, Route, Tags } from 'tsoa';
import { createUserRequestDto } from '../dtos/user/createUserRequestDto.js';
import { verifyUserRequestDto } from '../dtos/user/verifyUserRequestDto.js';


@Tags('Auth')
@Route('api/auth')
export class AuthController extends Controller{
  @Post('register')
  public async registerUser (@Body () body: createUserRequestDto): Promise<{message?: string, newUser?: any, statusCode?: number}> {
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

  @Post('login')
  public async Login(@Body() body: verifyUserRequestDto): Promise<{message?:string, user?:any, statusCode?:number}>{
    try {
      const { userName, password } = body;

      return {
        message: 'User logged in successfully',
        user: { userName }, // Placeholder for user data
        statusCode: 200
      };
    } catch (error: any) {
      return {
        message: error?.message || 'An error occurred during login',
        user: null,
        statusCode: 400 // Bad Request
      };
    }
  }
}

export default AuthController;
