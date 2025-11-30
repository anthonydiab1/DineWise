import { InputType, Field } from "@nestjs/graphql"
import { Min, IsString, IsOptional, IsInt, IsLatitude, IsLongitude, IsNumber, IsPositive, Matches, IsPhoneNumber, MaxLength } from "class-validator";

@InputType()
export class UpdateRestaurantInput {
    @Field({ nullable: true })
    @IsString()
    @IsOptional()
    name?: string;

    @Field({ nullable: true })
    @IsLatitude()
    @IsOptional()
    latitude?: number;
    
    @Field({ nullable: true })
    @IsLongitude()
    @IsOptional()
    longitude?: number;

    @Field({ nullable: true })
    @IsString()
    @IsOptional()
    cuisine?: string;
    
    @Field({ nullable: true })
    @IsPhoneNumber("LB")
    @IsOptional()
    phoneNumber?: string;
    
    @Field({ nullable: true })
    @IsInt()
    @Min(1)
    @IsOptional()
    capacity?: number;
    
    @Field({ nullable: true })
    @IsNumber({}, { message: 'averagePrice must be a number' })
    @IsPositive()
    @IsOptional()
    averagePrice?: number;
    
    @Field({ nullable: true })
    @Matches(/^([01]\d|2[0-3]):([0-5]\d)(:[0-5]\d)?$/, {
      message: 'openingHour must be in HH:mm or HH:mm:ss format',
    })
    @IsOptional()
    openingHour?: string;
    
    @Field({ nullable: true })
    @Matches(/^([01]\d|2[0-3]):([0-5]\d)(:[0-5]\d)?$/, {
      message: 'closingHour must be in HH:mm or HH:mm:ss format',
    })
    @IsOptional()
    closingHour?: string;
    
    @Field({ nullable: true })
    @IsString()
    @IsOptional()
    @MaxLength(1000)
    description?: string;

    @Field({ nullable: true })
    @IsString()
    @IsOptional()
    locationInText?: string;
}