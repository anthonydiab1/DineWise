import { Controller, Module } from '@nestjs/common';
import { RestaurantController } from './restaurant.controller';
import { RestaurantService } from './restaurant.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
    controllers:[RestaurantController],
    providers:[RestaurantService],
    imports:[PrismaModule]

})
export class RestaurantModule {
   
}
