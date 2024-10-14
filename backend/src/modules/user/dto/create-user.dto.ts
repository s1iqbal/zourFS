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

    @ApiProperty({
        description: 'Username of the user',
        example: 'john_doe',
      })
    @IsNotEmpty()
    @IsString()
    username: string;

    @ApiProperty({
        description: 'Password of the user',
        example: 'password',
      })
    @IsNotEmpty()
    @IsString()
    password: string;
  }