import { ApiProperty } from '@nestjs/swagger';
import {
    IsEmail,
    IsNotEmpty,
    IsString,
  } from 'class-validator';
  
  // create-user-dto
  export class CreateUserDto {
    @ApiProperty({
        description: 'Full name of the user',
        example: 'John Doe',
      })
    @IsNotEmpty()
    @IsString()
    fullName: string;
  
    @ApiProperty({
        description: 'Email address of the user',
        example: 'john.doe@example.com',
      })
    @IsNotEmpty()
    @IsEmail()
    email: string;
  }