import { InputType,Field } from "@nestjs/graphql";
import { IsString,IsNotEmpty, IsEmail, Matches, IsPhoneNumber, IsEnum, IsOptional } from "class-validator";
import { UserRole } from "../../../generated/prisma/index";
@InputType()
export class CreateCustomerInput{
    @Field()
    @IsString()
    @IsNotEmpty()
    firstName: string;

    @Field()
    @IsString()
    @IsNotEmpty()
    lastName: string;

    @Field()
    @IsString()
    @IsNotEmpty()
    userName: string;

    @Field()
    @IsEmail()
    @IsNotEmpty()
    email : string;

    @Field()
    @IsString()
    @IsNotEmpty()
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/, {
    message:
      'Password must be at least 8 characters long and include uppercase, lowercase, and a number',
    })
    password: string;

    @Field()
    @IsPhoneNumber('LB')
    @IsNotEmpty()
    phoneNumber: string

    @Field(() => UserRole, {defaultValue:UserRole.CUSTOMER})
    @IsEnum(UserRole)
    @IsOptional()
    role?: UserRole;





}