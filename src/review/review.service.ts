import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { createReviewDTO } from "./reviewDTO/createReviewDTO";
import { NotFoundException } from "@nestjs/common";
import { updateReviewDTO } from "./reviewDTO/updateReviewDTO";
@Injectable({})
export class ReviewService{
    constructor(private prisma: PrismaService){
        }
        async create (data: createReviewDTO){
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
        async update(data :updateReviewDTO , id: number){
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