import {
  IsString,
  IsEmail,
  IsPhoneNumber,
  Matches,
  IsNotEmpty,
  IsEnum,
  IsOptional,
} from 'class-validator';

export enum UserRole {
  CUSTOMER = 'CUSTOMER',
  RESTAURANT_OWNER = 'RESTAURANT_OWNER',
}

export class CreateCustomerDTO {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsString()
  @IsNotEmpty()
  userName: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/, {
    message:
      'Password must be at least 8 characters long and include uppercase, lowercase, and a number',
  })
  password: string;

  @IsPhoneNumber('LB')
  @IsNotEmpty()
  phoneNumber: string;

  @IsEnum(UserRole)
  @IsOptional() 
  role?: UserRole = UserRole.CUSTOMER; 
}