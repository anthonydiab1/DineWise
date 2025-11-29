import { Body, Controller, Post, Put, Param, Delete, Get } from "@nestjs/common";
import { RestaurantService } from "./restaurant.service";
import { CreateRestaurantDTO } from "./restaurantDTO/createRestaurantDTO";
import { UpdateRestaurantDTO } from "./restaurantDTO/updateRestaurantDTO";

@Controller("restaurant")
export class RestaurantController {
    constructor(private restaurantService: RestaurantService) {}

    @Post()
    async create(@Body() dto: CreateRestaurantDTO) {
        return this.restaurantService.create(dto);
    }

    @Put(":id")
    async update(@Param('id') id: string, @Body() dto: UpdateRestaurantDTO) {
        return this.restaurantService.update(dto, Number(id));
    }

    @Delete(":id")
    async delete(@Param('id') id: string) {
        return this.restaurantService.delete(Number(id));
    }

    
    @Get("cuisine/:cuisine")
    async findByCuisine(@Param('cuisine') cuisine: string) {
        return this.restaurantService.findByCuisine(cuisine);
    }

    @Get("name/:name")
    async findByName(@Param('name') name: string) {
        return this.restaurantService.findByName(name);
    }

    @Get("location/:locationInText")
    async findByLocation(@Param('locationInText') locationInText: string) {
        return this.restaurantService.findByLocation(locationInText);
    }

    @Get(":minPrice/:maxPrice")
    async findByPriceRange(@Param('minPrice') minPrice: string, @Param('maxPrice') maxPrice: string) {
        return this.restaurantService.findByPriceRange(Number(minPrice), Number(maxPrice));
    }

    
    @Get()
    async findAll() {
        return this.restaurantService.findAll();
    }

    @Get(":id")
    async findUnique(@Param('id') id: string) {
        return this.restaurantService.findUnique(Number(id));
    }
}