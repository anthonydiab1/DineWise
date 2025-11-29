import {Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  ParseIntPipe, 
  Put} from "@nestjs/common";
import { CustomerService } from "./customer.service";
import { CreateCustomerDTO } from "./customerDTO/createCustomerDTO";
import { UpdateCustomerDTO } from "./customerDTO/updateCustomerDTO";

@Controller("customer")
export class CustomerController{
    constructor(private customerService:CustomerService){}   
     @Post()
  create(@Body() dto: CreateCustomerDTO) {
   
    
    return this.customerService.create(dto);
  }
 @Put(':id')
update(@Param('id') id: string, @Body() dto: UpdateCustomerDTO) {
  return this.customerService.update(dto, Number(id));
}

@Delete(':id')
delete(@Param('id') id: string) {
  return this.customerService.delete(Number(id));
}
@Get(':email')
  findByEmail(@Param('email') email:string){
    return this.customerService.findByEmail(email);
  }
  @Get('/restaurant/:restaurantId')
  findRestaurantById(@Param('id') id : string){
    return this.customerService.findRestaurant(Number(id));
  }


  @Get()
  findAll() {
    return this.customerService.findAll();
  }
  @Get(':id')
  findUnique(@Param('id')id:string){
    return this.customerService.findUnique(Number(id));
  }
}