import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { createReviewDTO } from "./reviewDTO/createReviewDTO";
import { NotFoundException } from "@nestjs/common";
import { updateReviewDTO } from "./reviewDTO/updateReviewDTO";
import { UpdateReviewInput } from "./InputType/updateReviewInput";
import { CreateReviewInput } from "./InputType/createReviewInput";
@Injectable({})
export class ReviewService{
    constructor(private prisma: PrismaService){
        }
        async create (data: CreateReviewInput){
            return this.prisma.review.create({data});
        }
        async delete(id:number){
             const existing = await this.prisma.review.findUnique({where:{id}});
                    if(!existing){
                        throw new NotFoundException('Review with id  not found  ')
                    }
            return this.prisma.review.delete({where:{id}});
        }
        async findAll (){
            return this.prisma.review.findMany();
        }
        async findUnique(id:number){
            return this.prisma.review.findUniqueOrThrow({where:{id}});
        }
        async findByRestaurantId(id:number){
            return this.prisma.review.findMany({where:{restaurantId:id}});
        }
        async findByCustomerId(id:number){
            return this.prisma.review.findMany({where:{customerId:id}});
        }
        async update(data :UpdateReviewInput , id: number){
               const existing = await this.prisma.review.findUnique({where:{id}});
               if(!existing){
                   throw new NotFoundException(`Review with ID ${id} not found`);
               }
               return this.prisma.review.update({
                   where:{id},
                   data,
               });
       
           }
        
        
}