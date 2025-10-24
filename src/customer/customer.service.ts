import { Injectable } from "@nestjs/common";
import { PrismaClient } from "../../generated/prisma";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateCustomerDTO } from "./customerDTO/createCustomerDTO";
import { UpdateCustomerDTO } from "./customerDTO/updateCustomerDTO";
import { NotFoundException } from "@nestjs/common";
@Injectable({})
export class CustomerService{
    constructor(private prisma:PrismaService){

    }
    async create(data:CreateCustomerDTO){
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
   async update(data: UpdateCustomerDTO, id: number) {
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
        return this.prisma.customer.findMany();
    }
    async findUnique(id : number){
       const existing = await this.prisma.customer.findUnique({ where: { id } });

  if (!existing) {
    throw new NotFoundException(`Customer with ID ${id} not found`);
  }
      return this.prisma.customer.findUnique({where :{id}});
    }
    async findByEmail(email : string){
      const existing = await this.prisma.customer.findFirst({where:{email}});
      if (!existing) {
    throw new NotFoundException(`Customer with email: ${email} not found`);
      }
      return this.prisma.customer.findFirst({where:{email}});
    }
    
}