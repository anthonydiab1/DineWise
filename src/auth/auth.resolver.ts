import {Resolver ,Mutation,Args} from "@nestjs/graphql"
import { AuthService } from "./auth.service"
import { Customer } from "src/customer/customer.type"
import { CreateCustomerInput } from "src/customer/InputType/createCustomerInput"
import { LoginInput } from "./InputType/loginInput"
@Resolver()
export class AuthResolver{
    constructor(private authService:AuthService){}
    @Mutation(() => Customer)
    async signup(@Args('input') input : CreateCustomerInput){
        return this.authService.signup(input);
    }

    @Mutation(() => Customer)
    async login(@Args('input') input :LoginInput){
        return this.authService.signin(input);
    }
}