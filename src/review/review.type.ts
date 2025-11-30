import { ObjectType, Field, ID, Int } from "@nestjs/graphql";
import { Customer } from "../customer/customer.type";
import { Restaurant } from "../restaurant/restaurant.type";

@ObjectType()
export class Review {
    @Field(() => ID)
    id: number

    @Field()
    comment: string

    @Field(() => Int)
    rating: number

    @Field()
    date: Date

    @Field()
    createdAt: Date

    @Field()
    updatedAt: Date

    @Field(() => Customer)
    customer: Customer

    @Field(() => Restaurant)
    restaurant: Restaurant
}


/*
model Review {
  id           Int       @id @default(autoincrement())
  customerId   Int
  restaurantId Int
  comment        String
  rating       Int
  createdAt    DateTime  @default(now())
  updatedAt    DateTime  @updatedAt
  date         DateTime  @default(now())
  // Relations
  customer     Customer   @relation(fields: [customerId], references: [id],onDelete:Cascade)
  restaurant   Restaurant @relation(fields: [restaurantId], references: [id], onDelete:Cascade)
}

*/