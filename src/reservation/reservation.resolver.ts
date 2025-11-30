import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ReservationService } from './reservation.service';
import {Reservation} from  './reservation.type'
import { CreateReservationInput } from './InputType/createReservationInput';
import { updateReservationDTO } from './reservationDTO/updateReservationDTO';
import { UpdateReservationInput } from './InputType/updateReservationInput';
@Resolver(()=> Reservation)
export class ReservationResolver{
    constructor( private reservationService : ReservationService){}
    @Query(() => [Reservation])
    async reservations(){
        return this.reservationService.findAll();
    }
    @Query(() => [Reservation])
    async reservationsByCustomer(@Args('customerId')customerId:number){
        return this.reservationService.findByCustomerId(customerId);
    }
    @Query(() => [Reservation])
    async reservationsByRestaurant(@Args('restaurantId') restaurantId:number){
        return this.reservationService.findByRestaurantId(restaurantId);
    }
    @Query(() => Reservation)
    async reservationById(@Args('id') id : number){
        return this.reservationService.findUnique(id);
    }
    @Mutation( () => Reservation)
    async createReservation(@Args('input') input : CreateReservationInput){
        return this.reservationService.create(input);
    }
    @Mutation(() =>Reservation)
    async deleteReservation(@Args('id') id : number){
        return this.reservationService.delete(id);
    }
    
    @Mutation (() => Reservation)
    async updateReservation(@Args('input') input : UpdateReservationInput, @Args('id') id:number){
        return this.reservationService.update(input,id);
    }
}

