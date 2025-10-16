import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { CustomerModule } from './customer/customer.module';
import { RestaurantModule } from './restaurant/restaurant.module';


@Module({
  imports: [AuthModule, CustomerModule, RestaurantModule,],
})
export class AppModule {}
