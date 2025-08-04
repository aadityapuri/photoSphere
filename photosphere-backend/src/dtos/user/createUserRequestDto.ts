import { userBaseDto } from './userBaseDto.js';

export class createUserRequestDto extends userBaseDto {
  password! : string;
  confirmPassword! : string;
}