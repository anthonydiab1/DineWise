import { IsInt, IsNotEmpty, IsString, Min } from 'class-validator';


export class createReviewDTO {
  @IsInt()
  @IsNotEmpty()
  customerId: number;

  @IsInt()
  @IsNotEmpty()
  restaurantId: number;

  @IsString()
  @IsNotEmpty()
  review: string;

  @IsInt()
  @Min(1, { message: 'Rating must be at least 1' })
  @IsNotEmpty()
  rating: number;
}
