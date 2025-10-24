import { Module } from '@nestjs/common';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
    controllers:[CustomerController],
    providers:[CustomerService],
    imports:[PrismaModule],
    exports:[CustomerService]
})
export class CustomerModule {}
