import { Controller } from "@nestjs/common";
import { ReviewService } from "./review.service";
import { Post,Body,Delete,Get,Put,Param } from "@nestjs/common";
import { createReviewDTO } from "./reviewDTO/createReviewDTO";
import { updateReviewDTO } from "./reviewDTO/updateReviewDTO";
@Controller("review")
export class ReviewController{
    constructor( private reviewService : ReviewService){}
    
    @Post()
    async create (@Body() dto: createReviewDTO){
        return this.reviewService.create(dto);
    }
    
    @Delete(":id")
    async delete (@Param('id')id:string){
        return this.reviewService.delete(Number(id));
    }
    
    @Get()
    async findAll(){
        return this.reviewService.findAll();
    }
    
    @Get(":id")
    async findUnique(@Param('id') id :string){
        return this.reviewService.findUnique(Number(id));
    }
    
    @Get("reviews/:restaurantId")
    async findByRestaurantId(@Param('restaurantId') restaurantId: string){
        return this.reviewService.findByRestaurantId(Number(restaurantId));
    }
    
    @Get("customer/:customerId")
    async findByCustomerId(@Param('customerId') customerId :string){
        return this.reviewService.findByCustomerId(Number(customerId));
    }

    @Put(":id")
    async update(@Param('id') id:string , @Body() dto : updateReviewDTO){
        return this.reviewService.update(dto,Number(id));
    }
}