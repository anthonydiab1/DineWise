import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CustomerService } from './customer.service';
import {Customer} from  './customer.type'
import { CreateCustomerInput } from './InputType/createCustomerInput';
import { UpdateCustomerInput } from './InputType/updateCustomerInput';

@Resolver(()=> Customer)
export class CustomerResolver{
    constructor(private customerService : CustomerService){}

    @Query(() => [Customer])
    async customers(){
        return this.customerService.findAll();
    }
    @Query(() => Customer)
    async customerById(@Args('id') id : number){
        return this.customerService.findUnique(id);
    }
    @Query(() => Customer)
    async customerByEmail(@Args('email') email : string){
        return this.customerService.findByEmail(email);
    }
    
    @Mutation(() => Customer)
    async createCustomer(@Args('input') input : CreateCustomerInput){
        return this.customerService.create(input);
    }
    @Mutation(() => Customer)
    async deleteCustomer(@Args('id') id : number){
        return this.customerService.delete(id);
    }
    @Mutation(() => Customer)
    async updateCustomer(@Args('input') input : UpdateCustomerInput, @Args('id') id : number){
        return this.customerService.update(input,id);
    }
}
