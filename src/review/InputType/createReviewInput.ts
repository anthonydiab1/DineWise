import { IsInt, IsNotEmpty, IsString, Min, Max } from 'class-validator';
import { InputType, Field,ID } from "@nestjs/graphql"
@InputType()
export class CreateReviewInput {

  @Field()
  @IsInt()
  @IsNotEmpty()
  customerId: number;

  @Field()
  @IsInt()
  @IsNotEmpty()
  restaurantId: number;

  @Field()
  @IsString()
  @IsNotEmpty()
  comment: string;

  @Field()
  @IsInt()
  @Min(1, { message: 'Rating must be at least 1' })
  @Max(5, { message: 'Rating must be at most 5' })
  @IsNotEmpty()
  rating: number;
}
