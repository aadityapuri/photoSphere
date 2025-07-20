import { userBaseDto } from "./userBaseDto";

export class GetUserDto extends userBaseDto {
  profilePicture?: string;
  bio?: string;
}
