import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateCustomerDTO } from 'src/customer/customerDTO/createCustomerDTO';
import { LoginDto } from './Dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  signup(@Body() dto: CreateCustomerDTO) {
    return this.authService.signup(dto);
  }

  @Post('signin')
  signin(@Body() dto: LoginDto) {
    return this.authService.signin(dto);
  }
}
