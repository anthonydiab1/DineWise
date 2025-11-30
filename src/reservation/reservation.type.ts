import {ObjectType,Field ,Int, ID} from "@nestjs/graphql"
import {Customer} from "../customer/customer.type"
import {Restaurant } from "../restaurant/restaurant.type"
@ObjectType()
export class Reservation{   
    @Field(() => ID)
    id : number

    @Field()
    date : Date

     @Field()
    customerId: number;

    @Field()
    restaurantId: number;

    
    @Field()
    time : string 

    @Field(() => Int)
    nbOfGuests : number

    @Field()
    createdAt : Date

    @Field()
    updatedAt : Date
    
    @Field(() => Customer)
    customer : Customer

    @Field(() => Restaurant)
    restaurant : Restaurant
}
/*
model Reservation {
  id           Int       @id @default(autoincrement())
  customerId   Int
  restaurantId Int       
  date         DateTime
  time         String
  nbOfGuests   Int
  createdAt    DateTime  @default(now())
  updatedAt    DateTime  @updatedAt
  customer     Customer   @relation(fields: [customerId], references: [id],onDelete:Cascade)
  restaurant   Restaurant @relation(fields: [restaurantId], references: [id],onDelete:Cascade)
}
*/