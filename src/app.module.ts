import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { CustomerModule } from './customer/customer.module';
import { RestaurantModule } from './restaurant/restaurant.module';
import { ReservationModule } from './reservation/reservation.module';
import { ReviewModule } from './review/review.module';


@Module({
  imports: [AuthModule, CustomerModule, RestaurantModule, ReservationModule, ReviewModule,],
})
export class AppModule {}
