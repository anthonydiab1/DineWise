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

export class CreateRestaurantDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsLatitude()
  @IsNotEmpty()
  latitude: number;
 

  @IsLongitude()
  @IsNotEmpty()
  longitude: number;

  @IsString()
  @IsNotEmpty()
  cuisine: string;

  @IsPhoneNumber("LB")
  @IsNotEmpty()
  phoneNumber: string;

  @IsInt()
  @Min(1)
  @IsNotEmpty()
  capacity: number;

  @IsNumber({}, { message: 'averagePrice must be a number' })
  @IsPositive()
  averagePrice: number;

  @Matches(/^([01]\d|2[0-3]):([0-5]\d)(:[0-5]\d)?$/, {
    message: 'openingHour must be in HH:mm or HH:mm:ss format',
  })
  openingHour: string;

  @Matches(/^([01]\d|2[0-3]):([0-5]\d)(:[0-5]\d)?$/, {
    message: 'closingHour must be in HH:mm or HH:mm:ss format',
  })
  closingHour: string;

  
  @IsString()
  @IsNotEmpty()
  @MaxLength(1000)
  description: string;
  @IsString()
  @IsNotEmpty()
  locationInText: string;
  
}
