import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateCustomerDTO } from 'src/customer/customerDTO/createCustomerDTO';
import { CustomerService } from 'src/customer/customer.service';
import { LoginDto } from './Dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private customerService: CustomerService,
  ) {}

  async signin(dto: LoginDto) {
    const customer = await this.customerService.findByEmail(dto.email);
    if (!customer) throw new UnauthorizedException('Invalid credentials');

    const isMatch = await bcrypt.compare(dto.password, customer.password);
    if (!isMatch) throw new UnauthorizedException('Invalid credentials');

    const { password, ...safe } = customer as any;
    return { ...safe, message: 'Signin Successful' };
  }

  async signup(dto: CreateCustomerDTO) {
    const hashedPassword = await bcrypt.hash(dto.password, 10);
    const customer = await this.customerService.create({
      ...dto,
      password: hashedPassword,
    });

    return {
      id: customer.id,
      email: customer.email,
      message: 'Signup Successful',
    };
  }
}
