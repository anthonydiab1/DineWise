import { Module } from '@nestjs/common';
import { ReservationController } from './reservation.controller';
import { ReservationService } from './reservation.service';
import {PrismaModule} from 'src/prisma/prisma.module';
import { ReservationResolver } from './reservation.resolver';

@Module({
    controllers:[ReservationController],
    providers:[ReservationResolver,ReservationService],
    imports:[PrismaModule]
})
export class ReservationModule {}
