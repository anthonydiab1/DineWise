import { Module } from '@nestjs/common';
import { ReservationController } from './reservation.controller';
import { ReservationService } from './reservation.service';
import {PrismaModule} from 'src/prisma/prisma.module'

@Module({
    controllers:[ReservationController],
    providers:[ReservationService],
    imports:[PrismaModule]
})
export class ReservationModule {}
