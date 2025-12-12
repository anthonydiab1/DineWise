import { IsInt, IsNotEmpty, IsString, Min, Max, IsOptional } from 'class-validator';
import { InputType, Field } from "@nestjs/graphql"

@InputType()
export class UpdateReviewInput {
    @Field({ nullable: true })
    @IsInt()
    @IsOptional()
    customerId?: number;

    @Field({ nullable: true })
    @IsInt()
    @IsOptional()
    restaurantId?: number;

    @Field({ nullable: true })
    @IsString()
    @IsOptional()
    comment?: string;

    @Field({ nullable: true })
    @IsInt()
    @Min(1, { message: 'Rating must be at least 1' })
    @Max(5, { message: 'Rating must be at most 5' })
    @IsOptional()
    rating?: number;
}