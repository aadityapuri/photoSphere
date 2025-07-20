import { userBaseDto } from './userBaseDto.js';

export class createUserDto extends userBaseDto {
  password! : string;
  confirmPassword! : string;
}