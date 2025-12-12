import { Injectable } from "@nestjs/common";
import { PrismaClient } from "../../generated/prisma";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateCustomerInput } from "./InputType/createCustomerInput";
import { NotFoundException } from "@nestjs/common";
import { UpdateCustomerInput } from "./InputType/updateCustomerInput";
@Injectable({})
export class CustomerService{
    constructor(private prisma:PrismaService){

    }
    async create(data:CreateCustomerInput){
      
        return this.prisma.customer.create({data});
    }
    async delete(id:number){
         const existing = await this.prisma.customer.findUnique({ where: { id } });
        if (!existing) {
        throw new NotFoundException(`Customer with id '${id}' not found`);
         }
         return this.prisma.customer.delete({
            where:{id}});

    }
   async update(data: UpdateCustomerInput, id: number) {
  const existing = await this.prisma.customer.findUnique({ where: { id } });

  if (!existing) {
    throw new NotFoundException(`Customer with ID ${id} not found`);
  }

  return this.prisma.customer.update({
    where: { id },
    data,
  });
}

    async findAll(){
        return this.prisma.customer.findMany({
          include:{restaurant:true}
        });
    }
    async findUnique(id : number){
       const existing = await this.prisma.customer.findUnique({ where: { id }
      ,
    include:{restaurant:true} });

  if (!existing) {
    throw new NotFoundException(`Customer with ID ${id} not found`);
  }
      return existing;
    }
    async findByEmail(email : string){
      const existing = await this.prisma.customer.findFirst({where:{email},
      include:{restaurant:true}});
      if (!existing) {
    throw new NotFoundException(`Customer with email: ${email} not found`);
      }
      return existing;
    }
    async findRestaurant(customerId: number) {
  const customer = await this.prisma.customer.findUnique({
    where: { id: customerId },
    include:{restaurant:true}
  });

  if (!customer) {
    throw new NotFoundException(`Customer with ID ${customerId} not found`);
  }

  if (!customer.restaurantId) {
    throw new NotFoundException(`Customer with ID ${customerId} does not own a restaurant`);
  }

  const restaurant = await this.prisma.restaurant.findUnique({
    where: { id: customer.restaurantId }
  });

  return  restaurant;
}
    
}