import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateCustomerDTO, UserRole } from 'src/customer/customerDTO/createCustomerDTO';
import { CustomerService } from 'src/customer/customer.service';
import { LoginDto } from './Dto/login.dto';

import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private customerService: CustomerService,
  ) {}

  async signin(dto: LoginDto) {
    const customer = await this.customerService.findByEmail(dto.email);
    if (!customer) throw new UnauthorizedException('Invalid credentials');
    if(!customer.role || customer.role==='CUSTOMER'){
        const isMatch = await bcrypt.compare(dto.password, customer.password);
        if (!isMatch) throw new UnauthorizedException('Invalid credentials');
    }
    if(customer.role === 'RESTAURANT_OWNER' && dto.password!= customer.password){
      throw new UnauthorizedException('Invalid credentials');
    }
    

    const { password, ...safe } = customer as any;
    return { ...safe,
      role: customer.role, message: 'Signin Successful' };
  }

  async signup(dto: CreateCustomerDTO) {
    let hashedPassword  ='';
    if(!dto.role || dto.role === 'CUSTOMER'){
       hashedPassword = await bcrypt.hash(dto.password, 10);
    }else{
      hashedPassword=dto.password;
    }
      const customer = await this.customerService.create({
      ...dto,
      password: hashedPassword,
      role:dto.role || UserRole.CUSTOMER,
    });
   

    return {
      id: customer.id,
      email: customer.email,
      message: 'Signup Successful',
    };
  }
}
