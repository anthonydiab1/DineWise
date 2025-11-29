import { Controller, Delete, Get, Post, Body, Param, Put } from "@nestjs/common";
import { ReservationService } from "./reservation.service";
import { createReservationDTO } from "./reservationDTO/createReservationDTO";
import { updateReservationDTO } from "./reservationDTO/updateReservationDTO";

@Controller("reservation")
export class ReservationController{
    constructor(private reservationService : ReservationService){}
    
    @Post()
    async create (@Body() dto: createReservationDTO){
        return this.reservationService.create(dto);
    }
    
    
    @Put(":id")
    async update(@Param('id') id:string , @Body() dto : updateReservationDTO){
        return this.reservationService.update(dto,Number(id));
    }
    
    @Delete(":id")
    async delete (@Param('id')id:string){
        return this.reservationService.delete(Number(id));
    }
    
    @Get('customer/:customerId')
    async findByCustomerId(@Param('customerId') customerId : string){
        return this.reservationService.findByCustomerId(Number(customerId));
    }
    
    @Get('restaurant/:restaurantId')
    async findByRestaurantId(@Param('restaurantId') restaurantId : string){
        return this.reservationService.findByRestaurantId(Number(restaurantId));
    }
    
   
    @Get(":id")
    async findUnique(@Param('id') id :string){
        return this.reservationService.findUnique(Number(id));
    }
    
    @Get()
    async findAll(){
        return this.reservationService.findAll();
    }
}
