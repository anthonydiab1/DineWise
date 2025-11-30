import { Module } from '@nestjs/common';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CustomerResolver } from './customer.resolver';
@Module({
    controllers:[CustomerController],
    providers:[CustomerResolver,CustomerService],
    imports:[PrismaModule],
    exports:[CustomerService]
})
export class CustomerModule {}
