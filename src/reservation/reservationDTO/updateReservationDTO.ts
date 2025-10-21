import { IsDate, IsInt, IsNotEmpty, IsOptional, IsString,Matches, Min} from "class-validator";
import { Type } from "class-transformer";
 export class updateReservationDTO{
    @IsOptional()
    @IsInt()
    customerId : number

    @IsInt()
    @IsOptional()
    restaurantId : number
   

    @IsDate()
    @IsOptional()
    @Type(()=> Date)
    date :Date
    @IsString()
    @IsOptional()
    @Matches(/^([01]\d|2[0-3]):([0-5]\d)(:[0-5]\d)?$/, {
        message: 'time  must be in HH:mm or HH:mm:ss format',
      })
    time:string
    @IsInt()
    @Min(1)
    @IsOptional()
    nbOfGuests:number
 }