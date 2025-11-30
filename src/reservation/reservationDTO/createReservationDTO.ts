import { IsDate, IsInt, IsNotEmpty, IsString,Matches, Min} from "class-validator";
import { Type } from "class-transformer";
 export class createReservationDTO{
    @IsInt()
    @IsNotEmpty()
    customerId : number

    @IsInt()
    @IsNotEmpty()
    restaurantId : number
    

    @IsDate()
    @IsNotEmpty()
    @Type(()=>Date)
    date :Date
    @IsString()
    @IsNotEmpty()
    @Matches(/^([01]\d|2[0-3]):([0-5]\d)(:[0-5]\d)?$/, {
        message: 'time  must be in HH:mm or HH:mm:ss format',
      })
    time:string
    @IsInt()
    @Min(1)
    @IsNotEmpty()
    nbOfGuests:number
 }