import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateRestaurantDTO } from "./restaurantDTO/createRestaurantDTO";
import { UpdateCustomerDTO } from "src/customer/customerDTO/updateCustomerDTO";
import { UpdateRestaurantDTO } from "./restaurantDTO/updateRestaurantDTO";
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
}