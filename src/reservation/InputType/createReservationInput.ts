import { IsDate, IsInt, IsNotEmpty, IsString, Matches, Min } from "class-validator";
import { Type } from "class-transformer";
import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class CreateReservationInput {
    @Field()
    @IsInt()
    @IsNotEmpty()
    customerId: number;

    @Field()
    @IsInt()
    @IsNotEmpty()
    restaurantId: number;
    
    @Field()
    @IsDate()
    @IsNotEmpty()
    @Type(() => Date)
    date: Date;

    @Field()
    @IsString()
    @IsNotEmpty()
    @Matches(/^([01]\d|2[0-3]):([0-5]\d)(:[0-5]\d)?$/, {
        message: 'time must be in HH:mm or HH:mm:ss format',
    })
    time: string;

    @Field()
    @IsInt()
    @Min(1)
    @IsNotEmpty()
    nbOfGuests: number;
}