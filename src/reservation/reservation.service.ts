import { Injectable,NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { createReservationDTO} from "./reservationDTO/createReservationDTO";
import  {updateReservationDTO} from "./reservationDTO/updateReservationDTO"
import { CreateReservationInput } from "./InputType/createReservationInput";
import { UpdateReservationInput } from "./InputType/updateReservationInput";
@Injectable({})
export class ReservationService{
    constructor(private prisma: PrismaService){
    }
    async create (data: CreateReservationInput){
        return this.prisma.reservation.create({data});
    }
    async delete(id:number){
         const existing = await this.prisma.reservation.findUnique({where:{id}});
                if(!existing){
                    throw new NotFoundException('Reservation with id  not found  ')
                }
        return this.prisma.reservation.delete({where:{id}});
    }
    async findAll (){
        return this.prisma.reservation.findMany();
    }
    async findUnique(id:number){
        return this.prisma.reservation.findUniqueOrThrow({where:{id}});
    }
    async findByRestaurantId( restaurantId : number){
        return this.prisma.reservation.findMany({where :{restaurantId}});
    }
    async findByCustomerId( customerId : number){
        return this.prisma.reservation.findMany({where :{customerId}});
    }
    async update(data :UpdateReservationInput , id: number){
           const existing = await this.prisma.reservation.findUnique({where:{id}});
           if(!existing){
               throw new NotFoundException(`Reservation with ID ${id} not found`);
           }
           return this.prisma.reservation.update({
               where:{id},
               data,
           });
   
       }
    
    
}