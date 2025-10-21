import { Injectable,NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { createReservationDTO} from "./reservationDTO/createReservationDTO";
import  {updateReservationDTO} from "./reservationDTO/updateReservationDTO"
@Injectable({})
export class ReservationService{
    constructor(private prisma: PrismaService){
    }
    async create (data: createReservationDTO){
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
    async update(data :updateReservationDTO , id: number){
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