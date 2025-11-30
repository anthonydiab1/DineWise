import {Resolver , Query, Mutation , Args} from "@nestjs/graphql"
import { RestaurantService } from "./restaurant.service"
import { Restaurant } from "./restaurant.type"
import { CreateRestaurantInput } from "./InputType/createRestaurantInput";
import { UpdateCustomerInput } from "src/customer/InputType/updateCustomerInput";
import { UpdateRestaurantInput } from "./InputType/updateRestaurantInput";
 
@Resolver(() => Restaurant)
export class RestaurantResolver{
    constructor(private restaurantService : RestaurantService){}

    @Query(() =>[Restaurant])
    async restaurants(){
        return this.restaurantService.findAll();
    }
    @Query(() => Restaurant)
    async restaurantById(@Args('id') id : number){
        return this.restaurantService.findUnique(id);
    }
    @Query(() => [Restaurant])
    async restaurantsByCuisine(@Args('cuisine') cuisine : string){
        return this.restaurantService.findByCuisine(cuisine);
    }
    @Query( () => Restaurant)
    async restaurantByName(@Args('name') name: string){
        return this.restaurantService.findByName(name);
    }
    @Query(() => [Restaurant])
    async restaurantsByPriceRange(@Args('minPrice')minPrice:number,@Args('maxPrice') maxPrice:number){
        return this.restaurantService.findByPriceRange(minPrice,maxPrice);
    }
    @Query(() => [Restaurant])
    async restaurantsByLocation(@Args('locationInText') locationInText:string){
        return this.restaurantService.findByLocation(locationInText);
    }
    @Mutation(() => Restaurant)
    async deleteRestaurant(@Args('id') id : number){
        return this.restaurantService.delete(id);
    }
    @Mutation(() => Restaurant)
    async createRestaurant(@Args('input') input : CreateRestaurantInput){
        return this.restaurantService.create(input);
    }
    @Mutation( () => Restaurant)
    async updateRestaurant(@Args('input')input : UpdateRestaurantInput, @Args('id') id:number){
        return this.restaurantService.update(input,id);
    }
}