import { Controller, Module } from '@nestjs/common';
import { RestaurantController } from './restaurant.controller';
import { RestaurantService } from './restaurant.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { RestaurantResolver } from './restaurantResolver';
@Module({
    controllers:[RestaurantController],
    providers:[RestaurantResolver,RestaurantService],
    imports:[PrismaModule]

})
export class RestaurantModule {
   
}
