import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthResolver } from './auth.resolver';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { CustomerModule } from 'src/customer/customer.module';


@Module({
    imports: [
        CustomerModule,
    ],
    controllers: [AuthController],
    providers: [AuthResolver,AuthService],
   // exports: [PassportModule],
})
export class AuthModule {}