import { InputType, Field } from "@nestjs/graphql"
import { Min, IsString, IsNotEmpty, IsInt, IsLatitude, IsLongitude, IsNumber, IsPositive, Matches, IsPhoneNumber, MaxLength } from "class-validator";

@InputType()
export class CreateRestaurantInput {
    @Field()
    @IsString()
    @IsNotEmpty()
    name: string;

    @Field()
    @IsLatitude()
    @IsNotEmpty()
    latitude: number;
    
    @Field()
    @IsLongitude()
    @IsNotEmpty()
    longitude: number;

    @Field()
    @IsString()
    @IsNotEmpty()
    cuisine: string;
    
    @Field()
    @IsPhoneNumber("LB")
    @IsNotEmpty()
    phoneNumber: string;
    
    @Field()
    @IsInt()
    @Min(1)
    @IsNotEmpty()
    capacity: number;
    
    @Field()
    @IsNumber({}, { message: 'averagePrice must be a number' })
    @IsPositive()
    @IsNotEmpty()
    averagePrice: number;
    
    @Field()
    @Matches(/^([01]\d|2[0-3]):([0-5]\d)(:[0-5]\d)?$/, {
      message: 'openingHour must be in HH:mm or HH:mm:ss format',
    })
    @IsNotEmpty()
    openingHour: string;
    
    @Field()
    @Matches(/^([01]\d|2[0-3]):([0-5]\d)(:[0-5]\d)?$/, {
      message: 'closingHour must be in HH:mm or HH:mm:ss format',
    })
    @IsNotEmpty()
    closingHour: string;
    
    @Field()
    @IsString()
    @IsNotEmpty()
    @MaxLength(1000)
    description: string;

    @Field()
    @IsString()
    @IsNotEmpty()
    locationInText: string;
}