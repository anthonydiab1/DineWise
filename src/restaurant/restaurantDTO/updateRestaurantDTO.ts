import {
  IsString,
  IsPhoneNumber,
  IsNotEmpty,
  IsLongitude,
  IsLatitude,
  IsInt,
  Min,
  IsNumber,
  IsPositive,
  Matches,
  IsOptional,
  MaxLength,
} from 'class-validator';

export class UpdateRestaurantDTO {
  @IsString()
  @IsOptional()
  name: string;

  @IsLatitude()
  @IsOptional()
  latitude: number;

  @IsLongitude()
  @IsOptional()
  longitude: number;

  @IsString()
  @IsOptional()
  cuisine: string;

  @IsPhoneNumber('LB')
  @IsOptional()
  phoneNumber: string;

  @IsInt()
  @Min(1)
  @IsOptional()
  capacity: number;

  @IsNumber({}, { message: 'averagePrice must be a number' })
  @IsPositive()
  @IsOptional()
  averagePrice: number;

  @Matches(/^([01]\d|2[0-3]):([0-5]\d)(:[0-5]\d)?$/, {
    message: 'openingHour must be in HH:mm or HH:mm:ss format',
  })
  @IsOptional()
  openingHour: string;

  @Matches(/^([01]\d|2[0-3]):([0-5]\d)(:[0-5]\d)?$/, {
    message: 'closingHour must be in HH:mm or HH:mm:ss format',
  })
  @IsOptional()
  @IsString()
  closingHour: string;
 @IsOptional()
 @IsString()
 locationInText : string;
  
  @IsOptional()
  @IsString()
  @MaxLength(1000)
  description?: string;
}
