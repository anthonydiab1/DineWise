import { InputType, Field } from "@nestjs/graphql"
import { IsEmail, IsString, IsPhoneNumber, IsEnum, IsOptional, Matches } from 'class-validator'
import { UserRole } from "../../../generated/prisma/index";

@InputType()
export class UpdateCustomerInput {
    @Field({ nullable: true })
    @IsString()
    @IsOptional()
    firstName?: string;

    @Field({ nullable: true })
    @IsString()
    @IsOptional()
    lastName?: string;

    @Field({ nullable: true })
    @IsString()
    @IsOptional()
    userName?: string;

    @Field({ nullable: true })
    @IsEmail()
    @IsOptional()
    email?: string;

    @Field({ nullable: true })
    @IsString()
    @IsOptional()
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/, {
      message: 'Password must be at least 8 characters long and include uppercase, lowercase, and a number',
    })
    password?: string;

    @Field({ nullable: true })
    @IsPhoneNumber('LB')
    @IsOptional()
    phoneNumber?: string;

    @Field(() => UserRole, { nullable: true })
    @IsEnum(UserRole)
    @IsOptional()
    role?: UserRole;
}