import { ObjectType, Field, ID, registerEnumType ,Int} from "@nestjs/graphql";
import { UserRole } from "../../generated/prisma/index";
import { Restaurant } from "src/restaurant/restaurant.type";
import { Review } from "src/review/review.type";
import { Reservation } from "src/reservation/reservation.type";

// Register Prisma enum for GraphQL
registerEnumType(UserRole, {
  name: "UserRole",
});

@ObjectType()
export class Customer {
    @Field(() => ID)
    id: number
    
    @Field()
    firstName: string

    @Field()
    lastName: string

    @Field()
    userName: string

    @Field()
    email: string

    @Field()
    password: string

    @Field()
    phoneNumber: string

    @Field(() => UserRole)
    role: UserRole

    @Field(() => Int,{nullable :true})
    restaurantId?: number

    @Field()
    createdAt: Date

    @Field()
    updatedAt: Date

    @Field(() => Restaurant, { nullable: true })
    restaurant?: Restaurant

    @Field(() => [Review], { nullable: true })
    reviews?: Review[]
    
    @Field(() => [Reservation], { nullable: true })
    reservations?: Reservation[]
}