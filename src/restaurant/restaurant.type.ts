import { ObjectType, Field, Int, Float, ID } from "@nestjs/graphql";
import { Reservation } from "src/reservation/reservation.type";
import { Customer } from "src/customer/customer.type";
import { Review } from "src/review/review.type";

@ObjectType()
export class Restaurant {
    @Field(() => ID)
    id: number

    @Field()
    name: string

    @Field(() => Float)
    latitude: number
    
    @Field(() => Float)
    longitude: number

    @Field()
    description: string 
    
    @Field()
    cuisine: string 

    @Field()
    phoneNumber: string

    @Field(() => Int)
    capacity: number 

    @Field(() => Float)
    averagePrice: number

    @Field()
    imageUrl?: string

    @Field()
    menuUrl?: string 

    @Field()
    locationInText: string

    @Field()
    openingHour: string 

    @Field()
    closingHour: string 

    @Field()
    createdAt: Date

    @Field()
    updatedAt: Date 

    @Field(() => Customer)
    owner?: Customer

    @Field(() => [Reservation],{nullable : true })
    reservations?: Reservation[]

    @Field(() => [Review],{nullable : true })
    reviews?: Review[]
}