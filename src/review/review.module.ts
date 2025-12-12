import { Module } from '@nestjs/common';
import { ReviewController } from './review.controller';
import { ReviewService } from './review.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ReviewResolver } from './review.resolver';

@Module({
    controllers:[ReviewController],
    providers:[ReviewResolver,ReviewService],
    imports:[PrismaModule]
})
export class ReviewModule {}
