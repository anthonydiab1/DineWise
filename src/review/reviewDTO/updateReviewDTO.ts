import { IsInt, IsNotEmpty, IsString, Min, IsDate, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

export class updateReviewDTO {
  @IsInt()
  @IsOptional()
  customerId: number;

  @IsInt()
  @IsOptional()
  restaurantId: number;

  @IsString()
  @IsOptional()
  review: string;

  @IsInt()
  @Min(1, { message: 'Rating must be at least 1' })
  @IsOptional()
  rating: number;

}
