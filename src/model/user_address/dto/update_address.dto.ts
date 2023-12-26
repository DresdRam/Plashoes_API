import { IsNumber, IsOptional, IsPositive, IsString } from "class-validator";

export class UpdateAddressDto{
    
    @IsNumber()
    @IsPositive()
    address_id: number;

    @IsNumber()
    @IsPositive()
    governorate_id: number;

    @IsString()
    address_line1: string;

    @IsString()
    @IsOptional()
    address_line2: string;

    @IsString()
    postal_code: string;

}