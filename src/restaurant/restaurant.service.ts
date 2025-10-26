import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateRestaurantDTO } from "./restaurantDTO/createRestaurantDTO";
import { UpdateCustomerDTO } from "src/customer/customerDTO/updateCustomerDTO";
import { UpdateRestaurantDTO } from "./restaurantDTO/updateRestaurantDTO";
import { min } from "class-validator";
@Injectable({})
export class RestaurantService{
    constructor(private prisma:PrismaService){

    }
    async create(data:CreateRestaurantDTO){
        return this.prisma.restaurant.create({data});
    }
    async delete(id:number){
        const existing = await this.prisma.restaurant.findUnique({where:{id}});
        if(!existing){
            throw new NotFoundException('Restaurant with id  not found  ')
        }
        return this.prisma.restaurant.delete({
            where:{id}
        });
    }
    async update(data :UpdateRestaurantDTO , id: number){
        const existing = await this.prisma.restaurant.findUnique({where:{id}});
        if(!existing){
            throw new NotFoundException(`Restaurant with ID ${id} not found`);
        }
        return this.prisma.restaurant.update({
            where:{id},
            data,
        });

    }
    async findAll(){
        return this.prisma.restaurant.findMany();
    }
    async findUnique(id : number){
        const existing = await this.prisma.restaurant.findUnique({where :{id}});
        if(!existing){
             throw new NotFoundException(`Restaurant with ID ${id} not found`);
        }
        return this.prisma.restaurant.findUnique({where:{id}});
    }
    async findByCuisine( cuisine : string){
        const existing = await this.prisma.restaurant.findMany({where:{cuisine}});
        if(!existing){
            throw new NotFoundException(`Restaurants with cuisine ${cuisine} are not found`);
        }
        return this.prisma.restaurant.findMany({where:{cuisine}});
    }
    async findByName (name :string){
        const existing = await this.prisma.restaurant.findFirst({where:{name}});
        if(!existing){
            throw new NotFoundException(`Restaurant with name ${name} is not found`);
        }
        return this.prisma.restaurant.findFirst({where:{name}});
    }
    async findByPriceRange(minPrice : number , maxPrice:number){
        if(maxPrice<minPrice){
            throw new BadRequestException(`Min Price cannot be larger than maxPrice`)
        }
        const existing = await this.prisma.restaurant.findMany({where:{
            averagePrice:{
                gte:minPrice,
                lte:maxPrice
            },
        },
    })
    if(!existing){
        throw new NotFoundException(`No restaurants within this price range exists`);
    }
    return this.prisma.restaurant.findMany({where:{
        averagePrice:{
            gte:minPrice,
            lte:maxPrice
        }
    }})

    }
}