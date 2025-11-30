import { IsDate, IsInt, IsOptional, IsString, Matches, Min } from "class-validator";
import { Type } from "class-transformer";
import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class UpdateReservationInput {
    @Field({ nullable: true })
    @IsInt()
    @IsOptional()
    customerId?: number;

    @Field({ nullable: true })
    @IsInt()
    @IsOptional()
    restaurantId?: number;
    
    @Field({ nullable: true })
    @IsDate()
    @IsOptional()
    @Type(() => Date)
    date?: Date;

    @Field({ nullable: true })
    @IsString()
    @IsOptional()
    @Matches(/^([01]\d|2[0-3]):([0-5]\d)(:[0-5]\d)?$/, {
        message: 'time must be in HH:mm or HH:mm:ss format',
    })
    time?: string;

    @Field({ nullable: true })
    @IsInt()
    @Min(1)
    @IsOptional()
    nbOfGuests?: number;
}