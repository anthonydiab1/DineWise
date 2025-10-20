import {IsString,IsEmail,IsPhoneNumber,Matches, IsNotEmpty} from 'class-validator';

/*
model Customer {
  id          Int          @id @default(autoincrement())
  firstName   String
  userName    String
  lastName    String
  email       String
  password    String
  phoneNumber String
  createdAt   DateTime     @default(now())
  updatedAt   DateTime
  reservations Reservation[]
  reviews      Review[]
}
  */
export class CreateCustomerDTO{
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

}