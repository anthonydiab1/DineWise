import { IsOptional,IsString,IsEmail,Matches,IsPhoneNumber } from "class-validator";

export class UpdateCustomerDTO{
    @IsOptional()
    @IsString()
  firstName: string;

  @IsString()
  @IsOptional()
  lastName: string;

  @IsString()
  @IsOptional()
  userName: string;

  @IsEmail()
  @IsOptional()
  email: string;

  @IsString()
  @IsOptional()
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/, {
    message:
      'Password must be at least 8 characters long and include uppercase, lowercase, and a number',
  })
  password: string;

  @IsPhoneNumber('LB') 
 @IsOptional()
  phoneNumber: string;

}