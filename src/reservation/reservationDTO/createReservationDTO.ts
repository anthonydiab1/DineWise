import { IsDate, IsInt, IsNotEmpty, IsString,Matches, Min} from "class-validator";
import { Type } from "class-transformer";

/*
model Reservation {
  id           Int       @id @default(autoincrement())
  customerId   Int
  restaurantId Int
  date         DateTime
  time         String
  nbOfGuests   Int
  createdAt    DateTime  @default(now())
  updatedAt    DateTime
  customer     Customer   @relation(fields: [customerId], references: [id])
  restaurant   Restaurant @relation(fields: [restaurantId], references: [id])
}
  */
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