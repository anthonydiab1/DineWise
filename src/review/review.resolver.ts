import {Resolver , Query, Mutation , Args} from "@nestjs/graphql"
import { ReviewService } from "./review.service"
import { Review } from "./review.type"
import { CreateReviewInput } from "./InputType/createReviewInput";
import { UpdateReviewInput } from "./InputType/updateReviewInput";


@Resolver(() => Review)
export class ReviewResolver{
    constructor(private reviewService : ReviewService){}
     @Query(() =>[Review])
        async reviews(){
            return this.reviewService.findAll();
        }
     @Query(() =>Review)
        async reviewById(@Args('id') id: number){
            return this.reviewService.findUnique(id);
        }
    @Query(() => [Review])
        async reviewByCustomer(@Args('customerId') customerId: number){
            return this.reviewService.findByCustomerId(customerId);
        }
     @Query(() => [Review])
        async reviewByRestaurant(@Args('restaurantId') restaurantId: number){
            return this.reviewService.findByRestaurantId(restaurantId);
        }
    @Mutation(() => Review)
    async createReview (@Args('input') input : CreateReviewInput){
        return this.reviewService.create(input);
    }
    @Mutation(() => Review )
    async updateReview(@Args('input') input : UpdateReviewInput,@Args('id') id: number){
        return this.reviewService.update(input,id);
    }
    @Mutation(() => Review)
    async deleteReview(@Args('id') id : number){
        return this.reviewService.delete(id);
    }
}